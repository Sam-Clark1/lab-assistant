import React from "react";
import { useParams } from "react-router-dom";
import RVACalc from "./calculations/RVACalc";
import GramsCalc from "./calculations/GramsCalc";
import LitersCalc from "./calculations/LitersCalc";
import EnzymeAmount from "./calculations/EnzymeAmount";
import Dilution from "./calculations/Dilution";

export default function Calculations(props) {
    const {userFavorites, setUserFavorites} = props;
    const params = useParams();
    const {calc} = params;
    if (calc === 'RVA Endpoint Viscosity') {
        return <RVACalc userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
    } else if (calc === 'Grams') {
        return <GramsCalc userFavorites={userFavorites} setUserFavorites={setUserFavorites} />
    } else if (calc === 'Liters') {
        return <LitersCalc userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
    } else if (calc === 'Enzyme Amount') {
        return <EnzymeAmount userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
    } else if (calc === 'Dilution') {
        return <Dilution userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
    }
}