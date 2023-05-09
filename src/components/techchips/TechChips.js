import React from 'react';
import {Stack, Chip} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./TechChips.css"
import { purple, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      info: {
        main: '#e3f2fd',
        contrastText: '#000',
      },
    },
  });
  

function TechChips({techs}) {
    return (
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mt: 2, mb: 2 }}>
            {techs.map(tech => {return (
                <ThemeProvider theme={theme}>
                    <Chip label={tech} variant="filled" color="info" />
                </ThemeProvider>);})}
        </Stack>
    );
}

export default TechChips;