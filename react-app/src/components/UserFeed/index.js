export default function UserFeed({feed}){
    console.log('from the feed', feed)
    return(
        <>
        {feed && feed.map(post => (
        <div className='flex'> 
            <div>{post.username}</div>
            <div>{post.first_name} {post.last_name}</div>
            <div>{post.rotations[0].brew.brew_name}</div>
            
        </div>
        ))}
        </>
    )
}