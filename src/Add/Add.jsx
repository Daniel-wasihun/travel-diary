import { Box, Button, FormLabel, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { addPost } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    location: '',
    imageurl: '',
    date: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!inputs.title || !inputs.description || !inputs.location || !inputs.imageurl || !inputs.date) {
      alert('All fields are required!');
      return;
    }
    console.log(inputs)
    addPost(inputs)
    .then(() => setSuccess(true))
    .then(onResRecieved)
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onResRecieved = (data) => {
    navigate("/diaries")
  }
   
  return (   
    <>
      <Box display="flex" flexDirection={'column'} width={'100%'} height={'100%'}>
        <Box display={'flex'} margin="auto" alignItems={'center'} padding={'2'}>
          <Typography fontWeight={'bold'} variant="h4" fontFamily={'cursive'} textAlign="center">
            Add Your Travel Diary
            <TravelExploreIcon sx={{ fontSize: '40px', paddingLeft: 1, color: 'lightcoral' }} />
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box padding={3} display={'flex'} width={'70%'} margin={'auto'} flexDirection={'column'}>
            <FormLabel sx={{ fontFamily: 'Quicksand' }}>Title</FormLabel>
            <TextField value={inputs.title} name="title" onChange={handleChange} variant="standard" margin="normal" />
            <FormLabel sx={{ fontFamily: 'Quicksand' }}>Description</FormLabel>
            <TextField
              value={inputs.description}
              name="description"
              onChange={handleChange}
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={{ fontFamily: 'Quicksand' }}>Image Url</FormLabel>
            <TextField
              value={inputs.imageurl}
              name="imageurl"
              onChange={handleChange}
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={{ fontFamily: 'Quicksand' }}>Location</FormLabel>
            <TextField
              value={inputs.location}
              name="location"
              onChange={handleChange}
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={{ fontFamily: 'Quicksand' }}>Date</FormLabel>
            <TextField
              value={inputs.date}
              name="date"
              type="date"
              onChange={handleChange}
              variant="standard"
              margin="normal"
            />
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '50%', mt: 2, borderRadius: 7 }}
              >
                Post
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        message="Travel diary successfully added!"
      />
    </>
  );
};

export default Add;
