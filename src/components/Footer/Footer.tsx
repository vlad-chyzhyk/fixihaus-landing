import Logo from "@/public/assets/images/common/Logo.svg";
import FacebookIcon from "@/public/assets/images/common/footer-facebook.svg";
import InstagramIcon from "@/public/assets/images/common/footer-instagram.svg";
import LocationIcon from "@/public/assets/images/common/footer-location.svg";
import MailIcon from "@/public/assets/images/common/footer-mail.svg";
import PhoneIcon from "@/public/assets/images/common/footer-phone.svg";
import TelegramIcon from "@/public/assets/images/common/footer-telegram.svg";
import TikTokIcon from "@/public/assets/images/common/footer-tik-tok.svg";
import YoutubeIcon from "@/public/assets/images/common/footer-youtube.svg";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__social}>
          <Logo className={styles.footer__logo} />
          <div className={styles.footer__icons}>
            <InstagramIcon className={styles.footer__social__icon} />
            <TikTokIcon className={styles.footer__social__icon} />
            <FacebookIcon className={styles.footer__social__icon} />
            <TelegramIcon className={styles.footer__social__icon} />
            <YoutubeIcon className={styles.footer__social__icon} />
          </div>
          <Button>Follow Us</Button>
        </div>
        <div className={styles.footer__links}>
          <div>
            <p className={styles.footer__content__title}>QUICK LINKS</p>
          </div>
          <div className={styles.footer__links__list}>
            <Link href="/our-services">Our Services</Link>
            <Link href="/our-projects">Our Projects</Link>
            <Link href="/process">Process</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/our-benefits">Our Benefits</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className={styles.footer__links}>
          <div>
            <p className={styles.footer__content__title}>Location</p>
          </div>
          <div className={styles.footer__location}>
            <LocationIcon className={styles.footer__links__icon} />
            <div className={styles.footer__location__list}>
              <div className={styles.footer__location__list__item}>
                <p className={styles.footer__location__list__item__title}>
                  Washington (Main Office)
                </p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>Texas</p>
                <span className={styles.footer__location__list__item__text}>
                  11215 N Jefferson St
                </span>
                <span className={styles.footer__location__list__item__text}>
                  11215 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>Florida</p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>Minnesota</p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>Massachusetts</p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>West Virginia</p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
              <div className={styles.footer__location__list__item}>
                <p>Michigan</p>
                <span className={styles.footer__location__list__item__text}>
                  115 N Jefferson St
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__links}>
          <div>
            <p className={styles.footer__content__title}>Contacts</p>
          </div>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contacts__item}>
              <PhoneIcon className={styles.footer__links__icon} />
              <div className={styles.footer__contacts__item__list}>
                <p>+1 206 222 333</p>
                <span className={styles.footer__contacts__item__list__text}>
                  +1 206 223 333
                </span>
                <span className={styles.footer__contacts__item__list__text}>
                  +1 206 224 333
                </span>
              </div>
            </div>
            <div className={styles.footer__contacts__item__mail}>
              <MailIcon className={styles.footer__links__icon} />
              <p>fixi@house.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__links}>
          <div>
            <p className={styles.footer__content__title}>Work Schedule</p>
          </div>
          <div className={styles.footer__schedule}>
            <div className={styles.footer__schedule__days}>
              <div className={styles.footer__schedule__days__border}>
                Mo - Fr
              </div>
              <div className={styles.footer__schedule__days__border}>
                Sa - Su
              </div>
            </div>
            <div className={styles.footer__schedule__hours}>
              <div>8 am - 8 pm</div>
              <div>10 am - 5 pm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__end}>
        <div>FIXIHAUS © 2024 Copyright</div>
        <div className={styles.footer__end__links}>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
