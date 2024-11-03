"use client";
import Button, { ButtonVariant } from "@/components/Button/Button";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Reviews.module.scss";

gsap.registerPlugin(useGSAP);

const Reviews = () => {
  useGSAP(() => {
    gsap.to(`.${styles.review__title}`, {
      scrollTrigger: {
        trigger: `.${styles.review}`,
        start: "20% center",
      },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.review__content__cards}`, {
      scrollTrigger: {
        trigger: `.${styles.review}`,
        start: "20% center",
      },
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.review__card}`, {
      scrollTrigger: {
        trigger: `.${styles.review}`,
        start: "20% center",
      },
      scale: 1,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.review__content__btn}`, {
      scrollTrigger: {
        trigger: `.${styles.review}`,
        start: "20% center",
      },
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
  }, []);
  return (
    <div className={styles.review}>
      <SectionText
        title="Reviews"
        text="Make Your Story"
        className={styles.review__title}
      />
      <div className={styles.review__content}>
        <div className={styles.review__content__cards}>
          <ReviewCard
            bgImageSrc="review-bg-1.png"
            userImageSrc="review-user-1.png"
            text="Fixihaus dedication to using top-notch materials and attention to detail made the construction phase a breeze. Now, I'm living in a house built to last. Thank you!"
            reviewerName="Johnny Depp"
            className={styles.review__card}
          />
          <ReviewCard
            bgImageSrc="review-bg-2.png"
            userImageSrc="review-user-2.png"
            text="Thanks to Fixihaus, my dream home is a reality! Their attention to detail and commitment to my vision exceeded expectations. Highly recommend!"
            reviewerName="Dwayne Johnson"
            className={styles.review__card}
          />
          <ReviewCard
            bgImageSrc="review-bg-3.png"
            userImageSrc="review-user-3.png"
            text="Thanks to Fixihaus exceptional design and planning services, I have a home that feels tailor-made for me. Fantastic team, highly recommended!"
            reviewerName="Leonardo DiCaprio"
            className={styles.review__card}
          />
        </div>
        <div className={styles.review__content__btn}>
          <Button variant={ButtonVariant.Section}>All Reviews</Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
