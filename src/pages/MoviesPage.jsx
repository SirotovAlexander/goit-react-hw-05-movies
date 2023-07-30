import { Outlet, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';

const MoviesPage = () => {
  return (
    <div>
      <form>
        <input type="text" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
