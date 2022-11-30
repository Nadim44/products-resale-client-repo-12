import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteConfirmationModal from './DeleteConfirmationModal';


const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null)


    const closeModal = () => {
        setDeletingUser(null)
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Verify successful')
                    refetch();
                }
            })
    }

    const handleDeleteUser = user => {
        // console.log(user)
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('User deleted successfully')
                }
            })
    }


    return (
        <div>
            <h2 className="text-3xl">All Users: {users.length}</h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6'>
                {
                    users?.map(user =>
                        <div key={user._id} className="card card-compact w-96 bg-base-100 shadow-xl">

                            <div className="card-body">

                                <p>User Name: <span className='text-orange-600 ml-2'>{user.name}</span></p>
                                <p>User Email: <span className='text-orange-600 ml-2'>{user.email}</span></p>
                                <p> {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'>Verify</button>}</p>
                                <p> <label onClick={() => { setDeletingUser(user) }} htmlFor="deleteConfirmation-modal" className="btn btn-sm btn-error">Delete</label></p>

                            </div>
                        </div>
                    )
                }
            </div>

            {
                deletingUser && <DeleteConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name}. It can not be undone.`}
                    successAction={handleDeleteUser}
                    modalData={deletingUser}
                    closeModal={closeModal}
                >

                </DeleteConfirmationModal>
            }
        </div >
    );
};

export default AllUsers;