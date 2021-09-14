import styles from '../Social.module.scss';
import formStyles from './SendMail.module.scss';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useContextProvider } from '../../../../../components/ContextProvider/Provider';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function SendMail() {
  const { isDarkTheme, setIsOpen, modalIsOpen } = useContextProvider();

  const [isSendingMail, setIsSendingMail] = useState(false);

  const icons = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {},
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: isDarkTheme ? 'rgb(34, 40, 49)' : 'rgb(236, 236, 236)',
      borderColor: isDarkTheme ? 'rgb(158, 77, 13)' : 'rgb(34, 40, 49)',
    },
    overlay: {
      backgroundColor: isDarkTheme
        ? 'rgba(34, 40, 49, 0.75)'
        : 'rgba(236, 236, 236, 0.75)',
    },
  };

  Modal.setAppElement('#root');

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = isDarkTheme
      ? 'rgb(236, 236, 236)'
      : 'rgb(48, 71, 94)';
  }
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const success = () =>
  //   toast.dark('Sent!', {
  //     position: 'top-center',
  //     autoClose: 3000,
  //     hideProgressBar: true,
  //     closeOnClick: false,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: undefined,
  //   });

  // const errorPop = () =>
  //   toast.dark('Error.', {
  //     position: 'top-center',
  //     autoClose: 3000,
  //     hideProgressBar: true,
  //     closeOnClick: false,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: undefined,
  //   });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingMail(true);
    emailjs
      .sendForm(
        'service_d07urrd',
        'mygmailID',
        e.target,
        'user_AL1JEdnHyTfi8RdDP4CaU'
      )
      .then(
        (result) => {
          // success();
          setTimeout(() => {
            setIsOpen(false);
            setIsSendingMail(false);
          }, 2000);
        },
        (error) => {
          // errorPop();
        },
        e.target.reset()
      );
  };

  return (
    <div>
      <motion.div
        className={styles.Mail}
        key={uuidv4()}
        variants={icons}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
            type: 'tween',
          },
        }}
        exit="hidden"
        whileTap={{ scale: 1.2 }}
        whileHover={{ y: -1 }}
        onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.997 299.997">
          <path
            fill={isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(158, 77, 13)'}
            d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
              C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
              c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
              l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
              c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
              c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
              c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
              V196.423z"
          />
        </svg>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Form">
        <h2
          className={formStyles.FormTitle}
          ref={(_subtitle) => (subtitle = _subtitle)}>
          Contact form
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className={formStyles.Form}>
            <div className={formStyles.Inputs}>
              <input type="hidden" name="contact_number" />
              <div
                className={formStyles.Name}
                style={{
                  color: isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(48, 71, 94)',
                }}>
                <div
                  className={
                    isDarkTheme ? formStyles.DarkInputs : formStyles.LightInputs
                  }>
                  <input
                    className={formStyles.NameInput}
                    style={{
                      color: isDarkTheme
                        ? 'rgb(236, 236, 236)'
                        : 'rgb(48, 71, 94)',
                    }}
                    type="text"
                    name="from_name"
                    required
                    placeholder=" "
                  />
                </div>
                <label className={formStyles.NameLabel}>Name</label>
              </div>

              <div
                className={formStyles.Name}
                style={{
                  color: isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(48, 71, 94)',
                }}>
                <div
                  className={
                    isDarkTheme ? formStyles.DarkInputs : formStyles.LightInputs
                  }>
                  <input
                    className={formStyles.NameInput}
                    style={{
                      color: isDarkTheme
                        ? 'rgb(236, 236, 236)'
                        : 'rgb(48, 71, 94)',
                    }}
                    type="email"
                    name="reply_to"
                    required
                    placeholder=" "
                  />
                </div>
                <label className={formStyles.NameLabel}>E-Mail</label>
              </div>

              <div
                className={formStyles.Name}
                style={{
                  color: isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(48, 71, 94)',
                }}>
                <div
                  className={
                    isDarkTheme ? formStyles.DarkInputs : formStyles.LightInputs
                  }>
                  <textarea
                    className={formStyles.NameInput}
                    style={{
                      color: isDarkTheme
                        ? 'rgb(236, 236, 236)'
                        : 'rgb(48, 71, 94)',
                    }}
                    name="message"
                    required
                  />
                </div>
                <label className={formStyles.NameLabel}>Message</label>
              </div>
            </div>
          </div>

          <div className={formStyles.Button}>
            {isSendingMail ? (
              <input
                type="button"
                defaultValue="Thank you, mail has been sent!"
                onClick={closeModal}
                style={{
                  color: isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(48, 71, 94)',
                }}
              />
            ) : (
              <div>
                <input
                  type="button"
                  defaultValue="Close"
                  onClick={closeModal}
                  style={{
                    color: isDarkTheme
                      ? 'rgb(236, 236, 236)'
                      : 'rgb(48, 71, 94)',
                  }}
                />
                <input
                  type="submit"
                  value="Send"
                  style={{
                    color: isDarkTheme
                      ? 'rgb(236, 236, 236)'
                      : 'rgb(48, 71, 94)',
                  }}
                />
              </div>
            )}
          </div>
        </form>
        {/* <ToastContainer
          bodyClassName="toastBody"
          className={formStyles.Toast}
          style={{
            width: '200px',
            fontSize: '14px',
            padding: '30px',
          }}
        /> */}
      </Modal>
    </div>
  );
}
