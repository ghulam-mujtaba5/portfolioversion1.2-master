import React, { useRef } from 'react';
import { css } from "@emotion/css";
import emailjs from '@emailjs/browser';

const ContactFormContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wg317k9', 'template_3kv9gje', form.current, {
        publicKey: 'LFm2JfW5ThGTsvKYr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      className={css`
        position: absolute;
        height: 20.64%;
        top: 75.46%;
        right: 33px;
        bottom: 3.91%;
        width: 654px;
        text-align: left;
        font-size: var(--font-size-5xl);
        color: var(--white);
        font-family: var(--font-inter);
      `}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div
          className={css`
            position: absolute;
            height: 10.09%;
            top: 7.41%;
            right: 48px;
            bottom: 82.49%;
            border-radius: var(--br-8xs);
            background-color: var(--white);
            border: 1px solid var(--white);
            box-sizing: border-box;
            width: 549px;
          `}
        />
        <div
          className={css`
            position: absolute;
            height: 10.09%;
            top: 28.23%;
            right: 48px;
            bottom: 61.67%;
            border-radius: var(--br-8xs);
            background-color: var(--white);
            border: 1px solid var(--white);
            box-sizing: border-box;
            width: 547px;
          `}
        />
        <div
          className={css`
            position: absolute;
            height: 10.09%;
            top: 83.75%;
            right: 48px;
            bottom: 6.15%;
            border-radius: var(--br-8xs);
            background-color: var(--color-steelblue);
            width: 547px;
            mix-blend-mode: screen;
          `}
        />
        <div
          className={css`
            position: absolute;
            height: 34.23%;
            top: 47.16%;
            right: 48px;
            bottom: 18.61%;
            border-radius: var(--br-8xs);
            background-color: var(--white);
            border: 1px solid var(--white);
            box-sizing: border-box;
            width: 547px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 85.49%;
            right: 277px;
            font-size: var(--font-size-13xl);
            line-height: 131.52%;
            font-weight: 600;
          `}
        >
          SEND
        </div>
        <div
          className={css`
            position: absolute;
            top: 2.52%;
            right: 529px;
            line-height: 131.52%;
            font-weight: 600;
          `}
        >
          Name
        </div>
        <div
          className={css`
            position: absolute;
            top: 23.5%;
            right: 532px;
            line-height: 131.52%;
            font-weight: 600;
          `}
        >
          Email
        </div>
        <div
          className={css`
            position: absolute;
            top: 42.11%;
            right: 395px;
            font-size: var(--font-size-lgi);
            line-height: 131.52%;
            font-weight: 600;
            font-family: var(--font-open-sans);
          `}
        >
          Comment or Message
        </div>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 654px;
          height: 634px;
        `}
      />
    </div>
  );
};

export default ContactFormContainer;
