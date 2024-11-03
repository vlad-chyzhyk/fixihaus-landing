import Image from "next/image";
import styles from "./ProcessEndItem.module.scss";

type Props = {
  title: string;
  text: string;
  className?: string;
  circleGsapClass?: string;
  textGsapClass?: string;
};

const ProcessItem = ({
  title,
  text,
  className,
  circleGsapClass,
  textGsapClass,
}: Props) => {
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={circleGsapClass}>
          <Image
            src={`/assets/images/common/process-circle-end.svg`}
            alt="Process item"
            fill
          />
          <p className={styles.wrapper__imageWrapper__number}>4</p>
        </div>
        <div className={textGsapClass}>
          <p className={styles.wrapper__title}>{title}</p>
          <p className={styles.wrapper__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
