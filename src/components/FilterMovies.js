import Rating from '@mui/material/Rating'; 
import Button from 'react-bootstrap/Button';
const FilterMovies = ({settitre}) => {
    return (
        <div>
<input type="text" onChange={(e)=> settitre(e.target.value)}/>
<Rating   />
<Button variant="warning">Warning</Button>
</div>
    )
}
export default FilterMovies