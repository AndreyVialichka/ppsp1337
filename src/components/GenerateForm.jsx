export function GenerateForm(props) {
    return <div style={{
              display:'flex', 
              flexDirection:'column', 
              alignItems:'center'}}
          >
      <h1>Genetated form</h1>
      <form style={{
          display:'flex', 
          flexDirection:'column', 
          gap: '10px'}} 
      >
        <div style={{
              display:'flex',
              flexDirection:'column',
              gap: '10px'
            }}>  
            <h2>Inputs</h2>
            { props.formState.inputsArray.map((item) => {
                return <input key={item.id} style={{width:'200px'}} />
                }
              )
            } 
        </div>
        <div 
          style={{
            display:'flex',
            flexDirection:'column', 
            gap: '10px'
          }}>
              <h2>TextAreas</h2>
              { props.formState.textArreasArray.map((item) => {
                  return <textarea key={item.id}  style={{width:'200px'}}></textarea>
          })} 
        </div>

        <div 
          style={{
            display:'flex', 
            gap: '10px'
          }}>  
            <h2>Checkboxes</h2>
            {props.formState.checkBoxesArray.map((item) => {
              return <input type="checkbox" key={item.id}  ></input>
          })} </div>
      </form>
    </div>
  }