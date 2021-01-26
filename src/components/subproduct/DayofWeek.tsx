import React, { Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconContentAdd from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import {InputBox} from  "./customt";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    textf:{
        width:100,
        height:20
    },
    label: {
        width:100
    },
    delete:{

        background:"red",
        color: "white",
        '&:hover': {
          backgroundColor: "white",
          color: 'red',
      },
      '&:disabled': {
          backgroundColor: "#A7A9AC",
      },
      },
    plus:{
        background:"green",
        color: "white",
        '&:hover': {
          backgroundColor: "white",
          color: 'green',
      },
      '&:disabled': {
          backgroundColor: "#A7A9AC",
      },
    } 
  }),
);

export default function TextFieldSizes({rowdata}) {
  const classes = useStyles();
  const handleClick = () => {
    // this.setState({ showDialog: true });
    console.log('')
  };

  return (
    <div>
     <Grid  spacing={1}
     container
     direction="row"
     justify="center"
     alignItems="flex-end"
     >
     <Grid item xs>         
     <InputLabel shrink htmlFor="outlined-adornment-amount" className={classes.label}>เวลา:</InputLabel>
     <InputBox></InputBox>
     </Grid>
     <Grid item xs>
     <InputLabel shrink htmlFor="outlined-adornment-amount" className={classes.label}>จำกัดจำนวน:</InputLabel>
        <InputBox></InputBox>
        </Grid>
        <Grid item xs>
    <ButtonGroup orientation="horizontal"
    color="primary"
    aria-label="horizonal outlined primary button group"
    >
       
    <Button onClick={handleClick}>
      <IconContentAdd />
    </Button>
    <Button onClick={handleClick}>
      <DeleteIcon />
    </Button>
    </ButtonGroup>
    </Grid>
    </Grid>
    </div>
    //   <div>
    
      
    //       {rowdata.map(data=>(
    //         <div key={data}>
    //     <TextField
    //       label="เวลา"
    //       id="outlined-size-small"
    //       defaultValue="00:00"
    //       variant="outlined"
    //       size="small"
    //     />
    //     <TextField
    //       label="จำกัดจำนวน"
    //       id="outlined-size-small"
    //       defaultValue=""
    //       variant="outlined"
    //       size="small"
    //     />
    //       <label htmlFor="icon-button-file">
    //     <IconButton aria-label="Add" component="span" className={classes.plus} onClick={()=>{console.log(rowdata)}}>
    //       <AddIcon />
    //     </IconButton>
    //   </label>
    //   <label htmlFor="icon-button-file">
    //     <IconButton  aria-label="Delete" component="span" className={classes.delete}>
    //       <DeleteIcon />
    //     </IconButton>
    //   </label>
    //   </div>
    //  ))}
    
    //</div>
  )
}