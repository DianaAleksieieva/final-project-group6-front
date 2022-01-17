import css from './DescriptionInput.module.css';

function DescriptionInput({descriptionTitle}){
  return(
    <input className={css.input} type="text" placeholder={descriptionTitle} />
  )
}

export default DescriptionInput;