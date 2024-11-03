type Props = {
  label: string;
  className: string;
};

const CharacteristicCardNumber = ({ label, className }: Props) => {
  return <p className={className}>{label}</p>;
};

export default CharacteristicCardNumber;
