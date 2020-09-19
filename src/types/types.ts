export type colNameType =
  | 'id'
  | 'first_name'
  | 'last_name'
  | 'email'
  | 'gender'
  | 'ip_address';

export interface RowsType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export type salaryType = { from: string; to: string };

export type initialStateForNotifications = {
  opacity: number;
  timer: any;
  message: string;
  className: string;
};

export interface IBlankState {
  firstName: string;
  lastName: string;
  email: string;
  nationality: string;
  in5years: string;
  gender: 'male' | 'female' | 'other';
  checkboxes: Array<string>;
  workExp: '0-1' | '1-3' | '3-5' | '5+';
  salary: salaryType;
}
