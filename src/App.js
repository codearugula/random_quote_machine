/* eslint-disable no-useless-constructor */
import React from 'react'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: index,
        };
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    componentDidMount() {
        this.updateIndexState = this.updateIndexState.bind(this);
    }

    handleClick() {
        this.updateIndexState();
    }

    updateIndexState() {
        this.setState({index: Math.floor(Math.random()*(Object.keys(quotes).length))});
    }

    render() {
        return (
                <div id="quote-box" style={{ border: '10px solid blue', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center'}}>
                    <div id="text">
                        Quote:&nbsp;&nbsp;
                        {quotes[this.state.index].quote}
                    </div>
                    <div id="author">
                        Author:&nbsp;&nbsp;
                         {quotes[this.state.index].author}
                    </div>
                    <button onClick={this.handleClick} id="new-quote">
                        Another Quote
                    </button>
                    <br /><a id="tweet-quote" href="https://twitter.com/intent/tweet">
                        Twitter
                    </a>
                </div>
                );
    }
}

const quotes = [
    {author: "I. N. Spired", quote: "Inspirational"},
    {author: "A. N. Gry", quote: "I'm so mad."},
    {author: "Lorraine Dofingbottom", quote: "Bottom's where it's at!"},
    {author: "A. B. See", quote: "Dee Eee Fff"},
    {author: "Pater Noster", quote: "Et tu Brute"}
];

const index = [Math.floor(Math.random()*(Object.keys(quotes).length))];

console.log(index);

export default App