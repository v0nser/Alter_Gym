import React, {useState} from 'react'
import FooImg from '../../Components/AbvFooImg/FooImg'
import './Contacts.css'


function Contacts() {
  return (
    <>
    <div className='contactsss'>
      <div className="contxt">
        <h6>Contact Us</h6>
      </div>
    </div>
    <div className="contact1">
        <p className='y'><strong><i>You Ask, We Answer.</i></strong></p>
        <p className='l'><strong><i>Let Us Do Some Heavy Lifting!</i></strong></p>
        <font style={{display: "flex", justifyContent: "center", fontSize: "larger", marginTop: "2%"}}>Do You Have a Question or Comment For Us?</font>
      </div>
<div className="FORM">
<form>
  <label>
    <strong>EMAIL</strong>
    <br/>
    <input type="text" name="email" value={"example@gmail.com"} style={{width: "100%"}}/>
  </label>
  <br/>
  <label>
    <strong>MESSAGE</strong>
    <br/>
    <textarea name="postContent" rows={20} cols={40} style={{width: "100%"}} value={"What's on your mind?"}/>
  </label>
  <br/>
  <input type="checkbox" name="myCheckbox" /> <strong>I Agree To The </strong><font style={{color: "#FF5E0E", fontWeight: "bold"}}> Membership Terms & Conditions </font>
    <br/>
    <input type="submit" style={{backgroundColor: "#1f1f1f", color: "#fbfbfb", display: "flex", justifyContent:"center", padding:"10px 20px", width:"100%", border:"none"}} />
</form>
</div>
<FooImg/>
    </>
  )
}

export default Contacts