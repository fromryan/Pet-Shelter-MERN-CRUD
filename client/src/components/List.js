import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Detail from './Detail';

const List = () => {

    const [listState, setListState] = useState([])
 
    useEffect( () => {
        Axios.get("http://localhost:8000/pets")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    })

  
    return(
        <div>
           <Table striped bordered hover responsive>
               <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
               </thead>
               <tbody>
                    {listState.map((pet, i) => (
                            <tr key={i}>
                                <td>
                                    {pet.petName}
                                </td>
                                <td>
                                    {pet.petType}
                                </td>
                                <td>
                                    <Link to={"/pets/" + pet._id}>
                                        Details
                                    </Link>
                                    <span> | </span>

                                    <Link to={"/pets/" + pet._id + "/edit"}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                    ))}
               </tbody>
            </Table>
        </div>
    )
}

export default List;