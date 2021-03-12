import FollowerCard from './FollowerCard'

export default function FollowersList({followers, setShowModal}){

    return(
        <>
        <ul>
            {followers && followers.map(follower => (
                <FollowerCard follower={follower}/>
                ))}
        </ul>
        <button onClick={e => setShowModal(false)}>Close</button>
        </>
    )
}