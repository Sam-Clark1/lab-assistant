import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from './SideNav';

export default function CalcPage() {


return (
    <>
    <SideNav/>
    <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] md:mr-[100px] min-h-[84vh]">
        <Outlet />
    </Box>
    </>
   
)

}