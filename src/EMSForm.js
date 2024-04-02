import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EMSForm(props) {

    const [form,setform] = React.useState({
        firstName : "",
        lastName : ""
    })

    const handleInput = (e)=>{

        setform({...form,[e.target.name]: e.target.value})

    }
  return (
    <Dialog
    open={props.open}
    onClose={props.handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
       
        event.preventDefault();
        let p = [...props.data];
        p.push(form);
        props.setData(p);
        props.handleClose();
      },
    }}
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="firstName"
        label="firstName"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleInput}
      />

<TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="lastName"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleInput}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Cancel</Button>
      <Button type="submit">Save</Button>
    </DialogActions>
  </Dialog>
  )
}
