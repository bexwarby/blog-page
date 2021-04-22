/*
* components/Formula/Formula.js - Formula component 
*/

/* Imports */
import "./formula.css";
import { useState } from "react";

/*
* Formula component for a new blog
*/
function Formula(props) {

    const [title, setTitle] = useState(" ");
    const [writer, setWriter] = useState(" ");
    const [textSubmitted, setTextSubmitted] = useState(" ");
    const [dateSubmitted, setDateSubmitted] = useState(" ");

    //function for each input in the form
    function handleTitleInput(e) {
        setTitle(e.target.value);
    }
    function handleAuthorName(e) {
        setWriter(e.target.value);
    }
    function handleBlogInput(e) {
        setTextSubmitted(e.target.value);
    }
    function handleDateInput(e) {
        setDateSubmitted(e.target.value);
    }
    function handleSubmitButton(e) {
        e.preventDefault(); //stops page reloading each time
        console.log(title + "by " + writer + "on " + dateSubmitted);
        console.log(textSubmitted);
    }

    return (

        <div>

            {/* Form to submit new blog */}
            <form className="submitBlog">

                <h2 className="addNewBlog">
                    Submit your blog
                </h2>

                <hr />

                {/* Show the submitted blog */}
                <div className="desiredBlog">

                    <h2>View Your Submitted Blog</h2>
                    <h3>Title: {title}</h3>
                    <p>Written by: {writer}</p>
                    <p>Text written: {textSubmitted}</p>
                    <p>Date written: {dateSubmitted}</p>

                </div>
                <hr />

                {/* Title Input */}
                <div className="infoForm">
                    <label>Title:</label>
                    <input
                        type="text"
                        placeholder="title"
                        onChange={handleTitleInput}
                    />
                </div>

                {/* Author Input */}
                <div className="nameForm">
                    <label>Your name:</label>
                    <input
                        type="text"
                        placeholder="your name"
                        onChange={handleAuthorName}
                    />
                </div>

                {/* Blog Text Input */}
                <div className="blogForm">
                    <label>Blog:</label>
                    <textarea
                        placeholder="write your blog here"
                        onChange={handleBlogInput}
                        rows="10"
                        cols="30"
                    >
                    </textarea>
                </div>

                {/* Date Input */}
                <div className="blogForm">
                    <label>Date:</label>
                    <input
                        type="date"
                        onChange={handleDateInput}
                    />
                </div>

                <div className="buttonForm">
                    <button onClick={handleSubmitButton}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

/* Export */
export default Formula;