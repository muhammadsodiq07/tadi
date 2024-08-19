export type UserListType = {
  id: number;
  name: string;
  date: string;
  dob: string;
  raise: string;
  timeFly: string;
  timeLanding: string;
  pinfl: string;
  photo: string;
  status: string;
};

export type TableType = {
  id: number;
  firstName: string;
  gender: string;
  birthDate: string;
  ssn: string;
  age: string;
  phone: number;
  lastName: string;
  email: string;
  address: {
    address: string;
    city: string;
    country: string;
  };
};

export type Turniket_StatusType = {
  id: number;
  status: string;
  color: string;
};

export interface AuthCredentials {
  username: string;
  password: string;
}
