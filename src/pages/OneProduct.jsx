import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";


        axios.get(url + "/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!product) return <div>Caricamento...</div>;

    return (
        <div className="product-card">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-body">{product.body}</p>
        </div>
    );
};

export default OneProduct;