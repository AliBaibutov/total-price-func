interface Data {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: Data): number | null => {
  const result = isInstallment
    ? (price - (price * discount) / 100) / months
    : null;
  return result;
};

console.log(
  totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
);
