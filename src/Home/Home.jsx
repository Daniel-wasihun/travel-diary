import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box position={"relative"} width={'100%'} height={'90vh'} >
      <img src='/road.jpg' alt='Round' width={"100%"} height={"70%"} />
      <Typography fontFamily={"cursive"} variant='h3' textAlign={'center'}   width={"100%"} sx={{ position: 'absolute', top: "0px" , color:'#111115de'  ,background:"#B2C8DF"}}>
        Dare to live the life you've always wanted
      </Typography>
      <Box width={'100%'} height={'305'} display={'flex'} flexDirection={'column'}>
        <Typography fontFamily={'monospace'} textAlign={'center'} variant='h4' padding={4}>
          Share Your Travel Diaries With Us
        </Typography>
        <Box margin={'auto'}>
          <Button  variant='outlined' sx={{mr:2}}>Share Your Story</Button>
          <Button LinkComponent={Link} to={'/diaries'} variant='contained' sx={{ml:2}}>View Diaries</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home