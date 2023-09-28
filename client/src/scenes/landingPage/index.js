import { useState, createContext } from 'react'
import { Login, Register, PasswordRecovery } from './formsContainer/formsContainer'
import './index.css'

export const authContext = createContext()

const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: ''
}

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState('login')
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  return (
    <div className='landing-page-container'>
      <img className='landing-page-container-bg' src='./assets/landing-page/bg1.jpg' alt=''></img>
      <authContext.Provider value={{ INITIAL_FORM_DATA: INITIAL_FORM_DATA, setActiveForm, formData, setFormData }}>
        <div className='landing-page-content'>
          {activeForm === 'login' && <Login />}
          {activeForm === 'register' && <Register />}
          {activeForm === 'recovery' && <PasswordRecovery />}
        </div>
      </authContext.Provider>
    </div>
  )
}

export default LandingPage
