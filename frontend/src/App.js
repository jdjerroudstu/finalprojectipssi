import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import ShowFoodList from './components/ShowFoodList';
import ShowFoodDetails from './components/ShowFoodDetails';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowFoodList />} />
          <Route path='/show-food/:id' element={<ShowFoodDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 
