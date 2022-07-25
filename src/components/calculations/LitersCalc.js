import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import {litersToMilliliters, millilitersToLiters} from '../../utils/liters';

export default function LitersCalc() {
    const [liters1, setLiters1] = useState('');
    const [ml2, setmL2] = useState('');
    const [gramsToMilli, setGramsToMilli] = useState('');
    const [milliToGrams, setMilliToGrams] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = event => {
        if (event.target.name === 'l1') {
            setLiters1(event.target.value)
        } 
        
        if (event.target.name === 'ml2') {
            setmL2(event.target.value)
        } 
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (liters1.length > 0) {
            setGramsToMilli(litersToMilliliters(liters1))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    const handleSubmit2 = event => {
        event.preventDefault();
        if (ml2.length > 0) {
            setMilliToGrams(millilitersToLiters(ml2))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    return(
        <>
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
            <div className="bg-card p-4 pb-6 shadow-lg shadow-black flex justify-center lg:justify-none rounded">
                <form onSubmit={handleSubmit}>
                    <div className="grid 2xl:grid-cols-3 2xl:gap-20 grid-cols-1">
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Liters
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="l1" className="bg-1text rounded" defaultValue={liters1} onBlur={handleChange}/>
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
                                Milliliters
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize defaultValue={gramsToMilli} minRows={2} maxRows={2} readOnly className="rounded"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-card p-4 pb-6 shadow-lg shadow-black flex justify-center lg:justify-none rounded mt-10">
                <form onSubmit={handleSubmit2}>
                    <div className="grid 2xl:grid-cols-3 2xl:gap-20 grid-cols-1">
                    <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Milliliters
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="ml2" className="bg-1text rounded" defaultValue={ml2} onBlur={handleChange}/>
                            </div>
                        </div>
                        <div className="my-auto mx-auto">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Submit Input
                            </label>
                            <Button variant="contained" type="submit" 
                            sx={{backgroundColor:'#64dd17', color:'#3D3D3D', ':hover':{backgroundColor:'#3D3D3D', color:'#64dd17',  boxShadow:10}}} 
                            disableRipple
                            >Submit</Button>
                        </div>
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Liters
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize defaultValue={milliToGrams} minRows={2} maxRows={2} readOnly className="rounded"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
}