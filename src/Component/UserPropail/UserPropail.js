import React, { useContext } from 'react';
import { UserContext } from '../../App';

const UserPropail = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="d-flex justify-content-center text-center">
            <div class="card" style={{ width: "30rem" }}>

                <img src={loggedInUser.img} class="card-img-top" alt="YourPhoto..." 
                    style={{ borderRadius: "50%", width: "30%", margin:"0 auto" }}
                />
                
                <div class="card-body">
                    <h5 class="card-title">Hello {loggedInUser.name}</h5>
                    <p class="card-text">Have a nice trip.</p>
                </div>
                
            </div>
        </div>
    );
};

export default UserPropail;