import type React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { RecoilRoot } from 'recoil';

import { Notifications } from 'src/components/Notifications';
import Candidates from 'src/pages/Candidates/Candidates';
import Consultants from 'src/pages/Consultants/Consultants';
import ForgotPassword from 'src/pages/ForgotPassword/ForgotPassword';
import Login from 'src/pages/Login/Login';
import Opportunities from 'src/pages/Opportunities/Opportunities';
import theme from 'src/theme';

function App(): React.ReactElement | null {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {/* TODO: Replace 'opportunities', 'candidates' and 'consultants' with Dashboard */}
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
        <Notifications />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
