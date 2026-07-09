import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const emailJsConfig = {
  serviceId: "service_ctm9whf",
  templateId: "template_yml7zmo",
  publicKey: "ccMLplpXan47fnIJj"
};

/*const emailJsConfig = {
    serviceId: process.env.REACT_APP_SERVICE_ID || "service_6ig1twk",
    templateId: process.env.REACT_APP_TEMPLATE_ID || "template_yml7zmo",
    publicKey: process.env.REACT_APP_PUBLIC_KEY || "ccMLplpXan47fnIJj"
}*/

const formatEmailJsError = (error) => {
    if (!error) return ""

    if (typeof error === "string") {
        return ` ${error}`
    }

    const details = error.text || error.message || error.status || error.error || null
    return details ? ` ${details}` : ""
}

export default function Contactus() {
    const [email,setEmail] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [inquiry,setInquiry] = useState("")
    const [referralCode,setReferralCode] = useState("")
    const [status,setStatus] = useState(null)
    const [isSending,setIsSending] = useState(false)



    const sendEmail = async (e) =>{
        e.preventDefault()
        setStatus(null)

        const { serviceId, templateId, publicKey } = emailJsConfig

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: "error",
                message: "The contact form is missing EmailJS setup. Add the EmailJS service ID, template ID, and public key, then rebuild the app."
            })
            return
        }

        const templateParams ={
            from_Firstname: firstName,
            from_Lastname: lastName,
            message: referralCode ? `Referral code: ${referralCode}\n\n${inquiry}` : inquiry,
            referral_code: referralCode,
            email:email,
        }

        setIsSending(true)

        try {
            await emailjs.send(serviceId,templateId,templateParams,publicKey)
            setLastName('')
            setFirstName('')
            setInquiry('')
            setEmail('')
            setReferralCode('')
            setStatus({
                type: "success",
                message: "Thanks, your message was sent successfully."
            })
        } catch (error) {
            console.error("Email send failed", error)
            const errorDetail = formatEmailJsError(error)
            setStatus({
                type: "error",
                message: `Sorry, your message could not be sent. Please try again or email cyberforgecomps@gmail.com directly.${errorDetail}`
            })
        } finally {
            setIsSending(false)
        }
    }
  return (
    <div className='contactContainer'>
        
         <div className='bottomHalf'>
            

            <div className='contact_left'>
            <div className='contact_logo'>
            <img src="/cyberForge_logo.png" alt="CyberForge logo"/>
               
         </div>
            <h3>Message Us</h3>
            <p>Want to get in touch with us? Fill out this form <br/> with your inquiry and submit to send us a message</p>
            </div>
            <div className='contact_right'>
                <form className='box' onSubmit={sendEmail}>
                    
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
                <div className='contact_middle'>
                    <p>Referral code</p>
                    <input type="text" value={referralCode} onChange={(e)=>setReferralCode(e.target.value)} placeholder="Optional"/>
                </div>
                <div className='contact_bottom'>
                    <p>Request*</p>
                    <textarea type="text" required value={inquiry} onChange={(e)=>setInquiry(e.target.value)} />
                </div>
                {status && (
                    <p className={`formStatus ${status.type}`} role="status">
                        {status.message}
                    </p>
                )}
                <button type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Submit"}
                </button>
            </form>
         </div>
         </div>
         <div style={{width:"100%",height:"2rem",backgroundColor:"#0087ca", position:'absolute', bottom:"0"}}>

         </div>
    </div>
  )
}
