import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId:null,
  fullName:null,
  email:null,
  phone:null,
  token:null,
  login: () => {},
  logout: () => {}
});
