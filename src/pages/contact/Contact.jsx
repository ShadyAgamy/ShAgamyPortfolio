import React from 'react';

import { Link } from 'react-router-dom';

import "./contact.scss";

export default function Contact() {
    return (
        <div className="about_page">
            <h2 className="main_heading">CONTACT ME <span></span><p className="shadow">CONTACT ME</p></h2>
            <div className="contact_sec">
                <div className="contact_sec_panel">
                    <div className="icon"><i className="fas fa-phone-alt"></i></div>
                    <div className="text">
                        <h4>Phone</h4>
                        <a href="tel:+201020285787">+201020285787</a>
                    </div>
                </div>
                <div className="contact_sec_panel">
                    <div className="icon"><i className="far fa-envelope"></i></div>
                    <div className="text">
                        <h4>Email</h4>
                        <a href = "mailto: shadyagmy@yahoo.com">shadyagmy@yahoo.com</a>
                        <a href = "mailto: shadyalonsoo@gmail.com">shadyalonsoo@gmail.com</a>
                    </div>
                </div>
                <div className="contact_sec_panel">
                    <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="text">
                        <h4>Address</h4>
                       <p>6 Horeya Square, Maadi, Egypt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import React, { Component } from 'react';
// import axios from 'axios';

// import "./contact.scss";

// class Contact extends Component {

//     state = {
//         name: '',
//         email: '',
//         subject:'',
//         message: ''
//       }


//     submitEmail =(e) => {
//         e.preventDefault();
//         console.log("submited")
        
//         axios.post("/", {...this.state})
//         .then((response)=>{
//               alert("Message Sent."); 
//               this.resetForm()
//         }).catch(error => {
//             console.error('There was an error!', error);
//         });
//     }

//         resetForm =() =>  {
//                 this.setState({name: '', email: '',subject:'', message: ''})
//         }

//         chnageHandler = (e) => {
//             this.setState({[e.target.id] : e.target.value})
//         }


//     render() {
//         console.log(this.state)
//         return (
//             <div className="about_page">
//                 <h2 className="main_heading">CONTACT ME <span></span><p className="shadow">CONTACT ME</p></h2>
//                 <div className="section-form contact_sec">
//                     <p>Get In Touch</p>
//                     <form id="contact-form" onSubmit={this.submitEmail} 
//                         method="POST">
    
//                         <div className="input_group">
//                             <label htmlFor="name">Enter your name*</label>
//                             <input   id="name" type="text" 
//                                 className="form-control" required value={this.state.name} 
//                                 onChange={this.chnageHandler}/>
//                         </div>
                        
//                         <div className="input_group">
//                             <label htmlFor="email">Enter your email*</label>
//                             <input   id="email" type="email"
//                                 className="form-control" aria-describedby="emailHelp"
//                                 required value={this.state.email} onChange=
//                                 {this.chnageHandler}/>
//                         </div>
    
//                         <div className="input_group">
//                             <label htmlFor="subject">Enter your subject*</label>
//                             <input   id="subject" type="text"
//                                 className="form-control" required value={this.state.subject}
//                                 onChange={this.chnageHandler}/>
//                         </div>
    
//                         <div className="input_group">
//                             <label htmlFor="message">Enter your Message*</label>
//                             <textarea placeholder = "Message"  id="message" 
//                                 className="form-control" rows="1" 
//                                 required value={this.state.message}
//                                 onChange= {this.chnageHandler}/>
//                         </div>
    
//                         <div className="input_group">
//                         <   button type="submit" className="primary-btn submit">Submit</button>
//                         </div>
    
//                     </form>
//                 </div>
                
//             </div>
//         )
//     }
// }

// export default Contact;



