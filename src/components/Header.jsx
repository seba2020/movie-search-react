import React from 'react';

const Header = props => {

    return (
        <header className="App-header">
            <h2>{props.text}</h2>
            <span className="material-icons">live_tv</span>
        </header>
    )
}

export default Header;