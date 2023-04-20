import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";

import "./App.css";
import DefaultLayout from "~/layouts/DefaultLayout";
import { database } from "./config/firebase";
import { child, get, ref } from "firebase/database";

function App() {
  // read database
  const dbRef = ref(database);
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data invalid");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
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
  );
}

export default App;
