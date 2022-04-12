import React from "React";
import Clock from "./Components/Clock/Clock"

class App extends React.Component {
    constructor(props) {
        super(props)
        }

        render(){
          return(
            <div className="App">

              <Clock />

            </div>
          )
        }
    }


export default App;
