import Quotation from "@/public/assets/images/common/reviews-quotation.svg";
import Image from "next/image";
import styles from "./ReviewCard.module.scss";

type Props = {
  bgImageSrc: string;
  userImageSrc: string;
  text: string;
  reviewerName: string;
  className: string;
};

const ReviewCard = ({
  bgImageSrc,
  userImageSrc,
  text,
  reviewerName,
  className,
}: Props) => {
  return (
    <div className={className}>
      <div className={styles.review__card}>
        <div className={styles.review__card__horizontal}>
          <div className={styles.review__card__vertical}>
            <div className={styles.review__card__section}>
              <div className={styles.review__card__imageWrapper}>
                <Image
                  src={`/assets/images/common/${bgImageSrc}`}
                  alt=""
                  fill
                />
              </div>
              <div className={styles.review__card__userBox}>
                <div className={styles.review__card__userWrapper}>
                  <Image
                    src={`/assets/images/common/${userImageSrc}`}
                    alt=""
                    fill
                  />
                </div>
              </div>

              <div className={styles.review__card__content}>
                <div className={styles.review__card__content__info}>
                  <Quotation
                    className={styles.review__card__content__quotation}
                  />
                  <p className={styles.review__card__content__text}>{text}</p>
                </div>
                <p>{reviewerName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
