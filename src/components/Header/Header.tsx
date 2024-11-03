"use client";
import Logo from "@/public/assets/images/common/Logo.svg";
import LikedIcon from "@/public/assets/images/common/like-icon.svg";
import PhoneIcon from "@/public/assets/images/common/phone-icon.svg";
import UserIcon from "@/public/assets/images/common/user-icon.svg";
import "@/styles/colors.scss";
import Link from "next/link";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Header.module.scss";
const LINKS = [
  {
    title: "Our Projects",
    href: "/#projects",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "About Us",
    href: "/#about-us",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__block}>
        <div>
          <Link href="/">
            <Logo className={styles.header__logo} />
          </Link>
        </div>
        <div className={styles.header__nav}>
          <div className={styles.header__nav_links}>
            <div>
              <Link href="/our-projects">Our Projects</Link>
            </div>
            <Dropdown label="Services" />
            <Dropdown label="About Us" />
          </div>
          <div className={styles.header__icons}>
            <UserIcon className={styles.header__icons__user} />
            <LikedIcon className={styles.header__icons__choose} />
          </div>
          <div className={styles.header__indent}>
            <Button>
              Call Us
              <PhoneIcon
                className={styles.header__indent__phoneIcon}
              ></PhoneIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
