import FollowCard from './FollowCard'

export default function FollowsList({follows, setShowModal}){
    console.log('from followlist ', follows)
    return(
        <>
        <button className="btn__x" onClick={e => setShowModal(false)}>
          <i className="fas fa-times"></i>
      </button>
        <ul>
            {follows && follows.map(follow => (
                <FollowCard follow={follow} setShowModal={setShowModal}/>
                ))}
        </ul>
        </>
    )
}