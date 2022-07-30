import React, {useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function FavoriteButton(props) {
const {isFavorite} = props
const [favorite, setFavorite] = useState(isFavorite)
const handleFavorite = () => {
    if (favorite) {
        setFavorite(false)
    } else {
        setFavorite(true)
    }
};

  return (
    <div className="flex justify-center lg:justify-end ">
        <button onClick={handleFavorite}>
            {favorite ? <StarIcon className='text-accent'/> : <StarOutlineIcon className='text-accent'/>}
        </button>
    </div>
  )
}
