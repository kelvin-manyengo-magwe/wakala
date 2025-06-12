
export interface loginCredentials {
    name: string; // or email depending on your backend
    password: string;
}

export interface UserData { // Define based on what your API returns
    id: number;
    name: string;
    email: string;
    phone_no?: string;
    till_numbers_data?: Array<{ mno_key: string, till_no: string }>;
    // add other user fields you return
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
    user?: UserData;
}