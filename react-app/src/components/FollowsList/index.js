import FollowCard from './FollowCard'

export default function FollowsList({follows, setShowModal}){
    console.log('from followlist ', follows)
    return(
        <>
        <ul>
            {follows && follows.map(follow => (
                <FollowCard follow={follow}/>
                ))}
        </ul>
        <button onClick={e => setShowModal(false)}>Close</button>
        </>
    )
}