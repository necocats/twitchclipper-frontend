// Sidebar.tsx
import React from 'react';
import PlaylistCard from './PlaylistCard';

interface Playlist {
  id: number;
  name: string;
  description: string;
}

interface SidebarProps {
  playlists: Playlist[];
  onClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, onClick }) => {
  return (
    <>
      <div>
        <div className="d-flex flex-column">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} name={playlist.name} description={playlist.description} onClick={onClick} />
          ))}
          <PlaylistCard name={'新規プレイリスト作成'} description={''} onClick={onClick}/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
