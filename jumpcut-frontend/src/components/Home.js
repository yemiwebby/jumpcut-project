import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className={'homeWrapper'}>
                <p> Click any of the link below to activate a sequencer function </p>


                <div className={'homeContainer'}>
                    <div>
                        <Link to={'/factorial'}> Factorial Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/fibonacci'}> Fibonacci Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/partial-sum'}> Partial Sum Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/prime-sequence'}> Prime Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/range-sequence'}> Range Sequence </Link>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;