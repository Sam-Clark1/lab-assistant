import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import {litersToMilliliters, millilitersToLiters} from '../../utils/liters';
import FavoriteButton from "../FavoriteButton";

export default function LitersCalc(props) {
    const {userFavorites, setUserFavorites} = props;
    const [calcName, setCalcName] = useState('Liters');
    
    const [l1, setL1] = useState('');
    const [ml2, setmL2] = useState('');
    const [litersToMilli, setLitersToMilli] = useState('');
    const [milliToLiters, setMilliToLiters] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = event => {
        if (event.target.name === 'l1') {
            setL1(event.target.value)
        } 
        
        if (event.target.name === 'ml2') {
            setmL2(event.target.value)
        } 
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (l1.length > 0) {
            setLitersToMilli(litersToMilliliters(l1))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    const handleSubmit2 = event => {
        event.preventDefault();
        if (ml2.length > 0) {
            setMilliToLiters(millilitersToLiters(ml2))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    const formArr = [
        {label1:'Liters', label2:'Milliliters', name:'l1', value1:l1, value2:litersToMilli, submit:handleSubmit},
        {label1:'Milliliters', label2:'Liters', name:'ml2', value1:ml2, value2:milliToLiters, submit:handleSubmit2},
    ];

    return(
        <>
        <FavoriteButton calcName={calcName} setCalcName={setCalcName} userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
        <div className="flex justify-center mb-5">
            <h1 className="text-1text text-3xl">
                Liters
            </h1>
        </div>
        <div className="mb-7">
            <p className="text-1text text-sm text-center lg:px-10 md:text-base">
                These calculations allow you to convert liters to milliliters and vice versa. 1 liter is equal to 1000 milliliters. 
            </p>
        </div>
            {formArr.map(e => (
                <div className="bg-card p-4 pb-6 mb-10 shadow-lg shadow-black flex justify-center lg:justify-none rounded" key={e.label1}>
                    <form onSubmit={e.submit}>
                        <div className="grid 2xl:grid-cols-3 2xl:gap-20 grid-cols-1">
                            <div className="my-4 lg:my-0">
                                <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                    {e.label1}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <TextField id="outlined-basic"  variant="outlined" name={e.name} className="bg-1text rounded" defaultValue={e.value1} onBlur={handleChange}/>
                                </div>
                            </div>
                            <div className="my-auto mx-auto">
                                <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                    Submit Input
                                </label>
                                <Button variant="contained" type="submit" 
                                sx={{backgroundColor:'#64dd17', color:'#3D3D3D', ':hover':{backgroundColor:'#3D3D3D', color:'#64dd17',  boxShadow:10}}} 
                                disableRipple>Submit</Button>
                            </div>
                            <div className="my-4 lg:my-0">
                                <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                    {e.label2}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <TextareaAutosize defaultValue={e.value2} minRows={1} maxRows={1} readOnly className="rounded w-full text-center resize-none p-4"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ))}
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
};