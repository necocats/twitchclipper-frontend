import React from 'react'

const AddPlaylistModal: React.FC = () => {
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
                <input type="text" className="form-control" placeholder='title' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">説明文</span>
                <input type="text" className="form-control" placeholder='description' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlaylistModal