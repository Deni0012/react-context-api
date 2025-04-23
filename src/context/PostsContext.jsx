import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PostsContext = createContext();

const url = "https://jsonplaceholder.typicode.com/posts";

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        axios.get(url).then(res => setPosts(res.data)).catch(err => console.error(err))
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    const value = {
        posts,
        fetchPosts,
    };

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export default PostsContext;