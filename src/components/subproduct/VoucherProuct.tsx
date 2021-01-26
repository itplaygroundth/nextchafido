
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox,Select,InputLabel,MenuItem,Switch} from '@material-ui/core';
import {makeStyles,Theme,createStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme:Theme)=> createStyles({
    root:{
        margin:theme.spacing(5),
        padding:theme.spacing(2),
        fontSize:14
        
    }
}))

export default function VoucherProuct() {
    const classes = useStyle()
    const [age, setAge] = React.useState('');
    const [state, setState] = React.useState({
        checkedA: true,
        
      });
  
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      const getComponent = () =>{
          return ''
      }
  return (
    <React.Fragment>
        <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sku"
            name="sku"
            label="มูลค่าต่อใบ"
            fullWidth
            autoComplete="shipping address-level2"
          />บาท
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="stockqty" name="stockqty" label="จำนวน" fullWidth />ใบ
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="stockqty" name="stockqty" label="มูลค่าใช้งานจริง" fullWidth />บาท
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="stockqty" name="stockqty" label="หมดอายุภายใน" fullWidth />วัน
        </Grid>
        <Grid item xs={12}>
            {getComponent}
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
}