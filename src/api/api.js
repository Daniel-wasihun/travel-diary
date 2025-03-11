import axios from 'axios'

export const getAllPosts = async () => {
  const res = await axios.get('http://localhost:8000/posts');
  if (res.status !== 200) {
    return console.log("some error ...")
  }
  const data = res.data;
  return data;
};


export const sendAuthRequest = async (signup, data) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}/`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  // if (res.status !== 200 && res.status !== 201) {
  //   return console.log("Unable to Authenticate");
  // }
  const resData = await res.data;
  return resData;
};

export const addPost = async (data) => {
  const { title, description, location, imageurl, date } = data; // Destructure inputs


  console.log("Data being sent:", {
    title,
    description,
    location,
    image: imageurl,
    date,
    user: localStorage.getItem("userId"),
  });

  try {
    const res = await axios.post("/posts", {
      title,
      description,
      location,
      image: imageurl, // Match backend's expected field name
      date,
      user: localStorage.getItem("userId"), // User ID from local storage
    });

    // Check for a successful response
    if (res.status !== 201) {
      throw new Error("Failed to create a post. Please try again.");
    }

    // Return the response data
    return res.data;
  } catch (err) {
    console.error("Error while creating post:", err.message);
    throw err; // Re-throw error for the caller to handle
  }
};



export const getPostDetails = async (id) => {
  const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unable to fetch diary");
  }

  const resData = await res.data;
  return resData;
};

export const postUpdate = async (data, id) => {
  const res = await axios
    .put(`/posts/${id}`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to udpate");
  }

  const resData = await res.data;
  return resData;
};

export const postDelete = async (id) => {
  const res = await axios
    .delete(`/posts/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to delete");
  }

  const resData = await res.data;
  return resData;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No user found");
  }

  const resData = await res.data;
  return resData;
};
