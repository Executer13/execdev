type Props = {
    promise: Promise<Post[] | Post>
}



export default async function UserPosts({promise}: Props) {
    const result = await promise;
    console.log('Posts:', result);

    const posts = Array.isArray(result) ? result : [result];

    const content = posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ));

    return content;
}
