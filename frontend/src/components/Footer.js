import { Container, Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container>
        <Grid justifyContent="center" direction='row' container alignItems='center'>
            <span className="text-center py-3">
                Copyright &copy; {new Date().getFullYear()}
            </span>
        </Grid>
    </Container>
  )
}

export default Footer