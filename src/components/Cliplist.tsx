import '../css/Cliplist.css'
import addClipImage from '../image/add_clip.png';
import ClipCard from "./ClipCard";

interface clip {
  id: string
  title: string,
  broadcaster_name: string,
  thumbnail_url: string,
}

interface CliplistProps {
  clips: clip[];
  onClick?: () => void;
}

const Cliplist: React.FC<CliplistProps> = ({ clips, onClick }) => {
  return (
    <>
      <div className='content flex-grow-1'>
        <div className="d-flex flex-row flex-wrap clip-list">
          {clips.map((clip) => (
            <ClipCard  
              key={clip.id}
              title={clip.title} 
              broadcaster_name={clip.broadcaster_name}
              thumbnail_url={clip.thumbnail_url} 
              onClick={onClick}
            />
          ))}
          <div className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#addClipModal">
            <ClipCard title={"新規クリップ追加"} broadcaster_name={"tes"} thumbnail_url={addClipImage} onClick={onClick}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cliplist;
