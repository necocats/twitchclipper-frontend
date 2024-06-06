import React, { useState } from 'react';
import Cliplist from '../components/Cliplist';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../css/Card.css';
import '../css/Cliplist.css'
import AddClipModal from '../components/AddClipModal';
import AddPlaylistModal from '../components/AddPlaylistModal';

const Toppage: React.FC = () => {
  const [currentPlaylistId, setCurrentPlaylistId] = useState<string>("");
  const handlePlaylistIdChange = (playlistId: string) => {
    setCurrentPlaylistId(playlistId);
  }
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
        <Sidebar handlePlaylistIdChange={handlePlaylistIdChange}/>
        <Cliplist currentPlaylistId={currentPlaylistId}/>
      </div>
      <AddPlaylistModal />
      <AddClipModal />
    </div>
  );
};

export default Toppage;
