import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Componentes/Header/Header'
import Home from './Pages/Home/Home'
import MovieList from './Componentes/MovieList/MovieList'
import Movie from './Pages/MovieDetails/movie'

const App = () => {
  return (
   <>
   <div className="App">
   <Router>
   <Header /> 
   <Routes>
   <Route index element={<Home/>} />
  <Route path="movie/:id" element={<Movie />} />
  <Route path="movies/:type" element={<MovieList />} />
  <Route path="/*" element={<h1>Error page</h1>} />
  </Routes>
   </Router>
   </div>
   </>
  )
}

export default App
