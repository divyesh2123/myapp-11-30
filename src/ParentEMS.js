import React from 'react'
import EMSForm from './EMSForm'
import EMSDisplay from './EMSDisplay'
import { Button } from '@mui/material';

export default function ParentEMS() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

        <EMSForm open={open} handleClose={handleClose}/>
        <EMSDisplay/>

    </div>
  )
}