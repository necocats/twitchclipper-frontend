import React from 'react';
import Cliplist from '../components/Cliplist';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { clips } from '../Data/DummyData';
import '../css/Card.css';
import '../css/Cliplist.css'
import AddClipModal from '../components/AddClipModal';

const Toppage: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar
          twitchClipperIconSrc="/vite.svg"
          profileIconSrc="/vite.svg"
          isLogin={false}
        />
      </header>
      <div className='d-flex'>
        <Sidebar />
        <Cliplist clips={clips}/>
      </div>
      <AddClipModal />
    </div>
  );
};

export default Toppage;
