import postsList from '../data/postslist.jsx';

export default function Posts() {
    return (
        <>
            <h1>Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugiat? Nisi, impedit magnam. Explicabo veniam, quibusdam dolorem quaerat maxime soluta minus voluptatibus exercitationem odit, voluptate fugiat, in dignissimos iure. Nesciunt.</p>

            <div className="posts">
                {postsList.map((post, index) => (
                    <div key={index} className="post">
                        <h2>{post.name}</h2>
                        <h2>
                            <Link to={`/posts/${index}`}>{post.name}</Link>
                        </h2>
                        <img src={post.image} alt={post.name} />
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
