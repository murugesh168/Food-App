import React from 'react';
import { RecipeProvider } from './context/RecipeContext';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavouritesPage from './pages/FavouritesPage';
import SearchPage from './pages/SearchPage';
import RecipeDetails from './pages/RecipeDetails';
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-gray-100'>
    <RecipeProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<SearchPage/>}></Route>
          <Route path='/recipe/:id' element={<RecipeDetails/>}></Route>
          <Route path='/favorites' element={<FavouritesPage/>}></Route>
        </Routes>
      </Router>
    </RecipeProvider>
    </div>
  )
}

export default App