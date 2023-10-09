import { GenerateForm } from "../components/GenerateForm"
import { useState } from "react"
import { Options } from "../components/Options"


export const FormPage = () => {
   

  const [inputValue, setInputValue] = useState(0)
  const [textAreaValue, settextAreaValue] = useState(0)
  const [checkboxValue, setcheckboxValue] = useState(0)

  const [formState, setFormState] = useState(null)

  const [error,setError] = useState(null)

  const buildHandler = () => {

    if(isNaN(inputValue) ||  isNaN(textAreaValue) || isNaN(checkboxValue) ) {
      setError('Not a Number, pls set Number value')
      return
    }


    if(
      
      !Number.isInteger(Number(inputValue)) 
      || !Number.isInteger(Number(textAreaValue)) 
      || !Number.isInteger(Number(checkboxValue))
      ) {
        setError('This is number but not integer, pls set INTEGER VALUE')
        return
      }
    

    let initState = {
      inputsArray: new Array(Number(inputValue)).fill({
        id:'',
      }),
      textArreasArray: new Array(Number(textAreaValue)).fill({
        id:'',
      }),
      checkBoxesArray: new Array(Number(checkboxValue)).fill({
        id:'',
      }),
      
    }
    for(let key in initState) {
      initState[key] = initState[key].map((el,index) => {
        return {
          id: key + index
        }
      })
    }
    setFormState(initState)

  }

    return <div>
      <Options 
        checkboxValue={checkboxValue} 
        inputValue={inputValue} 
        textAreaValue={textAreaValue} 
        setInputValue={setInputValue}
        settextAreaValue ={settextAreaValue}
        setcheckboxValue={setcheckboxValue}
        />
      {error && <p>{error}</p>}
      <button onClick={buildHandler}>Build</button>
      {formState && <GenerateForm  formState={formState} />}

    </div>
}

