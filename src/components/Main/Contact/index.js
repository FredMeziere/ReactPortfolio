import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xyyaqvrk', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Si vous souhaitez nous contacter remplissez le formulaire de contact ci-dessous, et nous répondrons au plus vite</p>
      <div>
        <label htmlFor="name">Votre nom</label>
        <input type="text" id="name" placeholder="Votre nom / prénom ici" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Votre e-mail</label>
        <input type="email" id="email" placeholder="Votre adresse email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="subject">Motif de votre contact</label>
        <input type="text" id="subject" placeholder="Sujet de votre message" value={subject} onChange={(event) => setSubject(event.target.value)} />
      </div>
      <div>
        <label htmlFor="message">Votre message</label>
        <textarea id="message" placeholder="Votre message" value={message} onChange={(event) => setMessage(event.target.value)} />
      </div>
      <div>
        <button type="submit">Envoyer mon message</button>
      </div>
    </form>
  );
}

export default Contact;
