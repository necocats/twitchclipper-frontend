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
  isLogin: boolean;
  handlePlaylistIdChange: (playlistId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({userId, isLogin, handlePlaylistIdChange}) => {
  const baseApiUrl = import.meta.env.VITE_BACKEND_BASE_API_URL;
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const uId: string = userId; // GoogleのユーザーIDから取ってくる
        const response = await axios.get(baseApiUrl + "playlists?userId=" + uId);
        setPlaylists(response.data);
        
      } catch (error) {
        console.error('fetchPlaylists Error: ', error);
      }
    }
    fetchPlaylists();
  }, [baseApiUrl, userId]);

  const handleCurrentPlaylistIdChange = (playlistName: string) => {
    handlePlaylistIdChange(playlistName);
  }

  const alart = () => {
    if (!isLogin) {
      alert('ログインが必要です');
    }
  };

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
              {isLogin ?
                <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addPlaylistModal">
                + 新規プレイリスト作成
                </div>:
                <div className="nav-link text-white" onClick={alart} >
                + 新規プレイリスト作成
                </div>
              }
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
