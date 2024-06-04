// PlaylistCard.ts
interface PlaylistCardProps {
  name: string;
  description: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ name, description }) => {
  return (
    <>
      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
