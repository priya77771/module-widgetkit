import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { 
  HomePage, 
  SignUpModal,
  SignInModal,
  BrowseModal 
} from './components';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                openModal={openModal}
                activeModal={activeModal}
              />
            } 
          />
        </Routes>
        
        <AnimatePresence>
          {activeModal === 'signup' && (
            <SignUpModal onClose={closeModal} />
          )}
          {activeModal === 'signin' && (
            <SignInModal onClose={closeModal} openSignUp={() => openModal('signup')} />
          )}
          {activeModal === 'browse' && (
            <BrowseModal onClose={closeModal} />
          )}
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;