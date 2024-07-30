import React from 'react'
import Div from './Div'
import { useRef, useState } from 'react'
import { noOfNotes } from "./Constant"
import { data } from "./data"
const Conatiner = () => {

  const notesRef = useRef({})


  const [notes, setNotes] = useState([...data])

  const [offset, setOffset] = useState({ left: 0, top: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [tempPos, setTempPos] = useState(0)



  const determineRandomPosition = () => {

    let x = Math.floor(Math.random() * (window.innerWidth - 350))
    let y = Math.floor(Math.random() * (window.innerHeight - 150))
    return { left: `${x}px`, top: `${y}px` }


  }




  let handleMouseUp = (e,id) => {
    setIsDragging(false)
    notesRef.current[id].style.left = tempPos.left + "px"
    notesRef.current[id].style.top = tempPos.top + "px"
  }

  let handleMouseDown = (e, id) => {

    setIsDragging(true)
    let tempOffset = { left: e.clientX - (notesRef.current[id].getBoundingClientRect().left), top: e.clientY - (notesRef.current[id].getBoundingClientRect().top) }
    setOffset(tempOffset)
    

  };


  let handleOnMouseMove = (e, id) => {

    if (isDragging === false) return
    let newPos = { left: e.clientX - offset.left, top: e.clientY - offset.top }
    notesRef.current[id].style.left = newPos.left + "px"
    notesRef.current[id].style.top = newPos.top + "px"
    setTempPos({...newPos})
  }

  return (
    <div>

      {notes.map((item) => {

        return <Div ref={(element) => {

          return notesRef.current[item.id] = element
        }} key={item.id} position={determineRandomPosition()} handleMouseDown={handleMouseDown} handleOnMouseMove={handleOnMouseMove} handleMouseUp={handleMouseUp} note={item} />
      })}

    </div>
  )
}

export default Conatiner
