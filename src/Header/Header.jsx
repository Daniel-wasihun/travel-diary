import React , {useState} from 'react'
import {AppBar,Tabs ,Tab, Toolbar} from "@mui/material"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const link = ["home" ,"diaries" , "auth"];
  const loggedInLink = ["home" ,"diaries" , "add" ,"profile" ];
  const [tab, setTab] = useState(0);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const links = isLoggedIn ? loggedInLink : link;
  return (
    <AppBar sx={{bgcolor:'transparent' , position:'sticky'}}>
      <Toolbar>
        <TravelExploreIcon  sx={{color:"black" , textDecoration:"none"}}/>
        <Tabs value={tab} onChange={(e, tab)=> setTab(tab)} sx={{ml:"auto"}}>
          { links.map((link) =>
          (<Tab
            LinkComponent={Link}
            to={`/${link === "home"? "": link }`}
            sx={{
              textDecoration: "none", ":hover": {
                textDecoration:"underline",
                textUnderlineOffset:'18px'
             }}} key={link} label={link}/>))}
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header