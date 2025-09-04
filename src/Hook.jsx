import React ,{useState,useEffect} from 'react';
function App(){
    const[userId,setUserId]=useState(1);
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[userId])
    return(
        <div>
        <h2>posts by user:{userId}</h2>
        <button onClick={()=>setUserId(1)}>User1</button>
        <button onClick={()=>setUserId(2)}>User2</button>
        <button onClick={()=>setUserId(3)}>User3</button>

        <ul>{posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}</ul>

        </div>
    )
}
export default App;