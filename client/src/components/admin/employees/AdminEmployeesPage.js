import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import './adminEmployees.css'

import ViewEmployees from './ViewEmployeesTable'
import AddEmployee from './AddEmployeeModal'
import EditEmployee from './EditEmployeeModal'

export function Route(props){
  return(<AppLayout employees/>);
}

export function Layout(props) {

  const classes = useStyles();

  //add employee
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [addNum, setAddNum] = useState(null)

  //edit employee
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [editNum, setEditNum,] = useState(null)

  return( <div id="adminEmployees-page">

    <h1>Employees</h1>

    <MatUI.Container maxWidth="lg" className={classes.container} id="adminEmployees-container">

      <MatUI.Grid container spacing={3}>
      
        <MatUI.Grid item xs={12} md={8} lg={4}>

         

            <AddEmployee open={addEmployeeModalOpen} setOpen={setAddEmployeeModalOpen} setAddNum={setAddNum}/>
            

          </MatUI.Grid>
          
          {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
          <MatUI.Grid item xs={12}>
            <MatUI.Paper className={classes.paper}>   

              <ViewEmployees/>            

            </MatUI.Paper>
          </MatUI.Grid>

        </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>

  </div>)
}