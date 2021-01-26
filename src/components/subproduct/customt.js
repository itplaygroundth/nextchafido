//import styled from "styled-components";
//import theme from "./../../theme";
import { styled,fade } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/Input';
import Box from '@material-ui/core/Box'
import React from 'react';
import { withTheme } from '@material-ui/core/styles';
 
export const InputBox = styled(withTheme(OutlinedInput))(props=>({
  borderRadius: 4,
  position: 'relative',
  backgroundColor: props.theme.palette.common.white,
  border: '1px solid #ced4da',
  fontSize: 16,
  width: '100px',
  padding: '10px 12px 0 10px',
  height: '40px',
  transition: props.theme.transitions.create(['border-color', 'box-shadow']),
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:focus': {
    boxShadow: `${fade(props.theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: props.theme.palette.primary.main,
  },
}));
export const AppBox = styled(withTheme(Box))(props=>({
  fontFamily: "sans-serif",
  background: props.theme.palette.background.default,
  color: props.theme.palette.text.main,
  paddingTop:"10px",
  height: "40vh",
  boxSizing: "border-box"
}));



// const RootComponent = (props) => {
//   return <div>{props}</div>
// }

 