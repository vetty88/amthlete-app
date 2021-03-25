import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
import API from "../../utils/API";

const useStyles = makeStyles(styles);

export default function CustomTable() {
  const classes = useStyles();

  const [competitions, setCompetitions] = useState([])

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
  }, [])

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
      {competitions.length ? (
        <TableHead>
          <h1>CUSTOM TABLE</h1>
          {competitions.map((competition, key) => {
          <TableRow key={competition._id}>
              <TableCell
              className={classes.tableCell + " " + classes.tableHeadCell}
              key={key} >
              {competition}
              </TableCell>
                </TableRow>
          })}
        </TableHead> 
      ) : null}

        <TableBody>
        {competitions.length ? (
          <TableHead>
            {competitions.map((competition, key) => {
            <TableRow key={competition._id}>         
                <TableCell className={classes.tableCell} key={key}>
                {competition}
                </TableCell>
            </TableRow>
          })}
          </TableHead>  
        ) : null}
        </TableBody>
      </Table>
    </div>
    );
    }



CustomTable.competitionTypes = {
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
