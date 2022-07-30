import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import { rvaEndPoint } from "../../utils/rvaEndPoint";
import FavoriteButton from "../FavoriteButton";
export default function RVACalc() {
    const [resultsState, setResultsState] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    
    const [formState, setFormState] = useState({minutes:'', samples:''});
    const {minutes, samples} = formState;

    let isFavorite = true;

    const inputArr = [
        {label:'Number of Samples', value:samples, name:'samples'},
        {label:'Number of Minutes Per Run', value:minutes, name:'minutes'}
    ]

    const handleChange = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (minutes.length === 0 || samples.length === 0) {
            setErrorMessage('Inputs can\'t be blank.')
        } else {
            setResultsState(rvaEndPoint(minutes, samples))
            setErrorMessage('')
        }
    };
    
    const handleCopy = () => {
        if (resultsState.length > 0) {
            navigator.clipboard.writeText(resultsState)
            setIsCopied(true)
            setTimeout(()=>{setIsCopied(false)}, 1500)
        } 
    };
    
    return(
        <>
        <FavoriteButton isFavorite={isFavorite}/>
        <div className="flex justify-center mb-5">
            <h1 className="text-1text text-3xl">
                RVA Enpoint Viscosity
            </h1>
        </div>
        <div className="mb-7">
            <p className="text-1text text-sm text-center lg:px-10 md:text-base">
                This calculation is used to find the endpoint viscosities of samples run on a Perten Instruments RVA 4500/4800 from the data it produces. 
                Using this calculation saves you time by not having to go through thousands of cells to find the data you are looking for. 
                To make use of this, make sure you have copied your data from the RVA software to a Microsoft Excel Spreadsheet. 
                To use, simply input the number of samples that were run and the number of minutes for each run. 
                Then hit submit and it will generate a list of cell ID's that can be pasted next to the data in the spreadsheet which will pull those viscosities from the data and have them presented in a list. 
            </p>
        </div>
            <div className="bg-card p-4 pb-6 shadow-lg shadow-black flex justify-center lg:justify-none rounded">
                <form onSubmit={handleSubmit}>
                    <div className="grid 2xl:grid-cols-5 2xl:gap-20 grid-cols-1">
                        {inputArr.map(e => (
                        <div className="my-4 lg:my-0" key={e.name}>
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                {e.label}
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" type='number' name={e.name} className="bg-1text rounded" defaultValue={e.value} onChange={handleChange}/>
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
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Viscosity Endpoints
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize defaultValue={resultsState} minRows={1} maxRows={1} readOnly className="rounded w-full text-center resize-none p-4"/>
                            </div>
                        </div>
                        <div className="my-auto mx-auto">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap">
                                Copy to Clipboard
                            </label>
                            <Button variant="contained" 
                            sx={{backgroundColor:'#64dd17', color:'#3D3D3D', width:'7rem', ':hover':{backgroundColor:'#3D3D3D', color:'#64dd17',  boxShadow:10}}} 
                            disableRipple
                            onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy'}</Button>
                        </div>
                    </div>
                </form>
            </div>
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
}