import * as React from 'react';
import './Appy.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""   
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //this.setState({name: event.target.value});
    const target = event.target;
    const value = target.value;
    const property = target.name;

    this.setState({
      [property]: value
    });
  }
  handleSubmit(event){
    // alert('Submitted : Name -> ' + this.state.name);
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        <div className="main-content">
            <header>
                <h1>Responsive Form Example</h1> </header>
            <div className="container">
                {/* <form onSubmit={this.handleSubmit}> */}
                <label>Name</label>
                <input className="input-control" placeholder="Enter your name" type='text' name='name' value={this.state.name} onChange={this.handleChange} autoComplete="off"/>
            </div>
            <div className="container">
                <label>Email Address</label>
                    <input className="input-control"
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    value={this.state.emailaddress}
                    onChange={this.handleChange} autoComplete="off"
                    />
            </div>
            <div className="container">
                    <label>Message</label>
                    <textarea className="input-control"
                        placeholder="Enter Message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange} autoComplete="off"/>
            </div>
            <div className="container">
            <label>&nbsp;</label>
            <button onClick={this.handleSubmit} type='submit'>Submit</button>
            </div>
                {/* </form> */}
        </div>
    );
  }
}

export default App;
