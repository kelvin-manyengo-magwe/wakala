//
// src/Services/Database/models/FloatCommissionCount/FloatCommissionCount.ts - (THE DEFINITIVE BRAIN)
// This file is the single source of truth for all calculations on the Reports screen.
//
import { TransactionsSchema } from '../../Schemas/TransactionsSchema';

// --- DATA STRUCTURES (DEFINING THE OUTPUT) ---

// For the individual MNO cards and summary calculations
export interface MnoReportSummary {
  totalCommission: number;
  totalFloat: number; // The latest known float for this MNO
}
export interface AllMnoSummaries {
  [mnoName: string]: MnoReportSummary; // e.g., { airtel: { ... }, halotel: { ... } }
}

// For the Monthly Bar Chart
export interface MonthlyMnoData { mno: string; count: number; }
export interface MonthlyChartData { month: string; data: MonthlyMnoData[]; }

// For the Daily Bar Chart
export interface DailyMnoData { mno: string; count: number; }
export interface DailyChartData { date: string; data: DailyMnoData[]; }

// The final, comprehensive object that this function returns
export interface ProcessedReportData {
    summaries: AllMnoSummaries;
    monthlyChartData: MonthlyChartData[];
    dailyChartData: DailyChartData[];
}

// --- THE MAIN DATA PROCESSING FUNCTION ---
export const processMnoSummaries = (transactions: Realm.Results<TransactionsSchema>): ProcessedReportData => {
  const summaries: AllMnoSummaries = {};
  const monthlyCounts: { [yearMonth: string]: { [mno: string]: number } } = {};
  const dailyCounts: { [fullDate: string]: { [mno: string]: number } } = {};

  const getMonthName = (date: Date) => ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des'][date.getMonth()];
  const getDayName = (date: Date) => ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'][date.getDay()];

  // Filter for the last 7 days for the Daily chart
  const today = new Date();
  const last7DaysDate = new Date();
  last7DaysDate.setDate(today.getDate() - 6);

  // --- LOOP THROUGH ALL TRANSACTIONS ONCE ---
  transactions.sorted('createdAt').forEach(txn => {
    let mno = txn.mno.toLowerCase();
    // Consolidate "tigo" into "yas"
    if (mno === 'tigo') mno = 'yas';

    const txnDate = txn.date;

    // --- 1. Calculate Per-MNO Summaries (Float & Commission) ---
    if (!summaries[mno]) {
      summaries[mno] = { totalCommission: 0, totalFloat: 0 };
    }
    summaries[mno].totalCommission += txn.commission;
    summaries[mno].totalFloat = txn.float; // The last one in the sorted list will be the latest float

    // --- 2. Calculate Monthly Transaction Counts ---
    const yearMonthKey = `${txnDate.getFullYear()}-${String(txnDate.getMonth()).padStart(2, '0')}`;
    if (!monthlyCounts[yearMonthKey]) monthlyCounts[yearMonthKey] = {};
    if (!monthlyCounts[yearMonthKey][mno]) monthlyCounts[yearMonthKey][mno] = 0;
    monthlyCounts[yearMonthKey][mno]++;

    // --- 3. Calculate Daily Transaction Counts (for the last 7 days) ---
    if (txnDate >= last7DaysDate) {
        const fullDateKey = txnDate.toISOString().split('T')[0]; // "2024-07-28"
        if (!dailyCounts[fullDateKey]) dailyCounts[fullDateKey] = {};
        if (!dailyCounts[fullDateKey][mno]) dailyCounts[fullDateKey][mno] = 0;
        dailyCounts[fullDateKey][mno]++;
    }
  });

  // --- 4. Format Data for Charts ---
  // Guarantees MONTHS are in correct chronological order
  const monthlyChartData = Object.keys(monthlyCounts).sort().map(key => ({
      month: getMonthName(new Date(`${key}-02`)),
      data: Object.entries(monthlyCounts[key]).map(([mno, count]) => ({ mno, count })),
  }));

  // Guarantees DAYS are in correct chronological order
  const dailyChartData = Object.keys(dailyCounts).sort().map(key => ({
      date: getDayName(new Date(key)),
      data: Object.entries(dailyCounts[key]).map(([mno, count]) => ({ mno, count })),
  }));

  return { summaries, dailyChartData, monthlyChartData };
};