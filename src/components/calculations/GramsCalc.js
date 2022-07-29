import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import { gramsToMilligrams, milligramsToGrams } from "../../utils/grams";

export default function GramsCalc() {
    const [g1, setG1] = useState('');
    const [mg2, setMg2] = useState('');
    const [gramsToMilli, setGramsToMilli] = useState('');
    const [milliToGrams, setMilliToGrams] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = event => {
        if (event.target.name === 'g1') {
            setG1(event.target.value)
        } 
        
        if (event.target.name === 'mg2') {
            setMg2(event.target.value)
        } 
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (g1.length > 0) {
            setGramsToMilli(gramsToMilligrams(g1))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    const handleSubmit2 = event => {
        event.preventDefault();
        if (mg2.length > 0) {
            setMilliToGrams(milligramsToGrams(mg2))
            setErrorMessage('')
        } else {
            setErrorMessage('Please enter a valid input.')
        }
    };

    const formArr = [
        {label1:'Grams', label2:'Milligrams', name:'g1', value1:g1, value2:gramsToMilli, submit:handleSubmit},
        {label1:'Milligrams', label2:'Gramsrams', name:'mg2', value1:mg2, value2:milliToGrams, submit:handleSubmit2},
    ]
    
    return(
        <>
        <div className="flex justify-center mb-5">
            <h1 className="text-1text text-3xl">
                Grams
            </h1>
        </div>
        <div className="mb-7">
            <p className="text-1text text-sm text-center lg:px-10 md:text-base">
                These calculations allow you to convert grams to milligrams and vice versa. 1 gram is equal to 1000 milligrams. 
            </p>
        </div>
            {formArr.map(e => (
            <div className="bg-card p-4 pb-6 mb-10 shadow-lg shadow-black flex justify-center lg:justify-none rounded">
                <form onSubmit={e.submit}>
                    <div className="grid 2xl:grid-cols-3 2xl:gap-20 grid-cols-1">
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Grams
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
                                Milligrams
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