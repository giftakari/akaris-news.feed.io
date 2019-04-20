import React, { Component } from "react";
import "./App.css";
import News from "./News/News";
import Sidenews from './News/SideNews'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "country=au"
      },
      news2: {
        type: "everything",
        query: "q=bitcoin"
      },
      news3: {
        type: 'top-headlines',
        query: 'country=au&category=technology'
      }
    };
  }
  render() {
    return (
      <div className="containwer-fluid">
        <div className="navbar-fix">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">
               <h1>Akaris News</h1> 
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
