import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Factorial from './views/Factorial';
import Home from './components/Home';
import Fibonacci from './views/Fibonacci';
import PartialSum from './views/PartialSum';
import Prime from './views/Prime';
import RangeSequence from './views/RangeSequence';

class App extends Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>

            <li>
              <Link to={'/factorial'}> Factorial </Link>
            </li>

            <li>
              <Link to={'/fibonacci'}> Fibonacci </Link>
            </li>

            <li>
              <Link to={'/partial-sum'}> Partial Sum </Link>
            </li>

            <li>
              <Link to={'/prime-sequence'}> Prime Sequence </Link>
            </li>

            <li>
              <Link to={'/range-sequence'}> Range Sequence </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/factorial'} component={Factorial} />
          <Route path={'/fibonacci'} component={Fibonacci} />
          <Route path={'/partial-sum'} component={PartialSum} />
          <Route path={'/prime-sequence'} component={Prime} />
          <Route path={'/range-sequence'} component={RangeSequence} />
        </Switch>
      </div>
    );
  }
}

export default App;
