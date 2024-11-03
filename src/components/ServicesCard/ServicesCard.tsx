import Image from "next/image";
import styles from "./ServicesCard.module.scss";

type Props = {
  imageSrc: string;
  title: string;
  text: string;
  className?: string;
};

const ServicesCard = ({ imageSrc, title, text, className }: Props) => {
  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.card__line}>
          <div className={styles.card__line__bottom}>
            <div className={styles.card__content}>
              <div className={styles.card__imageWrapper}>
                <Image
                  src={`/assets/images/common/${imageSrc}`}
                  alt="House picture"
                  fill
                />
              </div>
              <div className={styles.card__text}>
                <p className={styles.card__text__title}>{title}</p>
                <p className={styles.card__text__desc}>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
