import { Timestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Sidebar.css'; // CSSファイルをインポート

interface Playlist {
  id: string;
  user_id: string;
  playlist_name: string;
  description: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

interface SidebarProps {
  userId: string;
  currentPlaylistId: string;
  isLogin: boolean;
  handlePlaylistChange: (playlistId: string, playlistName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({userId, currentPlaylistId, isLogin, handlePlaylistChange}) => {
  const baseApiUrl = import.meta.env.VITE_BACKEND_BASE_API_URL;
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const uId: string = userId; // GoogleのユーザーIDから取ってくる
        const response = await axios.get(baseApiUrl + "playlists?userId=" + uId);
        const sortedPlaylists = response.data.sort((a: Playlist, b: Playlist) => {
          return a.created_at.seconds - b.created_at.seconds; // 時間順にソート
        });
        setPlaylists(sortedPlaylists);
      } catch (error) {
        console.error('fetchPlaylists Error: ', error);
      }
    }
    fetchPlaylists();
  }, [baseApiUrl, userId, currentPlaylistId]);

  const handleCurrentPlaylistChange = (playlistId: string, playlistName: string) => {
    handlePlaylistChange(playlistId, playlistName);
  }

  const handleTrashClick = () => {
    // playlist削除の処理
  };

  const alertLogin = () => {
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
              <div
                className="nav-link text-white"
                onClick={() => { handleCurrentPlaylistChange(playlist.id, playlist.playlist_name) }}
              >
                {playlist.playlist_name}
                <i
                className="bi bi-trash trash-icon"
                onClick={(e) => {
                  e.stopPropagation(); // リンクのクリックイベントを発火させない
                  handleTrashClick();
                }}
              ></i>
              </div>
              
            </li>
          ))}
          <li className='nav-item'>
            {isLogin ?
              <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addPlaylistModal">
                + 新規プレイリスト作成
              </div> :
              <div className="nav-link text-white" onClick={alertLogin} >
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