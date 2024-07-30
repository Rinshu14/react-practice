import React, { useEffect,useState,forwardRef } from 'react'

const Div =forwardRef( (props,ref) => {


    const[Position, setPosition] = useState(props.position)
     

 
  return (
    <div draggable ref={ref} className='bg-orange-300 h-[160px] w-[330px] p-2 fixed cursor-move ' style={{left: Position.left, top: Position.top}}  
    onDragStart={(e)=>props.handleMouseDown(e,props.note.id)}
    onDrag={(e)=>props.handleOnMouseMove(e,props.note.id)}
    onDragEnd={(e)=>props.handleMouseUp(e,props.note.id)}
    >{props.note.id}  📌{props.note.content} </div>
  )
})

export default Div