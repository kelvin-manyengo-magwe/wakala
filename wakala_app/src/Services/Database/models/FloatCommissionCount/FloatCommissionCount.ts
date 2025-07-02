import { TransactionsSchema } from '../../Schemas/TransactionsSchema';




// Defines the summary structure for a single MNO
export interface MnoReportSummary {
  totalCommission: number;
  totalFloat: number; // This will be the LATEST float for that MNO
  transactionCount: number;
}

// Defines the final structure containing all MNOs
export interface AllMnoSummaries {
  [mnoName: string]: MnoReportSummary;
}

// The main data processing function
export const processMnoSummaries = (transactions: Realm.Results<TransactionsSchema>): AllMnoSummaries => {
  const summaries: AllMnoSummaries = {};

  // Sort transactions by date so we can find the latest float accurately.
  // Note: Realm's `.sorted()` returns a NEW collection, so this is efficient.
  const sortedTransactions = transactions.sorted('createdAt', true); // true for descending (newest first)

  sortedTransactions.forEach(txn => {
    const mno = txn.mno.toLowerCase();

    // If this is the first time we're seeing this MNO, create its entry.
    if (!summaries[mno]) {
      summaries[mno] = {
        totalCommission: 0,
        totalFloat: 0, // Will be set to the very first (newest) float we see
        transactionCount: 0,
      };
    }

    // Set the float ONLY for the first transaction we see for this MNO.
    // Because the list is sorted newest-to-oldest, this will be the latest float.
    if (summaries[mno].transactionCount === 0) {
      summaries[mno].totalFloat = txn.float;
    }

    // Add to the totals
    summaries[mno].totalCommission += txn.commission;
    summaries[mno].transactionCount += 1;
  });

  return summaries;
};