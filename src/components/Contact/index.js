import { useState } from 'react';
import './styles.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

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
        setIsEmailSent(true);
      }
      else {
        throw new Error('Erreur lors de l\'envoi de l\'e-mail');
      }
    }
    catch (error) {
      setErrorMessage('Une erreur est survenue lors de l\'envoi de l\'e-mail. Vérifiez que tous les champs du formulaire');
      setIsErrorMessageVisible(true);
    }
    finally {
      setTimeout(() => {
        setIsEmailSent(false);
        setIsErrorMessageVisible(false);
      }, 10000);
    }
  };

  return (
    <form id="recrutezmoi" className="form" onSubmit={handleSubmit}>
      <p className="form-p">Si vous souhaitez me contacter, faites le via ce formulaire ou via <span className="form-span-linkedin"><a href="https://www.linkedin.com/in/fred-meziere/">LinkedIn</a></span></p>
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
        <button className="form-button" type="submit">Envoyer mon message</button>
      </div>

      {isEmailSent && (
      <p className="form-p">
        <span className="form-span-succes">Votre e-mail a été envoyé avec succès !</span>
      </p>
      )}
      {isErrorMessageVisible && (
      <p className="form-p">
        <span className="form-span-fail">{errorMessage}</span>
      </p>
      )}
    </form>
  );
}
export default Contact;
