import React from "react";

// create the context
export type IAuthContext = {
  authInfo: {
    loggedIn: boolean;
    user: {
      email: string;
      id: string;
    };
  };
  logOut: any;
  logIn: any;
};
const AuthContext = React.createContext<any>(undefined);

// create the context provider, we are using use state to ensure that
// we get reactive values from the context...
export const AuthProvider: React.FC = ({ children }) => {
  // the reactive values
  const [authInfo, setAuthInfo] = React.useState<any>();

  const logOut = () => {
    return new Promise((resolve) => {
      setAuthInfo({ loggedIn: false, user: null });
      setTimeout(() => {
        return resolve(true);
      }, 1000);
    });
  };

  const logIn = (email: string, password: string) => {
    return new Promise((resolve) => {
      let v = {
        loggedIn: true,
        user: { email, id: new Date().getTime() + "" },
      };
      setAuthInfo(v);
      setTimeout(() => {
        return resolve(true);
      }, 1000);
    });
  };

  let v = {
    authInfo,
    logOut: logOut,
    logIn: logIn,
  };

  return <AuthContext.Provider value={v}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext) as IAuthContext;
