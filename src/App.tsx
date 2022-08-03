import { Navigate, Route, Routes } from 'react-router-dom'
import { Basket } from './components/Baasket'
import { Categories } from './components/Categories'
import Header from './components/Header'
import { Home } from './components/Home'
import { PageNotFound } from './components/PageNotFound'

function App() {
  return (
    <>
      <Header />
      <main>
         {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
          <Route index element={<Navigate to="/home" /> }/>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
       
      </main>
    </>
  )
}

export default App
