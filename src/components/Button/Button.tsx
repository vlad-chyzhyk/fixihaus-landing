import classNames from "classnames";
import React, { ReactNode } from "react";
import { Icon } from "react-feather";
import styles from "./Button.module.scss";

export enum ButtonVariant {
  Primary = "primary",
  Stroked = "stroked",
  Section = "section",
}

type Props = {
  variant?: ButtonVariant;
  Icon?: Icon;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  variant = ButtonVariant.Primary,
  Icon,
  children,
  onClick,
}: Props) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.button_stroked]: variant === ButtonVariant.Stroked,
        [styles.button_section]: variant === ButtonVariant.Section,
      })}
      onClick={onClick}
    >
      {children && <span className={styles.button__text}>{children}</span>}

      {Icon && <Icon className={styles.button__icon} />}
    </button>
  );
};

export default Button;
