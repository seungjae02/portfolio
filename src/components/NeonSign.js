import './NeonSign.css';
import React, { Component } from 'react';

function NeonSign(props) {
    const message = props.children

    return ( <div>
        <h1 className="landingMessage neon h1_neon h1_body">{message}</h1>
    </div>
    );
}

export default NeonSign;
