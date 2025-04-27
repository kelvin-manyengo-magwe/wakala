
//The core summaries
export interfaces HomeTotalMnoSummary {
            TotalDeposits: number,
            TotalCommission: number,
            TotalWithdrawals: number,
            TotalFloat: number,
    }

//Time trends based summary analytics
export interfaces TimeSeriesData {
            date: Date,
            amount: number,
    }


export type timePeriod = '24h' | '7d' | '30d' | '90d';
