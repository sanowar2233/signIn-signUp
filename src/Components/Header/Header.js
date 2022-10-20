import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    return (
        <div>
            <Link className='ms-5' to='/home'>Home</Link>
            <Link className='ms-5' to='/about'>About</Link>
            
            <Link className='ms-5' to='/inventory'>Inventory</Link>

            {
                user?.uid ?
                <button onClick={logOut}>sign Out</button>
                :
                <>
                <Link className='ms-5' to='/registration'>Registration</Link>
            <Link className='ms-5' to='/login'>Login</Link>
                </>
            }

        </div>
    );
};

export default Header;