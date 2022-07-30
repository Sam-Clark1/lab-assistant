import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from '../SideNav';
import Favorites from "../Favorites";

export default function CalcPage() {


return (
    <>
    <SideNav/>
    <Favorites/>
    <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] lg:mr-[340px] md:mr-[75px] min-h-[84vh]">
        <Outlet />
    </Box>
    </>
   
)

}