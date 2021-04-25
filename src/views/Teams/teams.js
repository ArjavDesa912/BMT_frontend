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
  return (
    <GridContainer>
      <button className="btn">Create New Team</button>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
        
          <CardHeader color="primary">
          <button className="btn" style={{float: 'right'}}>Add Member</button>
            <h4 className={classes.cardTitleWhite}>Team 1</h4>
            <p className={classes.cardCategoryWhite}>
              Sales
            </p>
          </CardHeader>
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
          <button className="btn" style={{float: 'right'}}>Add Member</button>
            <h4 className={classes.cardTitleWhite}>
              Team 2
            </h4>
            <p className={classes.cardCategoryWhite}>
              Accounts
            </p>
          </CardHeader>
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
