import React from 'react';

const DeleteConfirmationModal = ({ title, message, closeModal, successAction, modalData }) => {
    return (
        <div>
            <div>

                <input type="checkbox" id="deleteConfirmation-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="py-4">{message}</p>
                        <div className="modal-action">
                            <label onClick={() => successAction(modalData)} htmlFor="deleteConfirmation-modal" className="btn">Delete</label>
                            <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;