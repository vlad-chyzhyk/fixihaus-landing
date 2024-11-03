"use client";

import LocationIcon from "@/public/assets/images/common/location.svg";
import SavedDefault from "@/public/assets/images/common/saved-default.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import CharacteristicCard from "../CharacteristicCard/CharacteristicCard";
import CharacteristicCardNumber from "../CharacteristicCardNumber/CharacteristicCardNumber";
import styles from "./ProjectCard.module.scss";
type Props = {
  title: string;
  location: string;
  imageSrc: string;
  className?: string;
};

const ProjectCard = ({ title, location, imageSrc, className }: Props) => {
  const [isSaved, setIsSaved] = useState(true);
  const handleSave = () => {
    return setIsSaved(!isSaved);
  };
  return (
    <div className={className}>
      <div className={styles.project}>
        <div className={styles.project__imageWrapper}>
          <Image
            className={styles.project__image}
            src={`/assets/images/common/${imageSrc}`}
            alt="House picture"
            fill
          ></Image>
        </div>
        <div className={styles.project__contentWrapper}>
          <div className={styles.project__contentWrapper__characteristics}>
            <CharacteristicCard
              label="Modern"
              className={styles.project__char}
            />
            <CharacteristicCard
              label="Quick Move-in"
              className={styles.project__char__blue}
            />
            <CharacteristicCardNumber
              label="+3"
              className={styles.project__charNumber__green}
            />
          </div>
          <div className={styles.project__contentWrapper__bottom}>
            <div className={styles.project__contentWrapper__text}>
              <div className={styles.project__contentWrapper__text__info}>
                <p className={styles.project__contentWrapper__text__title}>
                  {title}
                </p>
                <p className={styles.project__contentWrapper__text__text}>
                  <LocationIcon
                    className={
                      styles.project__contentWrapper__text__locationIcon
                    }
                  />
                  {location}
                </p>
              </div>
              <div className={styles.project__contentWrapper__hiddenInfo}>
                <div
                  className={styles.project__contentWrapper__hiddenInfo__list}
                >
                  <ul>
                    <li>Under: 1m$</li>
                    <li>3 Bedrooms</li>
                    <li>2 Bedrooms</li>
                    <li>200 Sq. Ft.</li>
                  </ul>
                </div>
                <div
                  className={styles.project__contentWrapper__hiddenInfo__menu}
                >
                  <Button>Watch more</Button>
                  <SavedDefault
                    className={
                      isSaved
                        ? styles.project__contentWrapper__hiddenInfo__menu__saved
                        : styles.project__contentWrapper__hiddenInfo__menu__unsaved
                    }
                    onClick={handleSave}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
