/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import './UserList.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 180,
    renderCell: (params) => {
      return (
        <div className="userProfil">
          <img src={params.row.avatar} alt="boy" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 120,
    renderCell: (params) => {
      return (
        <div className="userEdit">
          <button
            type="button"
            style={{
              width: '80%',
              background: 'lightgreen',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '5px',
            }}
          >
            Edit
          </button>
          <DeleteOutline />
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    username: 'Mesmer',
    avatar:
      'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'mesmer@gmail.com',
    status: 'inactive',
  },
  {
    id: 2,
    username: 'Penn',
    avatar:
      'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'pennjr@gmail.com',
    status: 'active',
  },
  {
    id: 3,
    username: 'Godden',
    avatar:
      'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'godden@gmail.com',
    status: 'active',
  },
  {
    id: 4,
    username: 'Charles',
    avatar:
      'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'charles@gmail.com',
    status: 'active',
  },
  {
    id: 5,
    username: 'Arrey',
    avatar:
      'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=600',
    email: 'arrey-etta@gmail.com',
    status: 'active',
  },
];

export default function DataTable() {
  return (
    <Box
      sx={{
        background: '#ccc',
        height: 580,
        width: '100%',
      }}
    >
      <DataGrid
        sx={{
          button: {
            width: '0',
            height: '0',
            position: 'relative',
            left: '30%',
            borderRadius: '50%',
            color: '#224957',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            boxShadow: '0',
            cursor: 'pointer',
            border: 'none',
          },
        }}
        rows={rows}
        columns={columns}
        paginationModel={{ pageSize: 5 }}
        checkboxSelection
      />
    </Box>
  );
}
