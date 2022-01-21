import css from './DescriptionInput.module.css';

function DescriptionInput({descriptionTitle}){
  return(
    <input id='description' className={css.input} type="text"
      placeholder={descriptionTitle} required/>
  )
}

export default DescriptionInput;