import '../css/Card.css'

interface ClipCardProps {
  title: string;
  broadcaster_name: string;
  thumbnail_url: string;
  onClick?: () => void;
}

const ClipCard: React.FC<ClipCardProps> = ({ title, broadcaster_name, thumbnail_url, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img src={thumbnail_url} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{broadcaster_name}</p>
        </div>
      </div>
    </>
  );
};

export default ClipCard;
