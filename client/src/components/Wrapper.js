import React from 'react';
import {Link,Router} from '@reach/router';
import Dash from './Dash';
import Create from './Create';
import Detail from './Detail';
import Edit from './Edit';

const Wrapper = () => {
    return(
        <div>   
            <Router>
                <Dash path='/'/>
                <Create path='pets/new'/>
                <Detail path='pets/:id'/>
                <Edit path="pets/:id/edit"/>

            </Router>
            
        </div>
    )
}

export default Wrapper;


