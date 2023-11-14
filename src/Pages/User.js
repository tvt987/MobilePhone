import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Nav from '../Components/Nav.js';
import Footer from '../Components/Footer.js';
import Model from '../Components/Model.js';
import ProductDetail from './ProductDetail.js';
import Category from '../Pages/Category.js'

function User() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [countdownIntervalId, setCountdownIntervalId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const countDownDate = new Date("Dec 5, 2024 15:37:25").getTime();

    const intervalId = setInterval(() => {
      if (cleanup.current) {
        clearInterval(intervalId);
        return;
      }

      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = formatTime(Math.floor(distance / (1000 * 60 * 60)));
      const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

      setTime({ hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(intervalId);
        navigate('/'); // Navigate to the home page when the countdown reaches zero
      }
    }, 1000);

    setCountdownIntervalId(intervalId);

    return () => {
      cleanup.current = true;
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const cleanup = React.useRef(false);

  const formatTime = (time) => {
    return time < 10 ? '0' + time : time;
  };

  return (
    <div style={{ backgroundColor: '#3E3E3F' }}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/oppo' element={<Category />} />
      </Routes>
      {/* Use state values instead of querying the DOM */}
      <div className="count-down">
        <span>KẾT THÚC TRONG</span>
        <div className="countdown-time">
          <div className="hours"><span>{time.hours}</span></div>
          <span>:</span>
          <div className="minutes"><span>{time.minutes}</span></div>
          <span>:</span>
          <div className="seconds"><span>{time.seconds}</span></div>
        </div>
      </div>
      <Footer />
      <Model />
    </div>
  );
}

export default User;
