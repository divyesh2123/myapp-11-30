import React, { useState } from 'react'
import EMSForm from './EMSForm'
import EMSDisplay from './EMSDisplay'
import { Button } from '@mui/material';

export default function ParentEMS() {

    const [open, setOpen] = React.useState(false);

    const [index,setIndex]= React.useState(-1);

    const [data,setData]= useState([]);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const deleteRemove = (index)=>{

      let p1 = [...data];

      p1.splice(index-1,1);

      setData(p1);

    }

    const editRecord = (index)=>{

      setIndex(index-1);
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

        <EMSForm open={open} handleClose={handleClose}
        
        data={data}
        setData={setData}
        index={index}
        setIndex={setIndex}
        />
        <EMSDisplay data={data} d={deleteRemove}
        
        editRecord={editRecord}
        />

    </div>
  )
}
