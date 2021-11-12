import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Myorder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://frozen-coast-33750.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    const handleDelete = (e, id) => {
        if (window.confirm("Are you sure! Do you want to delete this order?")) {
            const url = `https://frozen-coast-33750.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    alert('Order has been deleted successfully!');
                    e.target.parentNode.parentNode.style.display = 'none';
                })
        }

    }
    return (
        <div>
            <h1>My Order</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address)</TableCell>
                            <TableCell align="right">Car Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.clientName}
                                </TableCell>
                                <TableCell align="right">{order.email}</TableCell>
                                <TableCell align="right">{order.address}</TableCell>
                                <TableCell align="right">{order.carName}</TableCell>
                                <TableCell align="right">{order.number}</TableCell>
                                <TableCell align="right">  <Button style={{background:'red',color:'white',margin:'8px'}} onClick={(e) => handleDelete(e, order._id)} variant="contained" color="inherit">Delete</Button></TableCell>
                              
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Myorder;