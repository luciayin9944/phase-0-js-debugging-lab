function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    //debugger

    //for (let i = 1; i < quantity; i++) { //error
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;