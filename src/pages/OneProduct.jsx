import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PostsContext from "../context/PostsContext";

const OneProduct = () => {
    const [posts] = useContext(PostsContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {


        if (posts && posts.length > 0) {
            const foundProduct = posts.find(item => item.id === parseInt(id));
            setProduct(foundProduct);
        }
    }, [posts, id]);

    if (!product) return <div>Caricamento...</div>;

    return (
        <div className="product-card">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-body">{product.body}</p>
            <Link to="/products" className="product-details-link">Torna ai prodotti</Link>
        </div>
    );
};

export default OneProduct;