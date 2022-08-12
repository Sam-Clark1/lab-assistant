import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from '../SideNav';
import Favorites from "../Favorites";
import AuthService from '../../api/auth.service';

export default function CalcPage(props) {
    const {userFavorites, setUserFavorites} = props;
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
      const user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
      }
    }, []);

return (
    <>
    <SideNav/>
    <Favorites userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
    {currentUser ?
    <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] lg:mr-[340px] md:mr-[75px] min-h-[84vh]">
        <Outlet/>
    </Box>
    :
    <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] lg:mr-[100px] md:mr-[75px] min-h-[84vh]">
        <Outlet/>
    </Box>
    }
    </>
  );
};