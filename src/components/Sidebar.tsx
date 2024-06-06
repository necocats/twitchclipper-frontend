import React, { useEffect, useState } from 'react';
import { FieldValue } from 'firebase/firestore';
import axios from 'axios';
import '../css/Sidebar.css'; // CSSファイルをインポート

interface Playlist {
  id: string;
  user_id: string;
  playlist_name: string;
  description: string;
  created_at: FieldValue;
  updated_at: FieldValue;
}

interface SidebarProps {
  userId: string;
  handlePlaylistIdChange: (playlistId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({userId, handlePlaylistIdChange}) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const uId: string = userId; // GoogleのユーザーIDから取ってくる
        const response = await axios.get("http://localhost:8080/api/playlists?userId=" + uId);
        setPlaylists(response.data);
        
      } catch (error) {
        console.error('fetchPlaylists Error: ', error);
      }
    }
    fetchPlaylists();
  }, [userId]);

  const handleCurrentPlaylistIdChange = (playlistName: string) => {
    handlePlaylistIdChange(playlistName);
  }

  return (
    <>
      <nav className="sidebar bg-dark">
        <ul className="nav flex-column">
            <li className="nav-item">
              <div className="nav-top text-white">プレイリスト一覧</div>
            </li>
            {playlists.map((playlist) => (
              <li className="nav-item" key={playlist.id}>
                <div className="nav-link text-white" onClick={() => {handleCurrentPlaylistIdChange(playlist.id)}}>{playlist.playlist_name}</div>
              </li>
            ))}
            <li className='nav-item'>
              <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addPlaylistModal">
              + 新規プレイリスト作成
              </div>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
