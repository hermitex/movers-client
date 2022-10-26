import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullName', headerName: 'Full name', width: 130 },
    { field: 'movedFrom', headerName: 'Moved From', width: 130 },
    { field: 'relocatedTo', headerName: 'Relocated to', width: 130 },
    { field: 'totalCost', headerName: 'Total cost', type: 'number', width: 70 },
];

const rows = [
    { id: 1, fullName: 'John Snow', movedFrom: 'Umoja', relocatedTo: 'Juja', totalCost: 3500},
    { id: 2, fullName: 'John Snow', movedFrom: 'Kileleshwa', relocatedTo: 'Roysambu', totalCost: 3500},
    { id: 3, fullName: 'John Snow', movedFrom: 'Lavington', relocatedTo: 'Westlands', totalCost: 3500},
    { id: 4, fullName: 'John Snow', movedFrom: 'Kitusuru', relocatedTo: 'Spring Valley', totalCost: 3500},
    { id: 5, fullName: 'John Snow', movedFrom: 'Donholm', relocatedTo: 'Ruai', totalCost: 3500},
    { id: 6, fullName: 'John Snow', movedFrom: 'Imara Daima', relocatedTo: 'Syokimau', totalCost: 3500},
    { id: 7, fullName: 'John Snow', movedFrom: 'South B', relocatedTo: 'Kitengela', totalCost: 3500},
    { id: 8, fullName: 'John Snow', movedFrom: 'South C', relocatedTo: 'Westlands', totalCost: 3500},
    { id: 9, fullName: 'John Snow', movedFrom: 'Kiambu', relocatedTo: 'Thika', totalCost: 3500},

];

function TableData(){

    return(
        <div style={{ height: 400, width: '90%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    )
}

export default TableData;