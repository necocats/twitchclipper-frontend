import { Timestamp } from 'firebase/firestore';
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
  created_at: Timestamp;
  updated_at: Timestamp;
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
      if (currentPlaylistId !== "") {
        try {
          const playlistId = currentPlaylistId;
          const response = await axios.get(baseApiUrl + "clips?playlistId=" + playlistId);
          const sortedClips = response.data.sort((a: Clip, b: Clip) => {
            return a.created_at.seconds - b.created_at.seconds; //時間順にソート
          });
          setClips(sortedClips);
        } catch (error) {
          console.error('fetchPlaylists Error: ', error);
        }
      }
    };
    fetchPlaylists();
  }, [baseApiUrl, currentPlaylistId]);
  
  const handleTrashClick = async (clipId: string) => {
    try {
      await axios.delete(`${baseApiUrl}clips/${clipId}`);
      const updatedClips = clips.filter(clip => clip.clip_id !== clipId);
      setClips(updatedClips);
    } catch (error) {
      console.error('Error delete clip: ', error);
    }
  };

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
                showTrashIcon={true}
                onTrashClick={() => handleTrashClick(clip.clip_id)}
              />
            ))
          }
          {
            currentPlaylistId ? (
              <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addClipModal">
                <ClipCard 
                  title={"新規クリップ追加"} 
                  broadcaster_name={"ここをクリックしてクリップを追加！"} 
                  thumbnail_url={addClipImage}
                  showTrashIcon={false}
                  />
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
