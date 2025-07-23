  import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ycuzfgk',     // Replace with your EmailJS service ID
      'template_evu39vf',    // Replace with your EmailJS template ID
      form.current,
      '1JjN20SU8ERoXlFCt'      // Replace with your EmailJS public key
    ).then((result) => {
      alert('Message sent successfully!');
      console.log(result.text);
    }, (error) => {
      alert('Failed to send message.');
      console.log(error.text);
    });

    e.target.reset(); // Clear form
  };
  return (
    <div>
      <Navbar/>
      <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="orbitron text-5xl font-bold neon-text mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Get In Touch</h3>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your ideas into reality? Let's collaborate and build something extraordinary together. Whether you need a cutting-edge web application, mobile solution, or innovative tech consultation, I'm here to help bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📧</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-cyan-400">susilsharma7257@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📱</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-cyan-400">+9779811725722 </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">📍</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                 <a href="https://www.google.com/maps/place/Dharan/@26.7951806,87.1937086,12z/data=!3m1!4b1!4m6!3m5!1s0x39ef419fc7271c1d:0x1d1300367590c002!8m2!3d26.806497!4d87.2847086!16zL20vMDRud3cz?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"> <div className="text-cyan-400">Koshi zone ,Dharan </div></a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hologram rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">💼</span>
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                <a href="https://www.linkedin.com/in/sushil-sharma-5389b9321/"  ><div className="text-cyan-400">https://www.linkedin.com/in/sushil-sharma-5389b9321/</div></a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold text-cyan-300 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors"></a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">🐦</a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">📷</a>
                <a href="#" className="w-12 h-12 hologram rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors">💻</a>
              </div>
            </div>
          </div>
          <div className="fade-">
            <form ref={form} onSubmit={sendEmail} className="hologram p-8 rounded-lg space-y-6">
  <h3 className="text-2xl font-bold text-cyan-300 mb-6">Send Message</h3>

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="block text-white font-semibold mb-2">First Name</label>
      <input
        type="text"
        name="first_name"
        className="w-full px-4 py-3 cyber-input rounded-lg"
        placeholder="Sushil Kumar"
        required
      />
    </div>
    <div>
      <label className="block text-white font-semibold mb-2">Last Name</label>
      <input
        type="text"
        name="last_name"
        className="w-full px-4 py-3 cyber-input rounded-lg"
        placeholder="Sharma"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-white font-semibold mb-2">Email</label>
    <input
      type="email"
      name="user_email"
      className="w-full px-4 py-3 cyber-input rounded-lg"
      placeholder="susil@example.com"
      required
    />
  </div>

  <div>
    <label className="block text-white font-semibold mb-2">Subject</label>
    <input
      type="text"
      name="subject"
      className="w-full px-4 py-3 cyber-input rounded-lg"
      placeholder="Project Discussion"
      required
    />
  </div>

  <div>
    <label className="block text-white font-semibold mb-2">Message</label>
    <textarea
      name="message"
      rows={5}
      className="w-full px-4 py-3 cyber-input rounded-lg resize-none"
      placeholder="Tell me about your project..."
      required
    />
  </div>

  <button
    type="submit"
    className="w-full py-4 hologram text-xl font-bold neon-text hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105"
  >
    SEND MESSAGE
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact;
