/* define your functions here */
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    const row = `<tr>
    <td><img src="images/${item.product.filename}"></td>
    <td>${item.product.title}</td>
    <td>${item.quantity}</td>
    <td>${item.product.price}</td>
    <td>${total}</td>
    </tr>`
    document.write(row)
}

function calcSubTotal() {
    let subTotal = 0;
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        subTotal += total;
    }
    return subTotal;
}

function calcTax() {
    return calcSubTotal() * tax_rate;
}

function calcShipping() {
    if (calcSubTotal() > shipping_threshold) {
        return 0;
    }
    return 40;
}

function calcGrandTotal() {
    let grandTotal = 0;
    grandTotal += calcSubTotal();
    grandTotal += calcTax();
    grandTotal += calcShipping();
    return grandTotal;
}




