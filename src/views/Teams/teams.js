import React from "react";
import { useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddTeam from "components/AddForm/AddTeam";
import Button from "@material-ui/core/Button";
import AddMember from "components/AddForm/AddMember";

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
      <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="sm"
            
                  >
              Create New Team
              </Button><br></br>
             <br></br><AddTeam onAdd={addOrder}></AddTeam>
        <Card>
        
          <CardHeader color="primary">
          <Button variant="contained" color="primary" style={{float: 'right'}}>Add Member</Button>
          
            <h4 className={classes.cardTitleWhite}>Team 1</h4>
            <p className={classes.cardCategoryWhite}>
              Sales
            </p>
            
          </CardHeader>
           <AddMember onAdd={addOrder}></AddMember>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Employee Name", "Post", "Current Task", "Salary"]}
              tableData={[
                ["Arjav Desai", "Sr. Manager", "BMT", "$36,738"],
                ["Rohit Borse", "Jr. Manager", "BMT", "$23,789"],
                ["Jahnavi Desai", "Assistant", "BMT", "$56,142"],
                ["Akshay Kumar", "Worker", "Mining", "$38,735"],
                ["Vijay Maliya", "Peon", "Tea", "$63,542"],
                ["Mukesh Ambani", "Peon", "Coffee", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="primary">
          <Button variant="contained" color="primary" style={{float: 'right'}}>Add Member</Button>
          
            <h4 className={classes.cardTitleWhite}>
              Team 2
            </h4>
            <p className={classes.cardCategoryWhite}>
              Accounts
            </p>
            
          </CardHeader>
         <AddMember onAdd={addOrder}></AddMember>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Employee Name", "Post", "Current Task", "Salary"]}
              tableData={[
                ["Arjav Desai", "Sr. Manager", "BMT", "$36,738"],
                ["Rohit Borse", "Jr. Manager", "BMT", "$23,789"],
                ["Jahnavi Desai", "Assistant", "BMT", "$56,142"],
                ["Akshay Kumar", "Worker", "Mining", "$38,735"],
                ["Vijay Maliya", "Peon", "Tea", "$63,542"],
                ["Mukesh Ambani", "Peon", "Coffee", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
