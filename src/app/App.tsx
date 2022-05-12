import React from "react";
import { ApolloProvider } from "@apollo/client";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivatePath } from "./components";
import client from "./configs/appolo";
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
import AuthProvider from "./providers/AuthProvider";

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
                  <AlbumsPage />
                </PrivatePath>
              }
            />
            <Route
              path="/albums/create"
              element={
                <PrivatePath>
                  <CreateAlbumPage />
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
                  <EditAlbumPage />
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
