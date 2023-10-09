

export const Options = ({
    inputValue,
    textAreaValue,
    checkboxValue,
    setInputValue,
    settextAreaValue,
    setcheckboxValue
}) => {
    return <>
        <div style={{display:"flex" , gap:'10px', alignItems:'center'} } >
            <input 
                style={{width:'100px', height:"20px"}}
                label='input' 
                value = {inputValue} 
                onChange={
                    (e) => {
                        setInputValue(e.currentTarget.value)
                        }
                    } ></input>
            <p>Inputs Count</p>
        </div>
        <div style={{display:"flex" , gap:'10px', alignItems:'center'} }>
            <input 
            label='textarea'
            style={{width:'100px', height:"20px"}}
            value ={textAreaValue} 
            onChange={(e) => {
                settextAreaValue(e.currentTarget.value)
                }}></input>
            <p>Textareas Count</p>
        </div>

        <div style={{display:"flex" , gap:'10px', alignItems:'center'} }>
            <input 
                label='checkbox'
                style={{width:'100px', height:"20px"}} 
                value = {checkboxValue } 
                onChange={(e) => {setcheckboxValue(e.currentTarget.value)}}></input>
            <p>Chechboxes Count</p>
        </div>
    </>
}