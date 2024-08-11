import React from 'react'
import Proptypes from "prop-types"
const Button = (props) => {

  return( <>
    <button>{props.name}</button>
 
    </> )
}
// Button.defaultprops = {
// name:"Default"
// }
Button.Proptypes={
  name : Proptypes.string
}
export default Button