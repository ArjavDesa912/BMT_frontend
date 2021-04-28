import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddInventory from "components/AddForm/AddInventory";
import Button from "@material-ui/core/Button"
import { useState } from 'react'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [Orders, setOrders] = useState([])
  const addOrder =  (order) => {
    

    const id = Math.floor(Math.random() * 10000) + 1
    const newOrder = { id, ...order }
    setOrders([...Orders, newOrder])
    
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Current Inventory</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
          <Button variant="contained" color="primary">Add</Button>
           <AddInventory onAdd={addOrder}></AddInventory>
            <Button variant="contained" color="primary" style={{float: 'right'}}>Remove</Button>
            <Table
              tableHeaderColor="primary"
              tableHead={["Reference", "Destination Location", "Scheduled Date", "Status"]}
              tableData={[
                ["23121", "Niger", "21/02/2021", "Delivered"],
                ["3213", "Curaçao", "21/02/2021", "Delivered"],
                ["32564", "Netherlands", "21/02/2021", "In Transit"],
                ["3455", "Korea, South", "21/02/2021", "In Transit"],
                ["6679", "Malawi", "21/02/2021", "Delivered"],
                ["5436", "Chile", "21/02/2021", "In Transit"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Past Inventory
            </h4>
            <p className={classes.cardCategoryWhite}>
             
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Reference", "Destination Location", "Scheduled Date", "Status"]}
              tableData={[
                ["1323", "Niger", "21/02/2010", "Delivered"],
                ["5414", "Curaçao", "21/02/2010", "Delivered"],
                ["4563", "Netherlands", "21/02/2010", "Delivered"],
                ["5433", "Korea, South", "21/02/2010", "Delivered"],
                ["5312", "Malawi", "21/02/2010", "Delivered"],
                ["5241", "Chile", "21/02/2010", "Returned"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
