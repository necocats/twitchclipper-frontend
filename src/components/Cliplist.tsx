import { FieldValue } from 'firebase/firestore';
import '../css/Cliplist.css'
import addClipImage from '../image/add_clip.png';
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
  currentPlaylistId: string;
}

// interface CliplistProps {
//   clips: clip[];
//   onClick?: () => void;
// }

const Cliplist: React.FC<CliplistProps> = ({ currentPlaylistId }) => {
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

  return (
    <>
      <div className='content flex-grow-1'>
        <div className="d-flex flex-row flex-wrap clip-list">
          {
            clips.map((clip) => (
              <ClipCard
                key={clip.clip_id}
                title={clip.title} 
                broadcaster_name={clip.broadcaster_name}
                thumbnail_url={clip.thumbnail_url}
              />
            ))
          }
          {
            currentPlaylistId ? (
              <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addClipModal">
                <ClipCard title={"新規クリップ追加"} broadcaster_name={"tes"} thumbnail_url={addClipImage}/>
              </div>
            ) : (
              <h2>左のプレイリストを選択してください</h2>
            )
          }

        </div>
      </div>
    </>
  );
};

export default Cliplist;
