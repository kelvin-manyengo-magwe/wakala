import { TransactionsSchema } from '../../Schemas/TransactionsSchema';

// --- NEW DATA STRUCTURES FOR CHARTS ---
// Data point for a single MNO on a specific day
export interface DailyMnoData {
  mno: string;
  count: number;
}
// Data for a single day, containing an array of MNO data
export interface DailyChartData {
  date: string; // e.g., "Jumatatu"
  data: DailyMnoData[];
}
// Data for a single MNO over an entire month
export interface MonthlyMnoData {
  mno: string;
  count: number;
}
// Data for a single month, containing an array of MNO data
export interface MonthlyChartData {
  month: string; // e.g., "April"
  data: MonthlyMnoData[];
}


// --- ORIGINAL DATA STRUCTURES (Kept for compatibility) ---
export interface MnoReportSummary {
  totalCommission: number;
  totalFloat: number;
  transactionCount: number;
}
export interface AllMnoSummaries {
  [mnoName: string]: MnoReportSummary;
}

// --- FINAL COMBINED OUTPUT of our new data processor ---
export interface ProcessedReportData {
    summaries: AllMnoSummaries;
    dailyChartData: DailyChartData[];
    monthlyChartData: MonthlyChartData[];
}

// --- THE MAIN DATA PROCESSING FUNCTION (Rebuilt) ---
export const processMnoSummaries = (transactions: Realm.Results<TransactionsSchema>): ProcessedReportData => {
  const summaries: AllMnoSummaries = {};
  const dailyCounts: { [date: string]: { [mno: string]: number } } = {};
  const monthlyCounts: { [month: string]: { [mno: string]: number } } = {};

  const sortedTransactions = transactions.sorted('createdAt', true); // Newest first

  const getDayName = (date: Date) => ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'][date.getDay()];
  const getMonthName = (date: Date) => ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des'][date.getMonth()];

  // Get today's date and the date 7 days ago to filter for the last week
  const today = new Date();
  const last7Days = new Date();
  last7Days.setDate(today.getDate() - 6); // Includes today

  sortedTransactions.forEach(txn => {
    const mno = txn.mno.toLowerCase();
    const txnDate = txn.date;

    // --- Process Summary Cards ---
    if (!summaries[mno]) {
      summaries[mno] = { totalCommission: 0, totalFloat: txn.float, transactionCount: 0 };
    }
    summaries[mno].totalCommission += txn.commission;
    summaries[mno].transactionCount++;

    // --- Process Daily Chart Data (for the last 7 days) ---
    if(txnDate >= last7Days && txnDate <= today) {
        const dayName = getDayName(txnDate);
        if(!dailyCounts[dayName]) dailyCounts[dayName] = {};
        if(!dailyCounts[dayName][mno]) dailyCounts[dayName][mno] = 0;
        dailyCounts[dayName][mno]++;
    }

    // --- Process Monthly Chart Data ---
    const monthName = getMonthName(txnDate);
    if (!monthlyCounts[monthName]) monthlyCounts[monthName] = {};
    if (!monthlyCounts[monthName][mno]) monthlyCounts[monthName][mno] = 0;
    monthlyCounts[monthName][mno]++;
  });

  // --- Format Chart Data for consumption by the component ---
  const dailyChartData = Object.entries(dailyCounts).map(([date, data]) => ({ date, data: Object.entries(data).map(([mno, count])=> ({ mno, count})) }));
  const monthlyChartData = Object.entries(monthlyCounts).map(([month, data]) => ({ month, data: Object.entries(data).map(([mno, count]) => ({ mno, count})) }));

  return { summaries, dailyChartData, monthlyChartData };
};