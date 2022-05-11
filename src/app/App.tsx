import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./contexts/authContext";
import { getToken, setToken, removeToken } from "./helpers";
import { useAuth } from "./hooks";
import {
  AlbumPage,
  LoginPage,
  AlbumsPage,
  DashboardPage,
  EditAlbumPage,
  CreateAlbumPage,
  NotFoundPage,
  DatePage,
} from "./pages";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

interface AuthProviderProps {
  children: JSX.Element;
}

interface PrivatPathProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setLogin] = useState(Boolean(getToken()));

  const logIn = () => {
    setToken(String(Date.now()));
    setLogin(true);
  };
  const logOut = () => {
    removeToken();
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivatPath = ({ children }: PrivatPathProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivatPath>
                  <DashboardPage />
                </PrivatPath>
              }
            />
            <Route
              path="/albums"
              element={
                <PrivatPath>
                  <AlbumsPage />
                </PrivatPath>
              }
            />
            <Route
              path="/albums/create"
              element={
                <PrivatPath>
                  <CreateAlbumPage />
                </PrivatPath>
              }
            />
            <Route
              path="/albums/:id"
              element={
                <PrivatPath>
                  <AlbumPage />
                </PrivatPath>
              }
            />
            <Route
              path="/albums/:id/edit"
              element={
                <PrivatPath>
                  <EditAlbumPage />
                </PrivatPath>
              }
            />
            <Route
              path="/inputs"
              element={
                <PrivatPath>
                  <DatePage />
                </PrivatPath>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
