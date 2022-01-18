import React, {Component} from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    console.log("component Modal Will Unmount");
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  closeModal = e => {
    this.props.onClose();
    console.log('logout modal is closed');
  };

  toLogout = e => {
    this.props.toLogout();
    console.log('toLogout');
  };


  render(){
    const textContent = this.props.text;
  return (
    <div className={css.backdrop} onClick={this.handleBackdropClick}>
      <div className={css.modal_content}>
        <button className={css.modalCloseBtn} onClick={this.closeModal} type="button" >
          <svg className={css.modalCloseIcon} width="12" height="12" />
        </button>
        <p className={css.textContent}>{textContent}</p>
        <div className={css.btnContainer}>
          <button className={css.btn}
            type="button"
            onClick={this.toLogout}
          >
            ДА
          </button>
          <button className={css.btn} onClick={this.closeModal} type="button" >
            НЕТ
          </button>
        </div>
      </div>
    </div>
  )
}
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  toLogout: PropTypes.func,
};