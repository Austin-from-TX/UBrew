import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const BrewCard = ({brew}) => {

    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
           <div className='flex w-2/3 mx-auto m-8 bg-white rounded-xl border-4 border-red shadow-md overflow-hidden '>
            <Link to={`/brews/${brew.id}`}>
           <div className="md:flex ">
                <div className="flex-shrink">
                    <img className='h-full w-full object-cover md:w-48' src={brew.photos[0].url} />
                </div>
                <div className="flex-1 flex-col p-8 p-10 space-y-6 text-left">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name: {brew.brew_name}</div>
                    <h1>Creator: {brew.users}</h1>
                    <h1>Style: {brew.style}</h1>
                    <h1 className='mt-2 text-gray-500'>Description: {brew.description} </h1>
                </div>
                

                <div className='flex-none p-2 m-4 space-y-6 self-center'>
                    {sessionUser && sessionUser.username == brew.users && (
                       <>
                       <div>
                        <button className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"  style={{fontFamily: 'Bourbon Grotesque'}}>Edit </button>
                            <button className="m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-4 py-3 rounded-md text-sm"  style={{fontFamily: 'Bourbon Grotesque'}}>Delete </button>
                      </div>
                      </>
                    )}
                </div>
            </div>
            </Link>
            </div>
           
        </>
    )
}

export default BrewCard 