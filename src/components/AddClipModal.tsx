import React from 'react'

const AddClipModal: React.FC = () => {
  return (
    <div className="modal fade" id="addClipModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">新規クリップ追加</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">クリップURL</span>
              <input type="text" className="form-control" placeholder='https://www.twitch.tv/user_name/clip/xxx-xxx' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
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

export default AddClipModal