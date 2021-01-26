import React,{useRef,useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from  './../../lib/TableIcons'
import {
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  Switch,
  IconButton,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Save from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5),
      padding: theme.spacing(2),
      fontSize: 14,
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

//const tableHead=["ID", "SKU", "Size", "Color", "Price","SKUQty"]
const tableData = [
  {
    image: "https://reqres.in/img/faces/1-image.jpg",
    skunumber: "12345678",
    size: "XL",
    color: "red",
    price: 1000,
    skuqty: 10,
  },
];

function PositioningActionsColumn() {
  const [datarow, setData] = useState(tableData);
  const tableRef = useRef();
  const [editable, setEditable] = useState();
  const handleAddRow = () => {
    tableRef.current.state.showAddRow = true;

    setEditable({
      onRowAdd: newData =>
        new Promise((resolve, reject) => {
          setData([...data, newData]);
          setEditable();
          resolve();
        })
    });
  };
 
  const [columns, setColumns] = useState([
    // {
    //   title: "รูป",
    //   field: "image",
    //   render: (rowData) => (
    //     <img style={{ height: 36, borderRadius: "50%" }} src={rowData.image} />
    //   ),
    // },
    { title: "เลข SKU", field: "skunumber" },
    { title: "ขนาด", field: "size" },
    { title: "สี", field: "color" },
    { title: "ราคา", field: "price", type: "numeric" },
    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
    { title: "จำนวน", field: "skuqty", type: "numeric" },
  ]);

  return (
    <MaterialTable
      tableRef={tableRef}
      icons={tableIcons}
      title=""
      columns={columns}
      data={datarow}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...datarow, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...datarow];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...datarow];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        search:true
      }}
      components={{
        Toolbar: (props) => (
          <div>
          <MTableToolbar
              {...props}
              actions={props.actions.filter(a => a.tooltip !== "Add")}
            />
        
            <Button
              variant="contained"
              className={useStyle().button}
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddRow}
            >
             เพิ่มรายสินค้าย่อย
            </Button>
        
          </div>
         ),
       }}
     />
      
  );
}

export default function VariantProuct() {
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const classes = useStyle();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const getComponent = () => {
    return "";
  };

  return (
    <div className={classes.root}>
      {/* <Typography variant="h6" gutterBottom>
          รายสินค้าย่อย
        </Typography> */}
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
          {/* <Button
        variant="contained"
        className={classes.button}
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        onClick={addItem}
        >เพิ่มรายสินค้าย่อย
        </Button> */}
        </Grid>

        {/* <Grid item xs={12} sm={6}>
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
              <TextField
                id="stockqty"
                name="stockqty"
                label="จำนวน"
                fullWidth
              />
            </Grid> */}

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
      <PositioningActionsColumn />
    </div>
  );
}
