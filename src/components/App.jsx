import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import ErrorPage from 'pages/ErrorPage';
import SharedLayout from 'Layout/SharedLayout';
// import MoviesDetails from './MoviesDetails/MoviesDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
// const SharedLayout = lazy(() => import('Layout/SharedLayout'));
const MoviesDetails = lazy(() => import('./MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:MovieID" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
