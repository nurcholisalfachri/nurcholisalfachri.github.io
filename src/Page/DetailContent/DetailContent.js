import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailContent.css';

const DetailContent = () => {
    const [post, setPost] = useState({})
    const { contentId } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${contentId}`).then(res => setPost(res.data))
    })
  
    return (
        <div>
            <p className="number"><strong>Content Number: {post.id}</strong></p>
            <div className="container-content">
                <div className="detail-title">{post.title}</div>
                <p className="detail-body">{post.body}</p>
            </div>
        </div>
    )
  
}


export default DetailContent;