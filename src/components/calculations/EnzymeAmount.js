import React, {useState} from "react";
import { TextField, Button, TextareaAutosize, Alert } from "@mui/material";
import { enzymeAmount } from "../../utils/enzyme";

export default function EnzymeAmount() {
    const [resultsState, setResultsState] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [sampleMass, setSampleMass] = useState('');
    const [percentProtein, setPercentProtein] = useState('');
    const [percentEznyme, setPercentEznyme] = useState('');
    const [enzymeDensity, setEnzymeDensity] = useState('');

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
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Mass of Sample (g)
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="sample" className="bg-1text rounded" defaultValue={sampleMass} onBlur={handleChange}/>
                            </div>
                        </div>
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Percent Protein of Sample
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="protein" className="bg-1text rounded" defaultValue={percentProtein} onBlur={handleChange}/>
                            </div>
                        </div>
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Percent of Enzyme to Sample
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="enzyme" className="bg-1text rounded" defaultValue={percentEznyme} onBlur={handleChange}/>
                            </div>
                        </div>
                        <div className="my-4 lg:my-0">
                            <label className="block text-sm font-medium text-2text whitespace-nowrap justify-center flex">
                                Density of Enzyme (g/mL)
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextField id="outlined-basic"  variant="outlined" name="density" className="bg-1text rounded" defaultValue={enzymeDensity} onBlur={handleChange}/>
                            </div>
                        </div>
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
                                Amount of Enzyme Needed (uL)
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <TextareaAutosize defaultValue={resultsState} minRows={2} maxRows={2} readOnly className="rounded w-full text-center"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Alert severity="error" className={`relative mt-10  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </>
    )
}