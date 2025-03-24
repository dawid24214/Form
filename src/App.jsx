import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({

    name: '',
    email:'',
    message: ''

  });
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData(prev =>({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message){
      alert('Wszystkie pola są wymagane!');
      return;
    }
    console.log('Formularz został wysłany:', formData);
    alert('dziekuję za kontakt !');

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };




  return (
    <>
      <div className='form-container'>
        <h2>Skontkatuj się z nami!</h2>

        <form className='form-group' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Imie i nazwisko</label>
            <input
            type='text'
            id='name'
            name='name'
            placeholder='Twoje imie i nazwisko ...'
            value={formData.name}
            onChange={handleChange}
            required
            />
          </div>

          <div className='form-group'>

            <label htmlFor='email'>Podaj email...</label>
            <input
            type='email'
            id='email'
            name='email'
            placeholder='Twój adres email.'
            value={formData.email}
            onChange={handleChange}
            required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Wiadomość</label>
            <textarea
            id='message'
            name='message'
            placeholder='Napisz wiadomość'
            value={formData.message}
            onChange={handleChange}
            required
            />
          </div>

          <div className='form-group'>
            <button type='submit'>Wyślij</button>
          </div>


        </form>



      </div>

    </>
  )
}

export default App
