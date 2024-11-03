import ArrowDropdown from "@/public/assets/images/common/arrow-down.svg";
import Link from "next/link";
import styles from "./Dropdown.module.scss";
type Props = {
  label: string;
};

const Dropdown = ({ label }: Props) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown__btn}>
        {label}
        <ArrowDropdown className={styles.dropdown__arrow} />
      </button>
      <div className={styles.dropdown__content}>
        <Link href="/">Test 1</Link>
        <Link href="/">Test 2</Link>
        <Link href="/">Test 3</Link>
      </div>
    </div>
  );
};

export default Dropdown;
