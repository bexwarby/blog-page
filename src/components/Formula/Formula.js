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
            <div className="submitBlog">

                <h2 className="addNewBlog">Submit your blog</h2>
                <hr />

                {/* Show the submitted blog */}
                <div className="desiredBlog">
                    <h2>Your Blog:</h2>
                    <h3>{title}</h3>
                    <p>By:{writer}</p>
                    <p className="whiteSpace">{textSubmitted}</p>
                    <p>On {dateSubmitted}</p>
                </div>
                <hr />

                {/* Form Input */}
                <form className="infoForm">
                    {/* TITLE */}
                    <input
                        type="text"
                        placeholder="title"
                        onChange={handleTitleInput}
                    />
                    {/* AUTHOR */}
                    <input
                        type="text"
                        placeholder="your name"
                        onChange={handleAuthorName}
                    />
                    {/* BLOG TEXT*/}
                    <textarea
                        placeholder="write your blog here"
                        onChange={handleBlogInput}
                        rows="10"
                        cols="30"
                    >
                    </textarea>
                    {/* DATE WRITTEN */}
                    <input
                        type="date"
                        onChange={handleDateInput}
                    />
                    {/* SUBMIT BUTTON */}
                    <button onClick={handleSubmitButton}>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}

/* Export */
export default Formula;