

export interface smsEvent {
  address: string;
  body: string;
}


export interface parsedData {
  _id: string;
  customer_name: string;
  customer_no: string;
  date: string;
  amount: number;
  ref_no: string;
  type: string;
  commission: number;
  float: number;
  raw: string;
  mno: 'halotel' | 'airtel' | 'vodacom' | 'tigo' | 'unknown';
  createdAt?: string;
}
