import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      time : 0
    };
  }

  fetchTime () {
    fetch('/time')
      .then(res => res.json())
      .then((data) => {
        this.setState({time: data.time});
      });
  }

  componentDidMount() {

    this.interval = setInterval(() => this.fetchTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Time: {this.state.time}</div>
    );
  }
}

//
// function App() {
//   const [currentTime, setCurrentTime] = useState(0);
//
//   useEffect(() => {
//     fetch('/time').then(res => res.json()).then(data => {
//       setCurrentTime(data.time);
//     });
//   }, []);
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//         <p>The current time is {currentTime}.</p>
//       </header>
//     </div>
//   );
// }

export default App;
