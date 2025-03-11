import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Diaries from "./diaries/Diaries";
import Auth from "./auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import Add from "./Add/Add";
import Profile from "./Profile/Profile";
import DiaryUpdate from "./diaries/DiaryUpdate";
import { useEffect } from "react";
import { authActions } from "./store/store";
// import Add from "./Add/add";

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(authActions.login())
    }
  } ,[dispatch])
  console.log(isLoggedIn)
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/diaries" element={ <Diaries />} />
          <Route path="/auth" element={ <Auth />} />
          {isLoggedIn && <>
          <Route path="/add" element={ <Add />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/post/:id" element={<DiaryUpdate />} />
          </> 
          }
        </Routes>
      </section>
    </>
  );
}

export default App;
