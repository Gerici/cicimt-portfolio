import React, { useEffect, useState } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Bio from './components/Bio';
import Competenze from './components/Competenze';
import Footer from './components/Footer';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Collaboration from './components/Staffexperiences';

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
      <ButtonGradient></ButtonGradient>
        </div>
      )}
    </>
  );
}

export default App;
