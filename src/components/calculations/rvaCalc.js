import React, {useState} from "react";
import { TextField } from "@mui/material";
import { rvaEndPoint } from "../../utils/rvaEndPoint";

export default function RVACalc() {
    const [resultsState, setResultsState] = useState('');
    
    const [formState, setFormState] = useState({minutes:'', samples:''});
    const {minutes, samples} = formState;

    const handleSubmit = event => {
        event.preventDefault();
        console.log(resultsState)
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1">
                    <div>
                        <label className="block text-sm font-medium text-2text">
                            Number of Minutes Per Run
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <TextField id="outlined-basic"  variant="outlined" className="bg-card" defaultValue={minutes}/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-2text">
                            Number of Samples
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <TextField id="outlined-basic"  variant="outlined" className="bg-card" defaultValue={samples}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}