// PlaylistCard.ts
interface PlaylistCardProps {
  name: string;
  description: string;
  onClick?: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ name, description, onClick }) => {
  return (
    <>
      <div className="card m-2" onClick={onClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
