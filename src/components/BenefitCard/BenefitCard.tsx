import Image from "next/image";
import styles from "./BenefitCard.module.scss";
type Props = {
  title: string;
  text: string;
  imageSrc: string;
  className?: string;
};

const BenefitCard = ({ title, text, imageSrc, className }: Props) => {
  return (
    <div className={className}>
      <div className={styles.benefit}>
        <div className={styles.benefit__horizontal}>
          <div className={styles.benefit__vertical}>
            <div className={styles.benefit__content}>
              <div>
                <div className={styles.benefit__imageWrapper}>
                  <Image
                    src={`/assets/images/common/${imageSrc}`}
                    alt="1"
                    fill
                  />
                </div>
              </div>
              <div className={styles.benefit__info}>
                <p className={styles.benefit__info__title}>{title}</p>
                <p className={styles.benefit__info__text}>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
