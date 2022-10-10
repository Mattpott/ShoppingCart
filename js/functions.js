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




