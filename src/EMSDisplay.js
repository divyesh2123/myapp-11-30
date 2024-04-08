import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


const EMSDisplay = (props) => {


  const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 110,
      editable: true,
    },

    {
      field: 'id',
      headerName: '',
      width:400,
      renderCell: (params) =>{
        
        console.log(params);
        return (
        <>
        
          <Button
            variant="contained"
            size="small"
            onClick={()=>{
              props.editRecord(params.id)
            }}
           
          >
            Edit
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={()=>{
              props.d(params.id)
            }}
           color='primary'
          >
            Delete
          </Button>
        </>
      )},
    
    }
  
  
  
  
  ]


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default EMSDisplay
