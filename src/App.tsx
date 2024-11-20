import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SlotMachine } from './components/SlotMachine';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Welcome to DirtyHabits Gameroom
                </h1>
                <p className="text-gray-400 mb-8">Choose your game and test your luck!</p>
              </div>
            } />
            <Route path="/slots" element={<SlotMachine />} />
            <Route path="/fishing" element={
              <div className="text-center text-gray-400">
                Fishing game coming soon...
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;