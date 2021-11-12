import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        const user = { email }
        fetch('https://frozen-coast-33750.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                  alert('addmin added')
                    
                 
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>MAKE ADMIN</h1>
            <form onSubmit={handleSubmit}>
                <TextField  sx={{ width: '75%', m: 1 }}
                 label="Email"
                  type='email'
                   onBlur={handleOnBlur} 
                   variant="standard" />
                   <br />
                <Button type='submit' variant='contained'>Make Admin</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;