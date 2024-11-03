"use client";
import Button from "@/components/Button/Button";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styles from "./ContactUs.module.scss";
gsap.registerPlugin(useGSAP);
const ContactUs = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  //TODO remove handlers
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPhone(event.target.value);
  };
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  useGSAP(() => {
    gsap.to(`.${styles.contact__content}`, {
      scrollTrigger: { trigger: `.${styles.contact}`, start: "top center" },
      y: 0,
      duration: 2,
      ease: "elastic.out(0.5,0.75)",
    });
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.contact__imageWrapper}>
        <Image
          src="/assets/images/common/contact-bg.png"
          alt="Background"
          fill
        />
      </div>

      <div className={styles.contact__content}>
        <div className={styles.contact__content__form}>
          <SectionText title="Contact Us" text="Let Us Know" />
          <form action="" className={styles.contact__content__form__box}>
            <div
              className={
                inputName.trim() === ""
                  ? styles.contact__content__form__box__item__unfilled
                  : styles.contact__content__form__box__item__filled
              }
            >
              <input
                type="text"
                name="name"
                id="name"
                className={
                  inputName.trim() === ""
                    ? styles.contact__content__form__box__item__input__unfilled
                    : styles.contact__content__form__box__item__input__filled
                }
                onChange={(event) => {
                  setInputName(event.target.value);
                }}
              />
              <label
                className={
                  inputName.trim() === ""
                    ? styles.contact__content__form__box__item__label__unfilled
                    : styles.contact__content__form__box__item__label__filled
                }
              >
                Name
              </label>
            </div>
            <div
              className={
                inputEmail.trim() === ""
                  ? styles.contact__content__form__box__item__unfilled
                  : styles.contact__content__form__box__item__filled
              }
            >
              <input
                type="text"
                name="e-mail"
                id="e-mail"
                className={
                  inputEmail.trim() === ""
                    ? styles.contact__content__form__box__item__input__unfilled
                    : styles.contact__content__form__box__item__input__filled
                }
                onChange={handleEmailChange}
              />
              <label
                className={
                  inputEmail.trim() === ""
                    ? styles.contact__content__form__box__item__label__unfilled
                    : styles.contact__content__form__box__item__label__filled
                }
              >
                E-mail
              </label>
            </div>
            <div
              className={
                inputPhone.trim() === ""
                  ? styles.contact__content__form__box__item__unfilled
                  : styles.contact__content__form__box__item__filled
              }
            >
              <input
                type="text"
                name="phone"
                id="phone"
                className={
                  inputPhone.trim() === ""
                    ? styles.contact__content__form__box__item__input__unfilled
                    : styles.contact__content__form__box__item__input__filled
                }
                onChange={handlePhoneChange}
              />
              <label
                className={
                  inputPhone.trim() === ""
                    ? styles.contact__content__form__box__item__label__unfilled
                    : styles.contact__content__form__box__item__label__filled
                }
              >
                Phone
              </label>
            </div>
            <div
              className={
                inputMessage.trim() === ""
                  ? styles.contact__content__form__box__item__unfilled
                  : styles.contact__content__form__box__item__filled
              }
            >
              <input
                type="text"
                name="message"
                id="message"
                className={
                  inputMessage.trim() === ""
                    ? styles.contact__content__form__box__item__input__unfilled
                    : styles.contact__content__form__box__item__input__filled
                }
                onChange={handleMessageChange}
              />
              <label
                className={
                  inputMessage.trim() === ""
                    ? styles.contact__content__form__box__item__label__unfilled
                    : styles.contact__content__form__box__item__label__filled
                }
              >
                Your message (optional)
              </label>
            </div>
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
