import React from "react";
import { useParams } from "react-router-dom";
import RVACalc from "./calculations/RVACalc";
import GramsCalc from "./calculations/GramsCalc";
import LitersCalc from "./calculations/LitersCalc";

export default function Calculations() {
    const params = useParams();
    const {calc} = params;
    if (calc === 'RVA Endpoint Viscosity') {
        return <RVACalc />
    } else if (calc === 'Grams') {
        return <GramsCalc />
    } else if (calc === 'Liters') {
        return <LitersCalc />
    }
}