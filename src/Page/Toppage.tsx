import React from 'react';
import Cliplist from '../components/Cliplist';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { clips } from '../Data/DummyData';
import '../css/Card.css';
import '../css/Cliplist.css'

const Toppage: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar
          twitchClipperIconSrc="/public/vite.svg"
          profileIconSrc="/public/vite.svg"
          isLogin={false}
        />
      </header>
      <div className='d-flex'>
        <Sidebar />
        <Cliplist clips={clips}/>
      </div>
    </div>
  );
};

export default Toppage;
