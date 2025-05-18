import {Routes, Route, Navigate} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import Header from './components/Header/Header'
// import Home from './pages/Home'
const Home = lazy(() => import('./pages/Home'))
import SearchCountry from './pages/SearchCountry'
import Country from './pages/Country'

export const App = () => {
  return <>
  <Header/>
  <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/country' element={<SearchCountry/>}/>
    <Route path='/country/:countryId' element={<Country/>}/>
    <Route path='*' element={<Navigate to='/' replace/>}/>
  </Routes>
  </Suspense>
  </>;
};
