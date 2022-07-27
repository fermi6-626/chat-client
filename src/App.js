import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Share from './pages/Share';
import About from './pages/About';
import Rules from './pages/Rules';
import Chat from './pages/Chat';
import Message from './pages/Message';
// import W3CWebSocket from 'websocket/lib/W3CWebSocket';

// client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat_application/chat/')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/share' element={<Share />} />
        <Route path='/about' element={<About />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/chat' element={<Message />} />
        <Route path='/*' element={<> Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
