import { Route, Routes } from 'react-router-dom';
import { getTrending } from '../api/getDataAPI';

export const App = () => {
  // getTrending();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
