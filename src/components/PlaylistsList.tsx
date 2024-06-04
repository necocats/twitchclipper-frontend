// PlaylistsList.tsx
import React from 'react';
import PlaylistCard from './PlaylistCard';

interface Playlist {
  id: number;
  name: string;
  description: string;
}

interface PlaylistsListProps {
  playlists: Playlist[];
}

const PlaylistsList: React.FC<PlaylistsListProps> = ({ playlists }) => {
  return (
    <>
      <div>
        <div className="d-flex flex-column">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} name={playlist.name} description={playlist.description} />
          ))}
          <PlaylistCard name={'新規プレイリスト作成'} description={''}/>
        </div>
      </div>
    </>
  );
};

export default PlaylistsList;
