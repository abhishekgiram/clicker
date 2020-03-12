import React, { Component } from 'react';
import './style.css';
//import propTypes from 'prop-types';
class clicker extends Component {

	 constructor(props){
		super();
		this.state = {
			count:props.count
		};
	}


	incrementCount = () =>{
		this.setState((prevState)=>(
				{count:prevState.count +1}
			)
		);
	}

	decrementCount = () => {
		this.setState((prevState)=>(
		{count:prevState.count-1}
		)
	);	
}
	resetCount=()=>{
		this.setState(()=>({count:0}));
	}

	render() {
        return (
            <div className="container">
                <div className="square">
                    <div style={{  marginTop: 10 }}>                        
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div >
                        <button  style={{ height: 30, width:50, marginTop: 10 }} onClick={this.incrementCount}>
                            +
                        </button>
                        <button  style={{ height: 30, width:50, marginLeft: 2 }} onClick={this.resetCount}>
                            CLR
                        </button>
                        <button style={{ height: 30, width:50, marginLeft: 2 }} onClick={this.decrementCount}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

clicker.defaultProps ={
	count:0
};

export default clicker;