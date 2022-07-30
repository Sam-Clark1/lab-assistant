import React, { useState } from 'react'
import { Button, TextareaAutosize, Alert } from "@mui/material";
import { dilutionAmount } from '../../utils/dilution';
import FavoriteButton from "../FavoriteButton";

export default function Dilution() {
    const [errorMessage, setErrorMessage] = useState('');

    const [C1, setC1] = useState('');
    const [V1, setV1] = useState('');
    const [C2, setC2] = useState('');
    const [V2, setV2] = useState('');

    const inputArr = [
        {label: 'C1 (M)', value: C1, name: 'c1'},
        {label: 'V1 (mL)', value: V1, name: 'v1'},
        {label: 'C2 (M)', value: C2, name: 'c2'},
        {label: 'V2 (mL)', value: V2, name: 'v2'},
    ];

    const handleChange = event => {
        if (event.target.name === 'c1') {
            setC1(event.target.value)
        } else if (event.target.name === 'v1') {
            setV1(event.target.value)
        } else if (event.target.name === 'c2') {
            setC2(event.target.value)
        } else if (event.target.name === 'v2') {
            setV2(event.target.value)
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (C1.length > 0 && V1.length > 0 && C2.length > 0 && V2.length > 0) {
            setErrorMessage('Must fill in only three inputs to run calculation.')
        } else if (C1.length + V1.length + C2.length + V2.length < 3) {
            setErrorMessage('Must fill in three inputs to run calculation.')
        } else if (C1.length === 0) {
            setC1(dilutionAmount(C1, V1, C2, V2))
            setErrorMessage('')
        } else if (V1.length === 0) {
            setV1(dilutionAmount(C1, V1, C2, V2))
            setErrorMessage('')
        } else if (C2.length === 0) {
            setC2(dilutionAmount(C1, V1, C2, V2))
            setErrorMessage('')
        } else if (V2.length === 0) {
            setV2(dilutionAmount(C1, V1, C2, V2))
            setErrorMessage('')
        }
    };

    return(
        <>
        <FavoriteButton/>
        <div className="flex justify-center mb-5">
            <h1 className="text-1text text-3xl">
                Dilution
            </h1>
        </div>
        <div className="mb-7">
            <p className="text-1text text-sm text-center lg:px-10 md:text-base">
                This calculation is used to find the necessary information on how you should dilute your sample based the amount (mL) and concentration (M). 
                This calculation utilizes the C1V1=C2V2 formula where C1 is the initial concentration, V1 initial volume, C2 final concentraion, and V2 final volume. 
                To be able to use this calculation, you need at least three out of the four of those values to find that missing fourth value. 
            </p>
        </div>
            <div className="bg-card p-4 pb-6 shadow-lg shadow-black flex justify-center lg:justify-none rounded">
                <form onSubmit={handleSubmit}>
                    <div className="grid 2xl:grid-cols-5 2xl:gap-20 grid-cols-1">
                        {inputArr.map(e => (
                        <div className="my-4 lg:my-0" key={e.name}>
                            <label className="block text-lg font-medium text-2text whitespace-nowrap justify-center flex">
                                {e.label}
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize onChange={handleChange} defaultValue={e.value} key={e.value} minRows={1} maxRows={1} name={e.name} className="rounded w-full text-center p-4 resize-none" />
                            </div>
                        </div>
                        ))}
                        <div className="my-auto mx-auto">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Submit Inputs
                            </label>
                            <Button variant="contained" type="submit" 
                            sx={{backgroundColor:'#64dd17', color:'#3D3D3D', ':hover':{backgroundColor:'#3D3D3D', color:'#64dd17',  boxShadow:10}}} 
                            disableRipple>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
}
