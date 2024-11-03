import ServicesTextIcon from "@/public/assets/images/common/services-text-icon.svg";
import styles from "./SectionText.module.scss";

type Props = {
  title: string;
  text: string;
  className?: string;
};

const SectionText = ({ title, text, className }: Props) => {
  return (
    <div className={className}>
      <div className={styles.section__text}>
        <p className={styles.section__text__title}>{title}</p>
        <p className={styles.section__text__desc}>
          <ServicesTextIcon className={styles.section__text__desc__icon} />
          {text}
          <ServicesTextIcon className={styles.section__text__desc__icon} />
        </p>
      </div>
    </div>
  );
};

export default SectionText;
