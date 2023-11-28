import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "~/routes";

import "./App.css";
import DefaultLayout from "~/layouts/DefaultLayout";

import { AuthProvider } from "~/context/userContext";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged: ", user);
        // User đang đăng nhập
        setCurrentUser(user);
      } else {
        // Không có người dùng đăng nhập
        console.log("none user: ", user);
        setCurrentUser(null);
      }
    });
    return () => unsubsribe();
  }, []);
  let Layout = DefaultLayout;
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {currentUser
            ? privateRoutes.map((route, index) => {
                const Page = route.component;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })
            : publicRoutes.map((route, index) => {
                const Page = route.component;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
