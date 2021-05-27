import { E_ERROR } from './enum';

// REACT
export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}

// ERRORS
export interface IMsg {
  msg: string | any;
}

// AUTH
export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthForm {
  isAuthenticated?: boolean;
  error: IError;
  clearErrors(): void;
}

export interface ILoginModal extends IAuthForm {
  login(user: IUser): void;
}

export interface IRegisterModal extends IAuthForm {
  register(user: IUser): void;
}

export interface ILogoutProps {
  logout(): void;
}

export interface IError {
  id: E_ERROR;
  msg: IMsg;
}

export interface IAuthReduxProps {
  auth: { isAuthenticated: boolean };
  error: IError;
}

export interface IConfigHeaders {
  headers: {
    [index: string]: string;
  };
}

// NAVBAR
export interface IAppNavbar {
  auth?: {
    isAuthenticated: boolean;
    user: IUser;
  };
}

// ITEMS
export interface IExistingCompetition {
  _id: string;
  name: string;
}

export interface ICompetition {
  _id?: string;
  name: string;
}

export interface ICompetitionModal {
  isAuthenticated: boolean;
  addCompetition(competition: ICompetition): void;
}

export interface ICompetitionReduxProps extends IAuthReduxProps {
  competition: {
    competitions: IExistingCompetition[];
  };
}

export interface IUserCompetitionDetail {
  competition: {
    competitions: IExistingCompetition[];
  };
  getCompetitions(): void;
  deleteCompetition(id: string): void;
  isAuthenticated: boolean;
}

// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< FLUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

export interface IAuthFunction {
  name?: string;
  email: string;
  password: string;
}

export interface IReturnErrors {
  msg: {
    msg: string | any;
  };
  status: string;
  id: any;
}

export interface IAction {
  type: string;
  payload?: any;
}