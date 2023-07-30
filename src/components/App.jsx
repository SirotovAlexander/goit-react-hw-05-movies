import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import ErrorPage from 'pages/ErrorPage';
import SharedLayout from 'Layout/SharedLayout';
import MoviesDetails from './MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:MovieID" element={<MoviesDetails />}>
          <Route path="/movies/:MovieID/:cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
