import { Link } from 'react-router-dom';

const PostCard = ({ product }) => {

    return (
        <div className='post-card'>
            <h2 className='post-title'>{product.title}</h2>
            <p className='post-body'>{product.body}</p>
            <Link to={`/products/${product.id}`} className='posts-link'>Più Dettagli
            </Link>
        </div>
    );
};

export default PostCard;