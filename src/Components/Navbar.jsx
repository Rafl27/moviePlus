import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.css';
const navbar = () => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(search)

        if(search === null) return 


        navigate(`/search?q=${search}`);
        setSearch("");
    } 

    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'> <BiCameraMovie />Movie+</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Movie name'
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                // value=search is used to clean the search bar once it has been submited
                />
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default navbar