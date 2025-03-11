import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DiaryItem from './DiaryItem';
import { getAllPosts } from '../api/api';

const Diaries = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts) )
    // {
    //     if (Array.isArray(data?.posts)) {
    //       console.log(data.posts);
    //     } else {
    //       throw new Error('Invalid data format');
    //     }}
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // const { description, id, title, image, date, location } = posts;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      padding={3}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <DiaryItem key={index} 
            date={new Date(`${post.date}`).toLocaleDateString()}
            description={post.description}
            id={post._id}
            location={post.location}
            title={post.title}
            image={post.image}
            user={post.user}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </Box>
  );
};

export default Diaries;
