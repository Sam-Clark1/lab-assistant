import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import { enzymeAmount } from "../../utils/enzyme";
import FavoriteButton from "../FavoriteButton";

export default function EnzymeAmount(props) {
    const {userFavorites, setUserFavorites} = props;
    const [calcName, setCalcName] = useState('Enzyme Amount');

    const [resultsState, setResultsState] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [sampleMass, setSampleMass] = useState('');
    const [percentProtein, setPercentProtein] = useState('');
    const [percentEznyme, setPercentEznyme] = useState('');
    const [enzymeDensity, setEnzymeDensity] = useState('');

    const inputArr = [
        {label:'Mass of Sample (g)', name:'sample', value:sampleMass},
        {label:'Percent Protein of Sample', name:'protein', value:percentProtein},
        {label:'Percent of Enzyme to Sample', name:'enzyme', value:percentEznyme},
        {label:'Density of Enzyme (g/mL)', name:'density', value:enzymeDensity},
    ]

    const handleChange = event => {
        if (event.target.name === 'sample') {
            setSampleMass(event.target.value)
        } else if (event.target.name === 'protein') {
            setPercentProtein(event.target.value)
        } else if (event.target.name === 'enzyme') {
            setPercentEznyme(event.target.value)
        } else if (event.target.name === 'density') {
            setEnzymeDensity(event.target.value)
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (sampleMass.length === 0 || percentProtein.length === 0 || percentEznyme.length === 0 || enzymeDensity.length === 0) {
            setErrorMessage('Inputs can\'t be blank.')
        } else {
            setResultsState(enzymeAmount(sampleMass, percentProtein, percentEznyme, enzymeDensity))
            setErrorMessage('')
        }
    };

    return(
        <>
        <FavoriteButton calcName={calcName} setCalcName={setCalcName} userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
        <div className="flex justify-center mb-5">
            <h1 className="text-1text text-3xl">
                Enzyme Amount
            </h1>
        </div>
        <div className="mb-7">
            <p className="text-1text text-sm text-center lg:px-10 md:text-base">
                This calculation is used to find out the amount of enzyme that is to be added to a sample. 
                The information needed before using this calculation is the mass of sample you will be using (in grams), the percent protein of that sample, the desired percent of enzyme to sample, and the density of the enzyme (g/mL).
                This calculation multiplies the sample mass by its percent protein, then multiplies that answer by the desired percent of enzyme to sample, and then divides that answer by the enzyme density that yields the final answer in milliliters.
                The answer in milliliters is then converted to microliters (uL).
            </p>
        </div>
            <div className="bg-card p-4 pb-6 shadow-lg shadow-black flex justify-center lg:justify-none rounded">
                <form onSubmit={handleSubmit}>
                    <div className="grid 2xl:grid-cols-6 2xl:gap-20 grid-cols-1">
                        {inputArr.map(e => (
                            <div className="my-4 lg:my-0" key={e.name}>
                                <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                    {e.label}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <TextField id="outlined-basic"  variant="outlined" name={e.name} className="bg-1text rounded" defaultValue={e.value} onChange={handleChange}/>
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
                                Enzyme Amount (uL)
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize defaultValue={resultsState} minRows={1} maxRows={1} readOnly className="rounded w-full text-center resize-none p-4"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
}