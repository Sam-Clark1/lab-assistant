import React from "react";
import { Box } from "@mui/material";
import Calculations from "./Calculation";
import { Outlet } from "react-router-dom";

export default function MainPage() {
return (
    <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] md:mr-[100px] min-h-[88vh]">
        <Calculations></Calculations>
        <Outlet/>
    </Box>
   
)

}