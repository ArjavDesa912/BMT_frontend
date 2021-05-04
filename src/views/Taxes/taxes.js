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
import AddTax from "components/AddForm/AddTax";
import Button from "@material-ui/core/Button";
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
            <h4 className={classes.cardTitleWhite}>Tax Management</h4>
            <p className={classes.cardCategoryWhite}>
              GST(18%)
            </p>
          </CardHeader>
          <CardBody>
          <Button variant="contained" color="primary">Add Entry</Button>
          <AddTax onAdd={addOrder}></AddTax>
          
            <Table
                 tableHeaderColor="primary"
              tableHead={["Order Id","Company Name", "Product Name", "Price", "Price(Incl. Tax(18%))"]}
              tableData={[
                ["1","Dakota Rice", "Watch", "$368","$434.24"],
                ["2","Minerva Hooper", "Mobile", "$2389","$2819.02"],
                ["3","Sage Rodriguez", "Laptop", "$5612","$6622.16"],
                ["4","Philip Chaney", "Computer, South", "$387","$456.66"],
                ["5","Doris Greene", "TV", "$63","$74.34"],
                ["6","Mason Porter", "Fan", "$78","$92.04"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
