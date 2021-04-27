import React from 'react';
import { render } from 'react-dom';
import './App.css';
// action="/testForm"
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.click = this.click.bind(this);
    }
    render() {
        return (
            <div className="App2">
                <form method="POST" action="/sample" name="testForm">
                    <article>以下に入力</article>
                    <label name="label1" for="input1">名前：</label>
                    <input type="text" name="input1" id="input1" />
                    <button name="送信" id="submitbutton"
                        onClick={(e) => {
                            this.click(e, document.getElementById('input1'))
                        }}
                    >
                        送信</button>
                </form>
            </div>
        );
    }

    click(e, name) {
        // e.preventDefault();
        alert('clidked by' + name.value);
        this.setState(prevState => {
            this.state.name = name;
        });
    }
}

export default App2;