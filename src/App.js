import './App.css';

function App() {
  return (
    <body>
      <h1>TESTING</h1>
      <container className="mainContainer">
        <container className="characterDisplay">
          <h1>Character Display</h1>
        </container>
        <container className = "menu">
          <container className = "training">
            <h1>Training</h1>
          </container>
          <container className = "operators">
            <container className = "team">
              <h1>Team</h1>
            </container>
            <container className = "operator">
              <h1>Operator</h1>
            </container>
          </container>
          <container className = "recruit">
            <h1>Recruitment</h1>
          </container>
          <container className = "baseControls">
            <container className = "base">
              <h1>Base</h1>
            </container>
            <container className = "missions">
              <h1>Missions</h1>
            </container>
          </container>
        </container>
      </container>
    </body>
  );
}

export default App;
