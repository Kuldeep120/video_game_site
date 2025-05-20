import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
interface Props {
    onClick: (event: Event)=> void
}
const Like = ({onClick}: Props) => {
    
    const [isLiked, setIsLiked] = useState(false)
    const toggle = (event: Event) => {
        setIsLiked(!isLiked);
        onClick(event);
    }
    if (isLiked) return (<div><AiFillHeart color="red" size={20} onClick={toggle}/></div>)
    return (
    <div><AiOutlineHeart color='red' size={20} onClick={toggle} /></div>
  )
}

export default Like