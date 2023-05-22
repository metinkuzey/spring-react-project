import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
class App  extends Component {
  state = {
    customers: []
  };


  async componentDidMount() {
    const response = await fetch('/customers');
    const body = await response.json();
    this.setState({customers: body});
  }

  render() {
    const {customers} = this.state;
    return (
      <div className="bg-stone-100 min-h-screen">
              <Navbar />
              <Home />
              <h2>Customers</h2>
              {customers.map(customer =>
                  <div key={customer.customerId}>
                    {customer.userName} ({customer.email})
                  </div>
              )}
            </div>
    );
  }
}
export default App;

