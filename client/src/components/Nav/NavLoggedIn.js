import React from 'react';

export const NavLoggedIn = (props) => {

    return (
        <React.Fragment>
            <div onClick={(event) => props.logOutHandler(event)} data-toggle="collapse" data-target="#navbar-collapse.in">Sign Out<span className="sr-only">Sign Out</span></div>
        </React.Fragment>
    );
};