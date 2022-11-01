// useMemo helps us to run updates so fast and seems normal to the users
import React,{useState,useMemo,useEffect} from 'react'

const App = () => {
  const [number, setnumber] = useState(0)
  const [dark, setdark] = useState(false)

  const valueAsNumbers=()=>{
    setnumber(e.target.valueAsNumber)
  }
  
  //by this it is consist of two functions 
  //1.to to make expensive function run so fast to run update
  //2. to  make styles update run so faster
    const memoCalculation =useMemo(() =>{// make this func makes to
      // run so fast for updating
      return expensiveFunction(number)}
      , [number])

      const calculation =expensiveFunction(number);


      const cssStyle= useMemo(()=> {//change background theme
        return{
        backgroundColor:dark? "black":"white",
        color:dark? "white" :"black"}

      },[dark])


      useEffect(() => {
       console.log('cssStyle changed')
      }, [cssStyle])
      
  return (
    <div style={cssStyle}>

      <input
      onChange={valueAsNumbers}
      type="number"
      value={number}
       />
       
       <h2> calculation:{memoCalculation}</h2>
       <button onClick={()=>setdark(!dark)}> Toggle</button>
    </div>
  )
}


export default App