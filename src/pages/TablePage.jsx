import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import data from '../bd.json'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function TablePage(items) {
    const [item, setItem] = useState(data.dataList)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Company Name</TableCell>
                        <TableCell align="right">document Name</TableCell>
                        <TableCell align="right">document Status</TableCell>
                        <TableCell align="right">document Type</TableCell>
                        <TableCell align="right">employee Number</TableCell>
                        <TableCell align="right">employee Signature Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {item?.map((row, id) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{id + 1}</TableCell>
                            <TableCell align="right">{row.companySignatureName}</TableCell>
                            <TableCell align="right">{row.documentName}</TableCell>
                            <TableCell align="right">{row.documentStatus}</TableCell>
                            <TableCell align="right">{row.documentType}</TableCell>
                            <TableCell align="right">{row.employeeNumber}</TableCell>
                            <TableCell align="right">{row.employeeSignatureName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablePage