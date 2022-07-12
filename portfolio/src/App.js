import './App.css';
import profilePic from "./profilepic.jpg"

function App() {
  return (
    <div className="App">
    <h1>Emily Vickery</h1>
    <h2>Full Stack Junior Software Developer</h2> 
    <img src={profilePic} alt="profile pic" className="profilePic"/>
    <div>
    <h3>About Me</h3>
    <p>Some blurb about me, tbc</p>
    </div>
    </div>
  );
}

export default App;
