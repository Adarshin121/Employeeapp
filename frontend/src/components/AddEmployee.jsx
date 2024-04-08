import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'

const AddEmployee = () => {
    var[inputs,setInputs] = useState({
        ename:"",
        eage:"",
        eposition:"",
        esalary:""
    })
     const inputHandler = (e)=>{
        const {name,value}=e.target
        setInputs((prevData)=>({...prevData,[name]:value}))
        console.log(inputs)
     }
     const addHandler = ()=>{
      console.log("button clicked");
      axios.post("http://localhost:8080/add",inputs)
      .then((response)=>{
        console.log(response.data)
        alert(response.data)
      })
      .catch((err)=>console.log(err))
     }
  return (
    <div style={{margin:'6%'}} className='App' >
    <Typography variant='h4' style={{color:'purple'}}>
      Add Employee Form
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField 
          label='Employee Name' 
          variant='outlined' 
          fullWidth
          name='ename'
          value={inputs.ename}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField label='Employee Age' 
          variant='outlined' 
          fullWidth
          name='eage'
          value={inputs.eage}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField 
          label='Employee Position'
           variant='outlined' 
           fullWidth
           name='eposition'
          value={inputs.eposition}
          onChange={inputHandler}
           />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField 
          label='Employee Salary' 
          variant='outlined' 
          fullWidth
          name='esalary'
          value={inputs.esalary}
          onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}> 
        <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default AddEmployee