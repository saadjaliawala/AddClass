
import React from 'react';
import './App.css';

const data = [
  {heading: "Mark C" , checkboxNames : ["Vocab cards" , "sandpaper numerals" ,"Vocab cards" , "sandpaper numerals" ,"Vocab cards" ,]}
]

function App() {
  return (
    <div >
      
      <select style={{border : "none" , borderStyle: "none" , backgroundColor: "white"}}  value="Radish">
  <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option>
</select>

      <div style={{marginLeft: "5%" , marginRight: "5%" , display: "flex" , flexDirection: "row" , flexWrap: "wrap" , justifyContent: "center",}} >
    <div  style={{overflowY: 'scroll',}}  class="child" >{data.map((item , index) => {
      return(
        <div style={{display: "flex" , flexDirection: "column" }} >
          <h4 style={{textDecoration: "underline" , alignSelf: "flex-start"}} >{item.heading}</h4>
          {item.checkboxNames.map((name , index) => {

            return(
              <div style={{display: "flex" , flexDirection: "row" , alignItems: "center"  }} >
              <input type="checkbox"  />
              <li>{name}</li>
              </div>
            );
          })}
        
        </div>
      );
    })}</div>
    <div class="child" >2</div>
    <div class="child" >3</div>
    <div class="child" >4</div>
    <div class="child" >5</div>
    <div class="child" >6</div>
    <div class="child" >7</div>
    <div class="child" >8</div>
</div>

    </div>
  );
}

export default App;
