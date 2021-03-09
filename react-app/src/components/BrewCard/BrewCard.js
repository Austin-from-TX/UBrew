import {Link} from 'react-router-dom'

const BrewCard = ({brew}) => {

    return (
        <>
            <Link to={`/brews/${brew.id}`}>
            <div className= 'flex-col border '>
                <h1>Name: {brew.brew_name}</h1>
                <h1>Creator: {brew.users}</h1>
                <h1>Style: {brew.style}</h1>
                <img className='w-24 h-30' src={brew.photos[0].url} />
                <h1>Description: {brew.description} </h1>
            </div>
            </Link>
        </>
    )
}

export default BrewCard 