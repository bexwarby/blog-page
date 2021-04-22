/*
* components/Blog/Blog.js - Blog component 
*/

/* Imports */
import "./blog.css";
import { useState } from "react";

/*
* Blog component 
*/

function Blog(props) {

    const [like, setLikes] = useState(0);

    function handleClick() {
        setLikes(like + 1)
    }

    return (

        <div className="blogSection">

            {/* Blog Articles */}

            <article className="blogInput">

                <h1 className="blogTitle">{props.title}</h1>

                <p>Written by {props.author} ({props.date})</p>

                <p>{props.children}</p>

                {/* Example of useState*/}
                <button
                    onClick={handleClick}
                    className="likesButton"
                >
                    Likes: {like}
                </button>

            </article>

        </div>
    );
}

/* Export */
export default Blog;