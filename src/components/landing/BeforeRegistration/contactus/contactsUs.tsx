"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components"




function contactsUs() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7jsn425', 'template_k0wx6en', form.current, {
        publicKey: '9LqPnLBhgMDh2w93K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  // eslint-disable-next-line react-hooks/rules-of-hooks


  const handleEmailClick = () => {
    window.location.href = 'mailto:onpo@onpo.dz';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=36.7670517%2C3.05123&fbclid=IwAR3SjGHi4jE_7KSy6zjMvFDByvMkhVswUtjXoH5_kiFotZx33Fwq7e25AT4'); 
  };


  return (
    <section className="mt-[4rem] ">
      <h1 className="text-center font-semibold text-3xl">Still have a question ?</h1>
      <h4 className="text-center text-gray-500 mt-2">Can’t find the question you are looking for ? contact us</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[5rem] items-center mt-8">
        <StyledContactForm>
            <form ref={form}  onSubmit={sendEmail}>
              
              <input type="text" placeholder='Full name' name="user_name" required/>
              <input type="email" placeholder='E-mail' name="user_email" required />
              <textarea name="message" placeholder='Your message...' required />
              <button
                type="submit"
                value="Send"
                className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-2 shadow-md rounded-xl mt-4 w-full border-gradient"
              >
                Send
              </button>
              
            </form>
          
        </StyledContactForm>
          
        <div >

          <div className="flex items-center mb-6 gap-4 ">
            <svg width={67} height={68} viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={67} height={67} rx={16} fill="url(#paint0_linear_662_8790)" />
              <g clipPath="url(#clip0_662_8790)">
                <path d="M18.5322 34.0001C18.5322 35.9657 18.9194 37.9121 19.6716 39.7281C20.4238 41.5441 21.5264 43.1942 22.9163 44.5841C24.3062 45.974 25.9563 47.0766 27.7723 47.8288C29.5883 48.581 31.5347 48.9682 33.5003 48.9682C35.4659 48.9682 37.4123 48.581 39.2284 47.8288C41.0444 47.0766 42.6944 45.974 44.0843 44.5841C45.4743 43.1942 46.5768 41.5441 47.329 39.7281C48.0812 37.9121 48.4684 35.9657 48.4684 34.0001C48.4684 32.0344 48.0812 30.088 47.329 28.272C46.5768 26.456 45.4743 24.8059 44.0843 23.416C42.6944 22.0261 41.0444 20.9236 39.2284 20.1714C37.4123 19.4191 35.4659 19.032 33.5003 19.032C31.5347 19.032 29.5883 19.4191 27.7723 20.1714C25.9563 20.9236 24.3062 22.0261 22.9163 23.416C21.5264 24.8059 20.4238 26.456 19.6716 28.272C18.9194 30.088 18.5322 32.0344 18.5322 34.0001Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.5 34H39.3209" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.5 25.6843V33.9999" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_662_8790" x1={-38} y1="0.500001" x2="85.1895" y2="1.17936" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9B7D55" />
                  <stop offset="0.66" stopColor="#B5AC49" />
                </linearGradient>
                <clipPath id="clip0_662_8790">
                  <rect width="39.9149" height="39.9149" fill="white" transform="translate(13.543 14.0425)" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="font-bold">Open hours</p>
              <span>From 08:00AM to 04:30PM-Except Friday and Saturday.</span>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-4 ">
            <svg width={67} height={68} viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={67} height={67} rx={16} fill="url(#paint0_linear_662_8800)" />
              <g clipPath="url(#clip0_662_8800)">
                <path d="M28.5107 32.3369C28.5107 33.66 29.0363 34.9289 29.9719 35.8645C30.9075 36.8 32.1764 37.3256 33.4995 37.3256C34.8226 37.3256 36.0915 36.8 37.0271 35.8645C37.9626 34.9289 38.4882 33.66 38.4882 32.3369C38.4882 31.0138 37.9626 29.7449 37.0271 28.8093C36.0915 27.8737 34.8226 27.3481 33.4995 27.3481C32.1764 27.3481 30.9075 27.8737 29.9719 28.8093C29.0363 29.7449 28.5107 31.0138 28.5107 32.3369Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42.9067 41.7441L35.851 48.7999C35.2274 49.4229 34.3819 49.7728 33.5005 49.7728C32.619 49.7728 31.7735 49.4229 31.1499 48.7999L24.0925 41.7441C22.2321 39.8836 20.9651 37.5132 20.4519 34.9326C19.9386 32.352 20.2021 29.6772 21.209 27.2464C22.2159 24.8156 23.9211 22.7379 26.1088 21.2761C28.2965 19.8144 30.8685 19.0342 33.4996 19.0342C36.1308 19.0342 38.7028 19.8144 40.8905 21.2761C43.0782 22.7379 44.7833 24.8156 45.7902 27.2464C46.7972 29.6772 47.0606 32.352 46.5474 34.9326C46.0341 37.5132 44.7672 39.8836 42.9067 41.7441Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_662_8800" x1={-38} y1="0.500001" x2="85.1895" y2="1.17936" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9B7D55" />
                  <stop offset="0.66" stopColor="#B5AC49" />
                </linearGradient>
                <clipPath id="clip0_662_8800">
                  <rect width="39.91" height="39.91" fill="white" transform="translate(13.5449 14.0449)" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="font-bold">Localisation</p>
              <a onClick={handleLocationClick} style={{ cursor: 'pointer' }}>No. 4-6, Mohammed 5 Street-Algeria 16000 Alger, Algeria.</a>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-4">
            <svg width={67} height={68} viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={67} height={67} rx={16} fill="url(#paint0_linear_662_8853)" />
              <g clipPath="url(#clip0_662_8853)">
                <path d="M18.5342 25.6852C18.5342 24.8031 18.8846 23.9572 19.5083 23.3335C20.132 22.7098 20.9779 22.3594 21.86 22.3594H45.1408C46.0229 22.3594 46.8689 22.7098 47.4926 23.3335C48.1163 23.9572 48.4667 24.8031 48.4667 25.6852V42.3144C48.4667 43.1964 48.1163 44.0424 47.4926 44.6661C46.8689 45.2898 46.0229 45.6402 45.1408 45.6402H21.86C20.9779 45.6402 20.132 45.2898 19.5083 44.6661C18.8846 44.0424 18.5342 43.1964 18.5342 42.3144V25.6852Z" stroke="#F5F5F5" strokeWidth="1.72403" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5342 25.6853L33.5004 35.6628L48.4667 25.6853" stroke="#F5F5F5" strokeWidth="1.72403" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_662_8853" x1={-38} y1="0.500001" x2="85.1895" y2="1.17936" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9B7D55" />
                  <stop offset="0.66" stopColor="#B5AC49" />
                </linearGradient>
                <clipPath id="clip0_662_8853">
                  <rect
                    width="39.91"
                    height="39.91"
                    fill="white"
                    transform="translate(13.5449 14.0449)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="font-bold">Email</p>
              <a onClick={handleEmailClick} style={{ cursor: 'pointer' }}>onpo@onpo.dz</a>
            </div>
          </div>
          <div className="flex items-center mb-6 gap-4">
            <svg width={67} height={68} viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={67} height={67} rx={16} fill="url(#paint0_linear_662_8867)" />
              <g clipPath="url(#clip0_662_8867)">
                <path d="M21.86 20.6965H28.5117L31.8375 29.0111L27.6802 31.5055C29.4611 35.1166 32.3837 38.0392 35.9948 39.8201L38.4892 35.6628L46.8038 38.9886V45.6403C46.8038 46.5224 46.4534 47.3683 45.8297 47.992C45.2059 48.6157 44.36 48.9661 43.4779 48.9661C36.9913 48.5719 30.8733 45.8174 26.2781 41.2222C21.6829 36.627 18.9284 30.509 18.5342 24.0224C18.5342 23.1403 18.8846 22.2944 19.5083 21.6706C20.132 21.0469 20.9779 20.6965 21.86 20.6965Z" stroke="#F5F5F5" strokeWidth="1.72403" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_662_8867" x1={-38} y1="0.500001" x2="85.1895" y2="1.17936" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9B7D55" />
                  <stop offset="0.66" stopColor="#B5AC49" />
                </linearGradient>
                <clipPath id="clip0_662_8867">
                  <rect width="39.91" height="39.91" fill="white" transform="translate(13.5449 14.0449)" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="font-bold">Phone number</p>
              <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>023 77 78 63</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )

}
export default contactsUs



const StyledContactForm = styled.div`


  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 45px;
      margin-bottom:15px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid black;
      }
    }

    textarea {
      rows:15;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 250px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid black;
      }
    }

    
  }
`;