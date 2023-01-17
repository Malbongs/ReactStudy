import React, { useState, useRef } from "react";


const InputSample =()=>{

    const [inputs,setInputs] = useState({
        name:'',
        nickName:''
    });

    const nameInput = useRef();
    
    const {name,nickName} = inputs;

    const onChange =(e)=>{
        const {value, name} =e.target;

        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const reset = ()=>{
        setInputs({
            name : '',
            nickName: ''
        });

        nameInput.current.focus();
    }

    return(
        <div>
            
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>이름:{name} 닉네임:{nickName}</b>
            </div>
        </div>
    )
}

export default InputSample;