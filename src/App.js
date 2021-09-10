import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function App(){

  const [result , setResult] = useState("");

  const handle = (e) =>{
      setResult(result.concat(e.target.name));
  }
  const Result = () =>{
    setResult(eval(result).toString());
  }
  const C = () =>{
    setResult("");
  }
  const CE = () =>{
    setResult(result.slice(0 , -1)); 
  }
  return(
    <>
     <div className="main-div" style={{width:"300px"}}>
       <h1 style={{textAlign:"center" , color:"white"}}>Simple Calculator</h1>
       <form>
        <input className="input" type="text" value={result}/>
       </form>
       <br/>
       <Button className="btn" name="1" onClick={handle}>1</Button>
       <Button className="btn" name="2" onClick={handle}>2</Button>
       <Button className="btn" name="3" onClick={handle}>3</Button>
       <Button className="btn" name="+" onClick={handle}>+</Button><br/>
       <Button className="btn" name="4" onClick={handle}>4</Button>
       <Button className="btn" name="5" onClick={handle}>5</Button>
       <Button className="btn" name="6" onClick={handle}>6</Button>
       <Button className="btn" name="-" onClick={handle}>-</Button><br/>
       <Button className="btn" name="7" onClick={handle}>7</Button>
       <Button className="btn" name="8" onClick={handle}>8</Button>
       <Button className="btn" name="9" onClick={handle}>9</Button>
       <Button className="btn" name="*" onClick={handle}>*</Button><br/>
       <Button className="btn" name="C" onClick={C}>C</Button>
       <Button className="btn" name="CE" onClick={CE}>CE</Button>
       <Button className="btn" name="0" onClick={handle}>0</Button>
       <Button className="btn" name="/" onClick={handle}>/</Button><br/>
       <Button className="equal" name="=" onClick={Result}>=</Button>
       <Button className="btn" name="." onClick={handle}>.</Button>
      </div>
    </>
  );
}

export default App;