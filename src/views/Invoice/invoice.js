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
import Checkbox from "@material-ui/core/Checkbox";
import AddInvoice from "components/AddForm/AddInvoice";
import{ useState} from 'react'


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
            <h4 className={classes.cardTitleWhite}>Recent Invoices</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
          <button className="btn">New Invoices</button>
          <AddInvoice onAdd={addOrder}></AddInvoice>
          <button className="btn" style={{float: 'right'}}>Download Invoice</button>
          
         
            <Table
              tableHeaderColor="primary"
              tableHead={["Select","Order Id","Company Name", "Product Name", "City", "Price"]}
             
              tableData={[
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"1","Dakota Rice", "Watch", "Oud-Turnhout", "$368"],
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"2","Minerva Hooper", "Mobile", "Sinaai-Waas", "$2389"],
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"3","Sage Rodriguez", "Laptop", "Baileux", "$5612"],
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"4","Philip Chaney", "Computer, South", "Overland Park", "$387"],
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"5","Doris Greene", "TV", "Feldkirchen in Kärnten", "$63"],
                [<Checkbox
                  
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />,"6","Mason Porter", "Fan", "Gloucester", "$78"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Pending Invoices
            </h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order Id","Company Name", "Product Name", "City", "Price"]}
              tableData={[
                ["10","Mini", "Watch", "Oud-Turnhout", "$368"],
                ["20","Lenovo", "Mobile", "Sinaai-Waas", "$2389"],
                ["30","Razer", "Laptop", "Baileux", "$5612"],
                ["40","AIO", "Computer, South", "Overland Park", "$387"],
                ["50","Oneplus", "TV", "Feldkirchen in Kärnten", "$63"],
                ["60","Crompton", "Fan", "Gloucester", "$78"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
