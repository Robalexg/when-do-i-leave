import React, {Component} from 'react'
import Autocomplete from 'react-google-autocomplete';


class App extends Component{


  onSub(e){
    if(e.keyCode === 13){
      console.log(e.target.value)
    }
  }

  render(){
    return(
      <div>
        Starting Location: 
        <Autocomplete
        style={{width: '20%'}}
        onPlaceSelected={(place) => {
        console.log(place);
         }}
        />
        <br/>
        Destination: 
        <Autocomplete
        style={{width: '20%'}}
        onPlaceSelected={(place) => {
        console.log(place);
         }}
        />


      </div>
    )
  }
}


export default App