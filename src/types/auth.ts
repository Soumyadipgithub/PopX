export interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  isAgency: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}