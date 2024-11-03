"use client";

import MinusLogo from "@/public/assets/images/common/faq-minus.svg";
import PlusLogo from "@/public/assets/images/common/faq-plus.svg";
import { useState } from "react";
import styles from "./FAQDropdown.module.scss";

type Props = {
  question: string;
  answer: string;
};

const FAQDropdown = ({ question, answer }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    return setActive(!active);
  };
  return (
    <div
      onClick={handleActive}
      className={active ? styles.faq__opened : styles.faq__closed}
    >
      <div
        className={
          active ? styles.faq__opened__content : styles.faq__closed__content
        }
      >
        <div
          className={
            active
              ? styles.faq__opened__content__question
              : styles.faq__closed__content__question
          }
        >
          <div className={styles.faq__closed__content__question__text}>
            {question}
          </div>
          <MinusLogo
            className={
              active
                ? styles.faq__opened__content__logo__rotated
                : styles.faq__opened__content__logo__def
            }
          />
          <PlusLogo
            className={
              active
                ? styles.faq__closed__content__logo__rotated
                : styles.faq__closed__content__logo__def
            }
          />
        </div>
        <div
          className={
            active
              ? styles.faq__opened__content__answer
              : styles.faq__closed__content__answer
          }
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQDropdown;
