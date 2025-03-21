import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h2>Skontaktuj się z  nami </h2>
        <form className='form-group'>

          <div className='form-group'>
          <label form='name'>Imie i nazwisko </label>
          <input typeof='text' id='name' name='name' placeholder='Twoje imie i nazwisko...' required/>
          </div>
          <div className='form-group'>
          <label form='emial'>Adres e-mail</label>
          <input typeof='email' id='email' name='email' placeholder='Podaj swoj adres email...'  required/>
          </div>
          <div className='form-group'>
          <label typeof='message'>Wiadomość</label>
          <textarea id='message' name='message' placeholder='Napisz swoją wiadomość...' required/>
            </div>
          <div className='form-group'>
            <button typeof='submit'>Wyślij</button>
          </div>
        </form>


      </div>

    </>
  )
}

export default App
