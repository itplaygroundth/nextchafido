
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

export default function SingleProuct() {
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
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="productname"
            name="productname"
            label="ชื่อสินค้า"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tagname"
            name="tagname"
            label="TAG สินค้า"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
        
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          fullWidth
        >
          <MenuItem value="" disabled>
            ประเภทสินค้า
          </MenuItem>
          <MenuItem value={1}>สินค้าชิ้นเดียว</MenuItem>
          <MenuItem value={2}>สินค้าคละแบบ</MenuItem>
          <MenuItem value={3}>E-BOOK</MenuItem>
          <MenuItem value={4}>บัตรกำนัล</MenuItem>
          <MenuItem value={5}>จองล่วงหน้า</MenuItem>
        </Select>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sku"
            name="sku"
            label="SKU"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="stockqty" name="stockqty" label="จำนวน" fullWidth />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="ส่งสินค้าอัตโนมัต"
      />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        <Grid item xs={12}>
            {getComponent}
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
}