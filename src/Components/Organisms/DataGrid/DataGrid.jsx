import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import columns from './Gridcolumns';
import rows from './GridRows';

function DataGridComponent() {
  return (
    <div>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          width="100%"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
              outline: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: 'orange',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#fff',
              borderBottom: '1px solid lightgrey',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: '#fff',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: '#fff',
            },
            '& .MuiCheckbox-root': {
              color: `green !important`,
            },
            button: {
              border: 'none',
              borderRadius: '0',
              backgroundColor: 'transparent',
              width: '20px',
              height: 'fit-content',
              boxShadow: 'none',
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Box>
    </div>
  );
}

export default DataGridComponent;
