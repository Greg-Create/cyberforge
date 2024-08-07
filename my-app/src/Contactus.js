import React,{useState} from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./contact.css"
import emailjs from "@emailjs/browser"


export default function 
 () {
    const [email,setEmail] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [inquiry,setInquiry] = useState("")



    const sendEmail = (e) =>{
        e.preventDefault()
        const templateParams ={
            from_Firstname: firstName,
            from_Lastname: lastName,
            message: inquiry,
            email:email,
        }

        emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,templateParams,process.env.REACT_APP_PUBLIC_KEY).then((response)=>{
            console.log("Email Send ", response)
            setLastName('')
            setFirstName('')
            setInquiry('')
            setEmail('')
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='contactContainer'>
        
         <div className='bottomHalf'>
            

            <div className='contact_left'>
            <div className='contact_logo'>
            <img src="/cyberForge_logo.png"/>
               
         </div>
            <h3>Message Us</h3>
            <p>Want to get in touch with us? Fill out this form <br/> with your inquiry and submit to send us a message</p>
            </div>
            <div className='contact_right'>
                <div className='box'>
                    
                <div className='contact_top'>
                <div style={{flex:1,marginRight:"0.8rem"}}>
                    <p>First name*</p>
                    <input style={{width:"100%"}}  type="text" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div style={{flex:1}}>
                    <p>Last name*</p>
                    <input style={{width:"100%"}} type="text" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                </div>
                <div className='contact_middle'>
                    <p>Email*</p>
                    <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='contact_bottom'>
                    <p>Request*</p>
                    <textarea type="text" required value={inquiry} onChange={(e)=>setInquiry(e.target.value)} />
                </div>
                <button onClick={(e)=>sendEmail(e)}>Submit</button>
            </div>
         </div>
         </div>
         <div style={{width:"100%",height:"2rem",backgroundColor:"#0087ca", position:'absolute', bottom:"0"}}>

         </div>
    </div>
  )
}
