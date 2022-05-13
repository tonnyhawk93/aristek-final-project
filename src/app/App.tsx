import React from "react";
import { ApolloProvider } from "@apollo/client";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivatePath } from "./components";
import client from "./configs/appolo";
import {
  AlbumsPages,
  LoginPage,
  DashboardPage,
  NotFoundPage,
  DatePage,
} from "./pages";
import AuthProvider from "./providers/AuthProvider";

const { AlbumsEditPage, AlbumPage, AlbumsCreatePage, AlbumsListPage } =
  AlbumsPages;

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivatePath>
                  <DashboardPage />
                </PrivatePath>
              }
            />
            <Route
              path="/albums"
              element={
                <PrivatePath>
                  <AlbumsListPage />
                </PrivatePath>
              }
            />
            <Route
              path="/albums/create"
              element={
                <PrivatePath>
                  <AlbumsCreatePage />
                </PrivatePath>
              }
            />
            <Route
              path="/albums/:id"
              element={
                <PrivatePath>
                  <AlbumPage />
                </PrivatePath>
              }
            />
            <Route
              path="/albums/:id/edit"
              element={
                <PrivatePath>
                  <AlbumsEditPage />
                </PrivatePath>
              }
            />
            <Route
              path="/inputs"
              element={
                <PrivatePath>
                  <DatePage />
                </PrivatePath>
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
