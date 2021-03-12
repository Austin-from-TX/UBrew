import FollowCard from './FollowCard'

export default function FollowList({follows, setShowModal}){

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