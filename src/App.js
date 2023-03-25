import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'

import './App.css';
import Home from './layouts/Home';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route,index)=>{
          let Layout = Home
          const Page = route.component
          if(route.layout){
            Layout = route.layout
          }else if(route.layout === null){
            Layout = Fragment
          }
          return (
            <Route 
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page/>
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  );
}

export default App;
