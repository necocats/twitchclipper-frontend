import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../ts/firebase';

const AddPlaylistModal: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUserId(user.uid);
        console.log(user.uid);
      }
    })
  }, []);

  const handleSubmit = async () => {
    const playlistData = {
      userId,
      playlistName: title,
      description,
    };
    

    try {
      const response = await axios.post('http://localhost:8080/api/playlists', playlistData, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      if (response.status === 201) {
        const data = response.data;
        console.log('correct:', data);
        // フォームフィールドをリセット
        setTitle('');
        setDescription('');
      } else {
        console.error('プレイリストの作成に失敗しました');
      }
    } catch (error) {
      console.error('error:', error);
    }
  };
  return (
    <div className="modal fade" id="addPlaylistModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">新規プレイリスト作成</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">タイトル</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder='title' 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">説明文</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder='description' 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlaylistModal