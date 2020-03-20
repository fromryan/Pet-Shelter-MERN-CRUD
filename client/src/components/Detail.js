import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const petinfo_style = {
    textAlign:'left',
    margin: '2rem 3rem 3rem 3rem',
    padding: '2rem',
    width: '40rem',
    height: 'auto',
    border: 'solid 1px black'
}

const petinfo_header_style = {
    textAlign:'left',
    margin: '4rem 0rem 0rem 4rem',
}

const Detail = ({id}) => {
    const [petState, setPetState] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/pets/'+ id)
            .then(res => {
                setPetState(res.data)
            })
            .catch(err => console.log(err))
    })

    const deleteHandler = (petId) => {
        axios.delete("http://localhost:8000/pets/" + petId)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/">
               <h5>Back to Home</h5>
            </Link>
            <h2 style={petinfo_header_style}>detail about: {petState.petName}</h2>
            <div style={petinfo_style}> 
                <Table>
                   <tbody>
                       <tr>
                           <td><b>Name: </b></td>
                           <td>{petState.petName}</td>
                       </tr>
                       <tr>
                           <td><b>Type: </b></td>
                           <td>{petState.petType}</td>
                       </tr>
                       <tr>
                           <td><b>Skills: </b></td>
                           <td><p>{petState.skill1}</p><p>{petState.skill2}</p><p>{petState.skill3}</p></td>
                       </tr>
                   </tbody>
                </Table>
            </div>
            <Button variant="primary" onClick={(e)=>{deleteHandler(petState._id)}}>Adopt</Button>
        </div>
    )
}

export default Detail;