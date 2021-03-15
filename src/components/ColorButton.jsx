import { Component } from "react";


class ColorButton extends Component {

doClick = color => {
    this.props.actionMethod(color);
    console.log('YA YA');
}


    render() {
        return (
            <button className="myButton" onClick={() => this.doClick('green')}>{this.props.title}</button>
        )
    }
}

export default ColorButton;