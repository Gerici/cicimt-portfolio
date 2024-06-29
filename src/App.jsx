import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Bio from './components/Bio';
import Competenze from './components/Competenze';
import Collaboration from './components/Staffexperiences';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header></Header>
      <Bio></Bio>
      <Collaboration></Collaboration> 
      <Competenze></Competenze>    
      <Footer></Footer> 
        </div>
      )}
    </>
  );
}

export default App;
