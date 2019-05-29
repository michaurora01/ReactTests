import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <body data-spy="scroll" data-target=".navbar" data-offset="200">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#form">
                Form
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dropdown">
                Drop Down
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#buttons">
                Buttons
              </a>
            </li>
          </ul>
        </nav>

        <div id="form" class="container-fluid">
          <h1>Form</h1>
          <form action="/action_page.php" class="was-validated">
            <div class="form-group">
              <label for="uname">Username:</label>
              <input
                type="text"
                class="form-control"
                id="uname"
                placeholder="Enter username"
                name="uname"
                required
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>

            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                required
              />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div id="dropdown" class="container-fluid">
          <h1>Drop Down</h1>
          <select>
            <option value="choice1">Test Choice 1</option>
            <option value="choice2">Test Choice 2</option>
            <option selected value="choice3">
              Test Choice 3
            </option>
            <option value="choice4">Test Choice 4</option>
          </select>

          <br />
          <br />
          <br />
          <br />

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" />
              Option 1
            </label>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" />
              Option 2
            </label>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" />
              Option 3
            </label>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div id="buttons" class="container-fluid">
          <h1>Buttons</h1>
          <button class="btn btn-success">
            <span class="spinner-border text-warning" />
            Green
          </button>

          <button class="btn btn-info">
            <div class="spinner-border text-danger" />
            Blue
          </button>

          <button type="button" class="btn btn-warning">
            <div class="spinner-border text-info" />
            Yellow
          </button>

          <br />
          <br />
          <button type="button" class="btn btn-outline-primary">
            <div class="spinner-grow text-success" />
            Empty Blue
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <div class="spinner-grow text-primary" />
            Empty Gray
          </button>
        </div>
      </body>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
