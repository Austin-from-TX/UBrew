import suds from '../photos/beer-suds.jpg'
import bottles from '../photos/brew-bottles.jpg'
import brew from '../photos/perfect-brew.jpg'

export default function Home({display}) {
    return (
      
      <>
      { display && (
        <>
        <main className="absolute left-1/4 bg-none z-50 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-brown sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Build And Share Your Perfect Brew</span>
          </h1>
          <p className="mt-3 text-base text-brown sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            As a homebrewer we know you're constantly chasing that perfect brew that reflects and expresses your unique style and taste.  With UBrew we help you connect with other creative brewers to share ideas, recipes and inspiration that will keep your fermentor(s) filled and your thirst quenched and your taste buds satisfied!  
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button className="transition duration-500 ease-in-out w-full opacity-90 flex items-center justify-center px-8 py-3 border border-transparent text-xl font-black rounded-md text-yellow bg-blue hover:bg-brown hover:text-yellow-dark md:py-4 md:text-lg md:px-10">
                Get started
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button className="transition duration-500 ease-in-out w-full opacity-90 flex items-center justify-center px-8 py-3 border border-transparent text-xl font-black rounded-md text-yellow bg-amber hover:bg-brown hover:text-yellow-dark md:py-4 md:text-lg md:px-10">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </main>
     </> )
  }
  <img className='object-cover' src={bottles} alt='Brew Suds'></img>
  </>
    );
  }