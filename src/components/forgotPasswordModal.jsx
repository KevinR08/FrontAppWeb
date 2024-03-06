import Modal from 'react-modal';
import '../styles/modals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import TextInput from './micro-components/textInput';
import { errorToast, successToast } from '../utils/toast.jsx';
import { ToastContainer } from 'react-toastify';

function ForgotPasswordModal ({isOpen, onRequestClose}){

  const handleForgotPassword = () => {
    const email = document.getElementById('forgot-password-email').value;
    fetch('https://api-gateway-pearl.vercel.app/api/user/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    }).then((response) => {
      if (response.status === 200) {
        successToast('Se ha enviado un correo electrónico con instrucciones para cambiar tu contraseña.');
      } else {
        errorToast('Ha ocurrido un error. Por favor, intenta nuevamente.');
      }
    });
  };

  const customStyles = {
    overlay: {
      zIndex: 1000, // Ajusta este valor según sea necesario
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={customStyles}
          contentLabel="Ejemplo Modal"
        >
          <section>
            <div className="modal-content forgot-password">
              <a onClick={onRequestClose} className="modal-close-icon"><FontAwesomeIcon icon={faX} /></a>
              <h2>Recupera tu cuenta</h2>
              <p className="modal-text-description">Ingresa el correo electrónico de tu cuenta personal para recibir un correo de recuperación de la cuenta</p>
              <form className="forgot-form" >
                <TextInput id="forgot-password-email" placeholder="correo electrónico" field_type="text" />
                <button onClick={handleForgotPassword} className="forgot-password-button" type="button">Enviar correo</button>
              </form>
            </div>
          </section>

        </Modal>
      </div>
      <ToastContainer />
    </>
  );
}

export default ForgotPasswordModal;
