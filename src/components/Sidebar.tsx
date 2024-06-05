// Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { FieldValue } from 'firebase/firestore';
import PlaylistCard from './PlaylistCard';
import axios from 'axios';

interface Playlist {
  id: string;
  user_id: string;
  playlist_name: string;
  description: string;
  created_at: FieldValue;
  updated_at: FieldValue;
}

const Sidebar: React.FC = () => {
  const [ playlists, setPlaylists ] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const userId: string = '1'; // GoogleのユーザーIDから取ってくる
        const response = await axios.get("http://localhost:8080/api/playlists?userId=" + userId);
        setPlaylists(response.data);
        
      } catch (error) {
        console.error('fethPlaylists Error: ', error);
      }
    }
    fetchPlaylists();
  }, []);
  return (
    <>
      <div>
        <div className="d-flex flex-column">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} name={playlist.playlist_name} description={playlist.description} onClick={() => {}} />
          ))}
          <PlaylistCard name={'新規プレイリスト作成'} description={''} onClick={() => {}}/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
