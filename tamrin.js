import { useEffect, useState } from "react";

const Posts = () => {
    const [post,setPosts]=useState(null)
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(true)
    const fetchPosts= async()=>{
        try {
            let data =await fetch("")
            let res = await data.json()
            setError(false)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading(true)
        }
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    return (  );
}
 
export default Posts;