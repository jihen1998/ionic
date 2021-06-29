import React,{useState} from "react";
const NewGoal=props => {
const[te,setTe]=useState('');
const addGoalHandler=event=>
    {event.preventDefault();
const newGoal={
    id:Math.random().toString(),
    text:te
}; props.onAddGoal(newGoal);
        setTe('')

    }

    const  addtext=event=>{
        setTe(event.target.value)
    }

    return (
    <div>
        <input type="text" value={te} onChange={addtext}/>
        <button onClick={addGoalHandler}>hello</button>
    </div>
)
}
export default NewGoal;
