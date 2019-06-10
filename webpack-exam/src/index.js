import _ from "lodash"
import imported from "./imported"

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    //running the imported function
    imported()

    return element;
  }
  
  document.body.appendChild(component());

  //npx webpack to build
  //run with liveserver to demonstrate