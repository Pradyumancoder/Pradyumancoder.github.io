import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { CiMobile3 } from 'react-icons/ci'


const DropDown = (props) => {
  return (
    <li className = 'dropdownItem'>
    {props.img}
    {/* <img src={props.img} alt='d'></img> */}
    <h4> {props.text} </h4>
  </li>
  )
}

export default DropDown