import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import ErrorPage from 'pages/ErrorPage';
import SharedLayout from 'Layout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
