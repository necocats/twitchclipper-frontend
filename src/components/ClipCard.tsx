import '../css/Card.css';

interface ClipCardProps {
  title: string;
  broadcaster_name: string;
  thumbnail_url: string;
  onClick?: () => void;
  showTrashIcon?: boolean;
  onTrashClick?: () => void;  // クリックの判定用
}

const ClipCard: React.FC<ClipCardProps> = ({
  title,
  broadcaster_name,
  thumbnail_url,
  onClick,
  showTrashIcon,
  onTrashClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={thumbnail_url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{broadcaster_name}</p>
      </div>
      {showTrashIcon && (
        <i
          className="bi bi-trash trash-icon"
          onClick={(e) => {
            e.stopPropagation();  // カードクリックの判定を消す
            if (onTrashClick) onTrashClick();
          }}
        ></i>
      )}
    </div>
  );
};

export default ClipCard;
