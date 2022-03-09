// import { Component } from "react";
import React, { Component } from "react";


// 5 styles Construct function Now
class App extends Component {
	state = {
		count: 5,
	}
	addNum = () => {
		this.setState({count: this.state.count + 5})
	}
	render() {
		return (
			<div>
				<h1>Counter: {this.state.count}</h1>
				<button onClick={this.addNum}>Add + 5</button>
			</div>
		)
	}
}

export default App;
// 3 Method function styles
/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
    };
    this.addOne = this.addOne.bind(this);
  }
  addOne() {
    this.setState({ count: this.state.count + 7 });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.addOne}>Add + 7</button>
      </div>
    );
  }
}
export default App; */


	// 2 method styles
/* class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 3,
		}
	}
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
				<button onClick={() => this.setState({count: this.state.count + 3})}>Add + 3</button>
      </div>
    );
  }
}

export default App; */

// Two styles
/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
// Bu one styles Arrow function
	addOne = () => {
		this.setState({count: this.state.count +1}, () => console.log("Add One"))
	}
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Counter: {this.state.count} </h1>
        <button onClick={this.addOne}>
          Add + 1
        </button>
      </div>
    );
  }
}

export default App; */

// One styles
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "Mukhammadali",
// 			lastName: "Dadaboyev",
// 			country: "Namangan"
//     };
//   }

//   changeName = () => {
//     this.setState({
// 			firstName: "Ali",
// 			lastName: "Abu",
// 			country: "Saudi"
// 		});
//   };

//   render() {
//     return (
//       <div>
//         <h1>React Class Component </h1>
//         <h2>FirstName: {this.state.firstName}</h2>
//         <h2>LastName: {this.state.firstName}</h2>
//         <h2>Country: {this.state.firstName}</h2>
//         <button onClick={this.changeName}>Change name</button>
//       </div>
//     );
//   }
// }
// export default App;
