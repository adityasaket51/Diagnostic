import "./App.css"
import React from 'react'
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import PopularTests from "./components/PopularTests"
import Poster from "./components/Poster"
import PopularHealthPackages from "./components/PopularHealthPackages"
import TopBookedTests from "./components/TopBookedTests"
import Footer from "./components/Footer"



import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Detail from "./components/Detail"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Searchbar/>

        <Routes>
          <Route path="/" element={<div><Poster/> <PopularTests/> <PopularHealthPackages/> <TopBookedTests/></div>}/>
          
          <Route path="/detais/:testName" element={<Detail/>}/>
          <Route path="/*" element={<PageNotFound/>}/></Routes>

        <Footer/>
      </div>
    </Router>
  )
}

export default App