import React from "react";
import { useParams } from "react-router-dom";
import RVACalc from "./calculations/RVACalc";

export default function Calculations() {
    const params = useParams();
    const {calc} = params;
    if (calc === 'RVA Endpoint Viscosity') {
        return <RVACalc />
    }
}