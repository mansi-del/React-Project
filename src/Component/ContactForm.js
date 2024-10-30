import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Style/contactForm.css';

function ContactForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const addContact = async () => {
      try {
         const res = await axios.post("http://localhost:5000/contact", { name, email, message });
         console.log("Form added", res.data);
         alert("Form submitted successfully: " + name);
      } catch (err) {
         console.error(`Error submitting the form: ${err}`);
         alert("Failed to submit form.");
      }
   };

   const formSubmit = (event) => {
     event.preventDefault();
     addContact(); 
   };

   return (
     <div className="form-background">
       <div className="form-overlay"></div>
       <div className="form-container">
         {/* <h2 className="text-center">Contact Us</h2> */}
         <Form onSubmit={formSubmit} className="contact-form p-4 shadow">
           <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
             <Form.Label>Name</Form.Label>
             <Form.Control 
               type="text" 
               placeholder="Enter your name"
               value={name} 
               onChange={(e) => setName(e.target.value)} 
               className="form-input"
             />
           </Form.Group>

           <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control 
               type="email" 
               placeholder="name@example.com"
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               required
               className="form-input"
             />
           </Form.Group>

           <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaMessage">
             <Form.Label>Message</Form.Label>
             <Form.Control 
               as="textarea" 
               rows={3}
               value={message} 
               onChange={(e) => setMessage(e.target.value)} 
               required
               className="form-input"
             />
           </Form.Group>

           <div className="d-grid gap-2">
             <Button variant="primary" type="submit" className="submit-button">
               Submit
             </Button>
           </div>
         </Form>
       </div>
     </div>
   );
}

export default ContactForm;
