import { useEffect, useState } from 'react';
import './App.css';
import BreedingRhombusSpinner from './BreedingRhombusSpinner';
import Homepage from './Homepage';

const App = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="spinner-container">
          <BreedingRhombusSpinner color="red" />
        </div>
      ) : (
        <>
          <Homepage />
        </>
      )}
    </div>
  );
};

export default App;