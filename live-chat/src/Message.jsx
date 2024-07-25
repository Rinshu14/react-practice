import React from 'react'


// const data = {
//     name: "John",
//     message: "lorem-ipsum-dolor-sit-amet",
//     image: "https://images.pexels.com/photos/7147473/pexels-photo-7147473.jpeg?auto=compress&cs=tinysrgb&w=600"
// }
const Message = ({data}) => {
    return (

        <div className='flex items-center p-1'>
            <img alt="image" src={data.image} className='w-8 h-8 rounded-2xl mx-2 ' />
            <div>
                <p className='leading-none '>{data.name}</p>
                <p className='text-sm leading-none '>{data.message}</p>
            </div>
        </div>

    )
}

export default Message