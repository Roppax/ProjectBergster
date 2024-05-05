import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { DashboardContextProvider } from './components/Dashboard';
import { SettingsContextProvider } from './components/Settings';

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

ReactDOM.render(
  <BrowserRouter>
    <DashboardContextProvider>
      <SettingsContextProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={
            <React.Suspense fallback={<>Loading Fallback ...</>}>
              <Dashboard />
            </React.Suspense>
          } />
        </Routes>
      </SettingsContextProvider>
    </DashboardContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);