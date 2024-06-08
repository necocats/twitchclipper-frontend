import { FieldValue } from 'firebase/firestore';
import '../css/Cliplist.css'
import addClipImage from '/add_clip.png';
import ClipCard from "./ClipCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Clip {
  clip_id: string;
  user_id: string;
  title: string;
  broadcaster_name: string;
  clip_url: string;
  thumbnail_url: string;
  created_at: FieldValue;
  updated_at: FieldValue;
}

interface CliplistProps {
  userId: string;
  currentPlaylistId: string;
  currentPlaylistName: string;
}

const Cliplist: React.FC<CliplistProps> = ({ userId, currentPlaylistId, currentPlaylistName }) => {
  const baseApiUrl = import.meta.env.VITE_BACKEND_BASE_API_URL;
  const [clips, setClips] = useState<Clip[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      if(currentPlaylistId != ""){
        try {
          const playlistId = currentPlaylistId;
          const response = await axios.get(baseApiUrl + "clips?playlistId=" + playlistId);
          setClips(response.data);
          
        } catch (error) {
          console.error('fetchPlaylists Error: ', error);
        }
      }
    }
    fetchPlaylists();
  }, [baseApiUrl, currentPlaylistId]);

  const handleCardClick = (clipUrl: string) => {
    window.open(clipUrl, '_blank');
  };

  return (
    <>
      <div className='content flex-grow-1'>
        <h2 style={{marginLeft: "0.5rem", marginBottom: "1rem"}}>{currentPlaylistName}</h2>
        <div className="d-flex flex-row flex-wrap clip-list">
          {
            clips.map((clip) => (
              //クリップのカード
              <ClipCard
                key={clip.clip_id}
                title={clip.title} 
                broadcaster_name={clip.broadcaster_name}
                thumbnail_url={clip.thumbnail_url}
                onClick={() => handleCardClick(clip.clip_url)}
              />
            ))
          }
          {
            currentPlaylistId ? (
              <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addClipModal">
                <ClipCard title={"新規クリップ追加"} broadcaster_name={"ここをクリックしてクリップを追加！"} thumbnail_url={addClipImage}/>
              </div>
            ) : (
              userId ? (
                <h2>左のプレイリストを選択してください</h2>
              ) : (
                <h2>右上からログインをお願いします</h2>
              )
            )
          }

        </div>
      </div>
    </>
  );
};

export default Cliplist;
