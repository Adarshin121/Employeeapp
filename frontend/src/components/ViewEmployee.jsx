import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewEmployee = () => {
var[data,setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8080/view")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })
  .catch((err)=>console.log(err))
},[])
const deleteValue = (id)=>{
  console.log(id)
  axios.delete("http://localhost:8080/remove/"+id).
  then((response)=>{
    alert(response.data)
    window.location.reload(false)
  }).catch((err)=>console.log(err))

}
  return (
    <div>
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Position</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                {data.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.ename}</TableCell>
                                <TableCell key={i}>{val.esalary}</TableCell>
                                <TableCell key={i}>{val.eage}</TableCell>
                                <TableCell key={i}>{val.eposition}</TableCell>
                                <TableCell>
                                <Button onClick={()=>deleteValue(val._id)}size="small" variant='contained' color='secondary'>
                                Delete
                                </Button>
                                </TableCell>


                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewEmployee