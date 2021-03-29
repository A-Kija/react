import React, { useState, useEffect } from 'react';
import API from '../shared/jsonplaceholder';


const Posts = () => {
const [postsListState, setPostsListState] = useState([]);

useEffect(() => {

    console.log("Kreipimasis i serveri")

    API.get(`posts`)
        .then(response => {
            console.log(response.data)
            setPostsListState(response.data);
        })

    



}, []);


return (
    <div className="big box">
        <ul>
            {postsListState.map(post => <li key={post.id}>
                    <span className="post-id">{post.id}.</span> 
                    <span className="post-title">{post.title}</span>
                </li>
            )}

        </ul>

    </div>
)


}

export default Posts;