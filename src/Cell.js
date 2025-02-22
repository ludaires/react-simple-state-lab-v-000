import React from "react";

class Cell extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.value
        }
    }

    handleClick = () => {
        // const newCount = this.state.count + 1
        this.setState({
          color: '#333'
        })
    }


    render() {
        return (
          <div 
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
          </div>
        )
    }
    
}
export default Cell;