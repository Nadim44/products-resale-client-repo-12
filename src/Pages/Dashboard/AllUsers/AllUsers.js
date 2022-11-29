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
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
                                {/* <td><button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Verify</button></td> */}
                                <td>
                                    <label onClick={() => { setDeletingUser(user) }} htmlFor="deleteConfirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
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
        </div>
    );
};

export default AllUsers;