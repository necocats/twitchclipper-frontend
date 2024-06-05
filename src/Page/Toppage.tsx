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
          twitchClipperIconSrc=""
          profileIconSrc=""
          isLogin={false}
        />
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Cliplist clips={clips} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toppage;
