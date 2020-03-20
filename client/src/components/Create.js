import React, {useState} from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link, navigate} from '@reach/router';

const Create = () => {
    const [formState, setFormState] = useState({
        petName: '',
        petType: '',
        petDescription:'',
        skill1:'',
        skill2:'',
        skill3:''
    })
    
    const [errors, setErrors] = useState([])

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/pets", formState)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }
        )
    }

    return(
        <div>
            <Link to="/">
               <h5>Back to Home</h5>
            </Link>
            <Jumbotron>
                <h3 style={{marginBottom:'3rem'}}>Know a pet needing a home?</h3>
                <form onSubmit={submitHandler}>
                    
                    {errors.map((err, index) => (
                        <p key={index} style={{color:'red'}}>{err}</p>
                    ))}


                    <p>Name: <input type="text" name="petName" value={formState.petName} onChange={(e) => changeHandler(e)} /></p>
                    <p>Type: <input type="text" name="petType" value={formState.petType} onChange={(e) => changeHandler(e)} /></p>
                    <p>Description: <input type="text" name="petDescription" value={formState.petDescription} onChange={(e) => changeHandler(e)} /></p>
                    <p>Optional:</p>
                    <p>Skill 1: <input type="text" name="skill1" value={formState.skill1} onChange={(e) => changeHandler(e)} /></p>
                    <p>Skill 2: <input type="text" name="skill2" value={formState.skill2} onChange={(e) => changeHandler(e)} /></p>
                    <p>Skill 3: <input type="text" name="skill3" value={formState.skill3} onChange={(e) => changeHandler(e)} /></p>
                    <input type="submit" value="Add Pet" className="btn btn-primary"/>
                </form>
            </Jumbotron>

        </div>
    )
}

export default Create;
