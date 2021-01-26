import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { IProduct} from './../types'
import {ImageUpload} from './ImageUpload'
import {
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  Switch,
  Card,
  CardContent,
  CardActions,
  Paper
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SingleProduct from "./subproduct/SingleProduct";
import VariantProduct from "./subproduct/VariantProduct";
import VoucherProuct from "./subproduct/VoucherProuct";
import ReservedProduct from "./subproduct/ReservedProduct"
import {withRouter} from 'next/router'


const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5),
      padding: theme.spacing(2),
      fontSize: 14,
    },
 
  })
);

function getComponent(step:number) {
    switch (step) {
      case 1:
        return <SingleProduct />;
      case 2:
        return <VariantProduct />;
      case 4:
        return <VoucherProuct />
      case 5:
        return <ReservedProduct />
      // case 2:
      //   return 'This is the bit I really care about!';
      default:
        return <div/>;
    }
  }
  interface IProductProps {
    product: IProduct,
    form:any
    //router: RouterProps
  }
  

const ProductForm = ({form:{frmproduct}}) => {
  
  const classes = useStyle();
  const [producttype, setType] = React.useState(0);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  
   

  const selectChange = (event: React.ChangeEvent<{ value: any }>) => {
    setType(event.target.value);
  };
  return (
    
      <div className={classes.root}>
        
        {/* <Typography variant="button" gutterBottom>
          รายละเอียดสินค้า
        </Typography> */}
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="subtitle2" display="block" gutterBottom component={'div'}>
              รูปสินค้า
            </Typography>
            <ImageUpload />
            </Grid>  
            <Grid item xs={12}>
            <Select
              value={producttype}
              onChange={selectChange}
              displayEmpty
              name="product_type"
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              ref={frmproduct}
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="productname"
              name="productname"
              label="ชื่อสินค้า"
              fullWidth
              autoComplete="given-name"
              ref={frmproduct}
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

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="ราคาขาย"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="unitcode"
              name="unitcode"
              label="หน่วยนับ"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
          {state.checkedA == true ? (
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="ค่าขนส่ง"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
          ) : (
            <Grid container xs={6} sm={6} direction="row" spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="unitcode"
                  name="unitcode"
                  label="สินค้าชิ้นแรก"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  id="unitcode"
                  name="unitcode"
                  label="สินค้าชิ้นที่สอง"
                  fullWidth
                />
              </Grid>
            </Grid>
          )}

         
        </Grid>
        <Grid>
         
            <div>{getComponent(producttype)}</div>
           
             
         </Grid>
        
      </div>
    
  );
}

export default ProductForm