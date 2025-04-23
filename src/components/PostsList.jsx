import { useContext } from "react";
import PostCard from "./PostCard";
import PostsContext from "../context/PostsContext";


const PostList = () => {

    const { posts } = useContext(PostsContext);

    return (
        <div className="product-container">
            {posts.map(product => (
                <PostCard key={product.id} product={product} />
            ))}

        </div>
    );
};

export default PostList;