import React from 'react'
import Message from './Message'
import { useState, useEffect } from 'react'
import { generate, makeText } from './Utils/CommonMethods'





const LiveChat = () => {


    const [messages, setMessages] = useState([{
        name: "John",
        message: "Hello",
        image: "https://images.pexels.com/photos/7147473/pexels-photo-7147473.jpeg?auto=compress&cs=tinysrgb&w=600"
    }])
const addMessage=(mesg)=>(setMessages((messages)=>{
    messages.length>19 && messages.pop();
    return ([mesg, ...messages]) 
}))
    useEffect(() => {
        const interval = setInterval(() => {
            const newData = {
                name: generate(),
                message: makeText(15),
                image: "https://images.pexels.com/photos/7147473/pexels-photo-7147473.jpeg?auto=compress&cs=tinysrgb&w=600"
            }



        // setMessages((messages)=>{
        //     messages.length>19 && messages.pop();
        //     return ([newData, ...messages]) 
        // })
        addMessage(newData)
            
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="h-96 w-80  my-28 m-auto border-2 border-black px-1 py-2  overflow-scroll flex flex-col-reverse">

            {messages.map((message, index) => <Message key={index} data={message} />)}

        </div>
    )
}

export default LiveChat