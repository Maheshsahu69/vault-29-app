import { UserType, AccountType } from "./constants";

export interface User {
  id: number,
  username: string,
  business_name?: string,
  business_address?: string,
  email: string,
  telephone: string,
  user_type: string,
  account_type: string,
  facebook_uid?: string,
  state?: string,
  zipcode?: string,
  url?: string,
  date_of_birth?: string,
  gender?: string,
  photo_url?: string,
  temporary_password?: string,
  facebook_account_type?: string,
  userid?: string,
  bio?: string,
  verified: boolean,
  location?: string
}

export interface AlertMessage {
  msg: string;
  alertType: string;
  id: string;
}

export interface JoinForm {
  name: string,
  username: string,
  email: string,
  password: string,
  location?: string,
  birthday?: string,
  gender?: string,
  user_type: UserType,
  account_type: AccountType,
}