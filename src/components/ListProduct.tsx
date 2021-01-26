import React, { Fragment, PureComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {IProduct} from './../types'

const useStyles = makeStyles((theme) => ({}));

interface IProductListProps {
  products: IProduct[]
}
const ListProduct = (props:IProductListProps) => {
  const classes = useStyles();
  const tableHead=["ID", "ProductName", "Price", "UnitCode", "Active","Action"]
  const tableData=[
    ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
    ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
    ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
    [
      "4",
      "Philip Chaney",
      "$38,735",
      "Korea, South",
      "Overland Park",
    ],
    [
      "5",
      "Doris Greene",
      "$63,542",
      "Malawi",
      "Feldkirchen in Kärnten",
    ],
    ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
  ]
  return (
    <div>
      <Table>
          <TableHead>
            <TableRow>
                {tableHead.map((prop,key)=>{
                    return (
                        <TableCell
                            key={key}>
                                {prop}
                        </TableCell>
                    );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
              {props.products.map((prop,key)=>{
                  return (
                      <TableRow key={key}>
                        <TableCell>
                        {prop.product_id}
                        </TableCell>
                        <TableCell>
                        {prop.product_name}
                        </TableCell>
                        <TableCell>
                        {prop.product_price}
                        </TableCell>
                        <TableCell>
                        {prop.product_unitcode}
                        </TableCell>
                      </TableRow>
                      
                      // <TableRow key={key}>
                      //     {prop.map((prop,key)=>{
                      //         return (
                      //           <TableCell key={key}>
                      //           {prop}
                      //       </TableCell>
                      //         )
                      //     })}
                     
                      // </TableRow>
                  )
              })}
          </TableBody>
      </Table>
    </div>
    //     <Table
    //     tableHeaderColor="primary"
    //     tableHead={["Name", "Country", "City", "Salary"]}
    //     tableData={[
    //       ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
    //       ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
    //       ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
    //       ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
    //       ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
    //       ["Mason Porter", "Chile", "Gloucester", "$78,615"],
    //     ]}
    //   />
  );
}

export default ListProduct