import './NeonSign.css';
import React, { Component } from 'react';

function NeonSign({message}) {
    return ( 
        <div>
            <h1 className="neon-message neon h1_neon h1_body">{message}</h1>
        </div>
    );
}

export default NeonSign;
