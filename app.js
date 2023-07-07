"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    const result = isInstallment
        ? (price - (price * discount) / 100) / months
        : null;
    return result;
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
