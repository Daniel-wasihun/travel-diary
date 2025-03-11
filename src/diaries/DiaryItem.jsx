import { Alert, Avatar, Box , Card, CardActions, CardContent, CardHeader , IconButton, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { postDelete } from '../api/api';

const DiaryItem = ({ title, description, user, image, location, date, id }) => {
  const [open, setOpen] = useState(false)
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user._id) {
      return true;
    }
    return false;
  }

  const handleDelete = () => {
    postDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };
// console.log(isLoggedInUser())
console.log(user)
  return (
    <Card sx={{ width: "50%", height:'70vh' , margin:1 , padding:1 , display:'flex' , flexDirection:'column' ,boxShadow : "5px 5px 10px #ccc"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe">
            {user.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <img
        height="194"
        src="/road.jpg"
        alt={title}
      />
      <CardContent>
        <Typography paddingBottom={8} variant="h6 " sx={{ color: 'text.secondary' }}>
          {title} 
        </Typography>
        <hr style={{marginTop:7}} />
        <Box paddingTop={1} display='flex'>
          <Typography width={'auto'} sx={{ mr: 1 }} fontWeight={'bold'} variant='caption' >{ user.name }</Typography>
          <Typography width={'70%'} variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
      <CardActions sx={{ marginLeft: 'auto' }}>
        <IconButton  LinkComponent={Link} to={`/post/${id}`} color='warning' ><EditIcon  /></IconButton>
        <IconButton onClick={handleDelete} color='error'><DeleteForeverIcon /></IconButton>
      </CardActions>)}
      
      <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          // variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Card>
  )
}

export default DiaryItem