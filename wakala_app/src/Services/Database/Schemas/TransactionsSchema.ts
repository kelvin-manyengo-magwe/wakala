

export const TransactionsSchema = {
  name: 'deposits_transaction',  // Collection name
  primaryKey: '_id',  // Unique ID for every SMS
  properties: {
    _id: 'string',
    customer_name: 'string',
    customer_no: 'string',
    date: 'date',
    amount: 'double',  //for decimal places
    ref_no: 'string',
    type: 'string',
    commission: 'double',
    float: 'double',
    raw: 'string',
    createdAt: 'date',
  },
};


