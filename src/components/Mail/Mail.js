import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Mail.css';

export default function ContactUs() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_n3e138e', 'template_t1rc88p', e.target, 'SWiWbHRyxn76_vkIN')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito.");
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
      });
      e.target.reset();
  }
  return (
    <form onSubmit={sendEmail}>
      <br></br>
      <input type="text" name="name" className="nombre" placeholder="Nombre"/>
      <br></br>
      <input type="email" name="email" className="email" placeholder="Email"/>
      <br></br>
      <input type="text" name="message" className="mensaje" placeholder="Mensaje"/>
      <br></br>
      <input type="submit" value="Enviar" className="mailbtn"/>
    </form>
  );
};