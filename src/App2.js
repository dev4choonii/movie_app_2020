import React from "react";

class App2 extends React.Component {
    state = {
        count: 0
    }

    add = () => {
        this.setState(current => ({count: current.count + 1}));
    }

    minus = () => {
        this.setState(current => ({count: current.count - 1}));
    }

    render() {
        return (
            <div>
                <p>
                    count : {this.state.count}&nbsp;
                    <button onClick={this.add}>+</button>
                    &nbsp;
                    <button onClick={this.minus}>-</button>
                </p>
            </div>
        )
    }
}

export default App2;