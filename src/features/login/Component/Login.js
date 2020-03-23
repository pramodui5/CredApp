import React, { Component } from 'react'
import { Grid, TextField, Container, Input } from '@material-ui/core';
import {dataLists} from '../../../data/authData';


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dBData: dataLists,
            isSuccess: false,
            userVal: {},
            isShow: true
        }
    }

    handleSubmit = (event) => {
        const { userVal, dBData } = this.state;

        event.preventDefault();

        const dataValid = dBData.find(({ name, pass }) => name === userVal.name && pass === userVal.password)


        if (dataValid) {
            this.setState({
                isSuccess: true,
                isShow: true
            })
        }
        else {

            this.setState({
                isShow: false
            })
        }
    }
    handleUserId = (event) => {
        this.setState({
            userVal: {
                name: event.target.value,
            }
        })

    }
    handleUserPassword = (event) => {
        this.setState({
            userVal: {
                name: this.state.userVal.name,
                password: event.target.value
            }
        })

    }
    handleLogout = () => {
        this.setState({
            isSuccess: false
        })
    }

    render() {
        const { isSuccess, userVal: { name }, isShow } = this.state;
        return (
            <Grid container justify="center" style={{ backgroundColor: '#cfe8fc', height: '100vh', flexDirection: 'column' }}>
                <h1 direction="row" justify="center" > Credential Application</h1>
                <Container maxWidth="sm" direction="col" justify="center" style={{ backgroundColor: '#f1f1f1', height: '50vh' }}>

                    {!isSuccess ?
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                            <TextField required
                                id="standard-required"
                                label="User ID"
                                onChange={this.handleUserId} />

                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={this.handleUserPassword}
                            />
                            <Input type="submit" variant="contained" color="primary" />
                        </form> : <div>
                            <h2>Welcome {name}</h2>
                            <button onClick={this.handleLogout}>Logout</button>
                        </div>
                    }
                    {isShow ? "" : <h2>Invalid User name or Password</h2>}
                </Container>

            </Grid >
        )
    }
}

export default Login


