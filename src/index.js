/***Task
 * PART 1
 * Create 3 elements with style in separate folder:
 * 1. Menu
 * 2. Content (profile about me)
 * 3. Footer
 * Import elements in App
 * PART 2
 * 1. Add props into Content to define main elements (name etc)
 * 2. Call Content several times in App, changing props each time
 */

/**
 * Entry Point
 */

/* Imports */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App/>, document.querySelector("#mainDiv"));