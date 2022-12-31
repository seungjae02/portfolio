import React from 'react';
import {Stack, Chip} from '@mui/material';
import "./TechChips.css"

function TechChips({techs}) {
    return (
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mt: 2, mb: 2 }}>
            {techs.map(tech => {return (<Chip label={tech} variant="filled" color="info" />);})}
        </Stack>
    );
}

export default TechChips;