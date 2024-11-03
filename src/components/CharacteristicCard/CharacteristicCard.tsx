type Props = {
  label: string;
  className?: string;
};

const CharacteristicCard = ({ label, className }: Props) => {
  return <p className={className}>{label}</p>;
};

export default CharacteristicCard;
