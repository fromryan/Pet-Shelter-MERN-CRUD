import React from 'react';
import {Link} from '@reach/router';
import List from './List'

const Dash = () => {
    return(
        <div>
            <Link to="/pets/new">
                <h5>Adopt a pet to the shelter</h5>
            </Link>
            <h3>These pets are looking for a good home.</h3>
            <List/>
        </div>
    )
}

export default Dash;