import './PictureEditForm.css'

const PictureEditForm = ({ onInputChange, onFormSubmit, buttonText }) => {
  return (
    <form className='profile-page-picture-form' onSubmit={onFormSubmit}>
      <input
        className='profile-page-picture-form-input'
        type='file'
        accept='image/*'
        name='userImage'
        id='userImage'
        onChange={(e) => onInputChange(e.target.files[0])}
      />
      <button className='profile-page-picture-form-button' type='submit'>
        {buttonText}
      </button>
    </form>
  )
}

export default PictureEditForm
