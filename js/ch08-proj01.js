
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

function outputTableBody() {
   for (let item of cart) {
      let total = calculateTotal(item.quantity, item.product.price);
      outputCartRow(item, total);
   }
}

function outputSubTotal() {
   const row = `<tr class="totals">
   <td colspan="4">Subtotal</td>
   <td>\$${calcSubTotal()}</td>
</tr>`;
   document.write(row);
}

function outputTax() {
   document.write("\$" + calcTax());
}

function outputShipping() {
   document.write("\$" + calcShipping());
}

function outputGrandTotal() {
   document.write("\$" + calcGrandTotal());
}