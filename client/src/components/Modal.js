import React from "react";

function Modal({ option, closeModal, followDetails }) {
  return (
    <>
      <div className='modal-container d-flex justify-center' id='foll-modal'>
        <div className='modal f-modal'>
          <h1>{option === "followers" ? "Followers" : "Following"}</h1>
          <div className='f-user-container d-flex flex-col'>
            {followDetails.map((user) => {
              return (
                <>
                  <div className='f-user d-flex align-center'>
                    <img src={user.user_img} alt='' />
                    <h1>{user.name}</h1>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>

          <button
            className='modal-close'
            style={{ marginTop: "20px", backgroundColor: "red" }}
            onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
