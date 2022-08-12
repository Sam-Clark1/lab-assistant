import React, {useState, useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AuthService from '../api/auth.service';
import axios from '../api/axios';

export default function FavoriteButton(props) {
const {calcName, userFavorites, setUserFavorites} = props;
const [currentUser, setCurrentUser] = useState(undefined);
const [favorite, setFavorite] = useState();


useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
        setCurrentUser(user);
        setFavorite(userFavorites.includes(calcName))
    }
}, [calcName, userFavorites]);


const handleFavorite = async () => {
    if (favorite) {
        const newObjArr = {'calculations': userFavorites.filter(newCalcs => newCalcs !== calcName)};
        const newArr = userFavorites.filter(newCalcs => newCalcs !== calcName)
        await axios.put(`users/${currentUser.id}`, newObjArr).then(
            setUserFavorites(newArr),
            setFavorite(false),
        )
    } else {
        const currentFavorites = userFavorites.map(e => e)
        currentFavorites.push(calcName)
        const newObjArr = {'calculations': currentFavorites};
        await axios.put(`users/${currentUser.id}`, newObjArr).then(
            setUserFavorites(currentFavorites),
            setFavorite(true),
        )
    };
};

  return (
    <>
        {currentUser &&
            <div className="flex justify-center lg:justify-end">
                <button onClick={handleFavorite}>
                    {favorite ? 
                    <StarIcon className='text-accent' sx={{fontSize:'2rem'}}/> 
                    :
                    <StarOutlineIcon className='text-accent' sx={{fontSize:'2rem'}}/>}
                </button>
            </div>
        }
    </>
  );
};
