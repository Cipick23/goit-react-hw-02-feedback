import { Component } from 'react';
import Feedback from './feedback/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        {/* Feedback Widget */}
        <Feedback />

      </div>
    );
  }
}

export default App;
