import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalAuthContext } from '../../../state/state.js'
import fetchData from '../../../utils/fetchData'
import { successToast } from '../../../utils/toastUtils.js'
import { authContext } from '..'
import './formsContainer.css'

export const Login = () => {
  const { INITIAL_FORM_DATA, setActiveForm, formData, setFormData } = useContext(authContext)
  const { setSignedUserData, setToken } = useContext(globalAuthContext)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    fetchData(
      '/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      },
      (resJsonData) => {
        const userData = {
          _id: resJsonData.user._id,
          firstName: resJsonData.user.firstName,
          lastName: resJsonData.user.lastName,
          picturePath: resJsonData.user.picturePath
        }
        setToken(resJsonData.token)
        setSignedUserData(userData)
        setFormData(INITIAL_FORM_DATA)
        navigate('/home')
        successToast(`Welcome ${userData.firstName}.`)
      },
      setToken,
      setSignedUserData
    )
  }

  return (
    <div className='login-form-container'>
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
        <div className='form-element'>
          <input
            tabIndex='1'
            className='login-form-input'
            type='email'
            id='email'
            name='email'
            placeholder='Email'

            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <input
            tabIndex='2'
            className='login-form-input'
            type='password'
            id='password'
            name='password'
            placeholder='Password'

            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>

        <button type='submit' tabIndex='3' className='login-form-submit-button'>
          Log In
        </button>
      </form>
      <p
        tabIndex='4'
        className='landing-page-action-link'
        onClick={(e) => {
          setActiveForm('register')
        }}
      >
        Don't have an account? Sign up here!
      </p>
      <p tabIndex='5' onClick={(e) => setActiveForm('recovery')} className='landing-page-action-link'>
        I forgot my password
      </p>
    </div>
  )
}

export const Register = () => {
  const { setActiveForm, formData, setFormData } = useContext(authContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check passwords are equal
    if (e.target.password.value !== e.target.passwordConfirmation.value) {
      console.log('Passwords are different!')
      return
    }

    fetchData(
      '/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Add to form data the picture path
        body: JSON.stringify(formData)
      },
      () => {
        setActiveForm('login')
        successToast('Registered successfuly. Now you can log in!')
      }
    )
  }

  return (
    <div className='register-form-container'>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='register-form'>
        <div className='form-element'>
          <label htmlFor='firstName' className='register-form-label'>
            First name:
          </label>
          <input
            tabIndex='1'
            className='register-form-input'
            type='text'
            id='firstName'
            name='firstName'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='lastName' className='register-form-label'>
            Last name:
          </label>
          <input
            tabIndex='2'
            className='register-form-input'
            type='text'
            id='lastName'
            name='lastName'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='email' className='register-form-label'>
            Email:
          </label>
          <input
            tabIndex='3'
            className='register-form-input'
            type='email'
            id='email'
            name='email'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='phoneNumber' className='register-form-label'>
            phone Number:
          </label>
          <input
            tabIndex='4'
            className='register-form-input'
            type='phone'
            id='phoneNumber'
            name='phoneNumber'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='password' className='register-form-label'>
            Password:
          </label>
          <input
            tabIndex='5'
            className='register-form-input'
            type='password'
            id='password'
            name='password'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='passwordConfirmation' className='register-form-label'>
            Password Confirmation:
          </label>
          <input
            tabIndex='6'
            className='register-form-input'
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <button type='submit' tabIndex='7' className='register-form-submit-button'>
          Sign up
        </button>
      </form>
      <p
        tabIndex='8'
        className='landing-page-action-link'
        onClick={(e) => {
          setActiveForm('login')
        }}
      >
        Already have an account? Login here!
      </p>
      <p tabIndex='9' onClick={(e) => setActiveForm('recovery')} className='landing-page-action-link'>
        I forgot my password
      </p>
    </div>
  )
}

export const PasswordRecovery = (props) => {
  // TODO: add functionality
  const { setActiveForm } = useContext(authContext)
  const handleSubmit = (event) => {
    console.log('RECOVERY submitted: ' + event.target.email.value)
    event.preventDefault()
  }
  return (
    <div className='recovery-form-container'>
      <h1>Password Recovery</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>Email: </label>
        <input className='recovery-form-input' type='email' id='email' name='email' />
        <br />
        <button className='recovery-form-submit-button' type='submit'>
          {' '}
          Recover{' '}
        </button>
      </form>
      <p
        className='landing-page-action-link'
        onClick={(e) => {
          setActiveForm('login')
        }}
      >
        Already have an account? Log in here!
      </p>
      <p
        className='landing-page-action-link'
        onClick={(e) => {
          setActiveForm('register')
        }}
      >
        Don't have an account? Sign up here!
      </p>
    </div>
  )
}
