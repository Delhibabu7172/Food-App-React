import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
const Hero = lazy(() => import('./components/Hero'));
const HeadlinesCards = lazy(() => import('./components/HeadlinesCards'));
const Food = lazy(() => import('./components/Food'));
const Catergory = lazy(() => import('./components/Catergory'));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <Hero />
        <HeadlinesCards />
        <Food />
        <Catergory />
      </Suspense>
    </div>
  );
}

export default App;

