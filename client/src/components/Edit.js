import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron';





const Edit = ({id}) => {
    const [updateState, setUpdateState] = useState({
        petName: '',
        petType: '',
        petDescription:'',
        skill1:'',
        skill2:'',
        skill3:''     
    })
    
    useEffect(() => {
        axios.get('http://localhost:8000/pets/'+id)
            .then(res => setUpdateState(res.data))
            .catch(err => console.log(err))
    },[])

    const changeHandler = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setUpdateState({
            ...updateState,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/pets/" + id, updateState)
            .then (res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/">
               <h5>Back to Home</h5>
            </Link>
            <Jumbotron>
                <h3 style={{marginBottom:'3rem'}}>Edit your pet:</h3>
                <form onSubmit={submitHandler}>
                    <p>Name: <input type="text" name="petName" value={updateState.petName} onChange={(e) => changeHandler(e)} /></p>
                    <p>Type: <input type="text" name="petType" value={updateState.petType} onChange={(e) => changeHandler(e)} /></p>
                    <p>Description: <input type="text" name="petDescription" value={updateState.petDescription} onChange={(e) => changeHandler(e)} /></p>
                    <p>Optional:</p>
                    <p>Skill 1: <input type="text" name="skill1" value={updateState.skill1} onChange={(e) => changeHandler(e)} /></p>
                    <p>Skill 2: <input type="text" name="skill2" value={updateState.skill2} onChange={(e) => changeHandler(e)} /></p>
                    <p>Skill 3: <input type="text" name="skill3" value={updateState.skill3} onChange={(e) => changeHandler(e)} /></p>
                    <input type="submit" value="Edit Pet" className="btn btn-primary"/>
                </form>
            </Jumbotron>
           



        </div>
    )
}

export default Edit;