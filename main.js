function addRow() {
    const tableBody = document.getElementById('invoiceTableBody');
    const newRow = document.createElement('tr');

    const customerName = document.getElementById('customerName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const restaurant = document.getElementById('restaurant').value;
    const address = document.getElementById('address').value;
    const order = document.getElementById('order').value;
    const price = parseFloat(document.getElementById('price').value);
    const delivery = parseFloat(document.getElementById('delivery').value);
    const totalAmount = document.getElementById('totalAmount');

    newRow.innerHTML = `
        <td>${customerName}</td>
        <td>${mobileNumber}</td>
        <td>${restaurant}</td>
        <td>${address}</td>
        <td>${order}</td>
        <td>${price}</td>
        <td>${delivery}</td>
    `;

    tableBody.appendChild(newRow);

    let currentTotal = parseFloat(totalAmount.innerText) || 0;
    totalAmount.innerText = currentTotal + price + delivery;
    document.getElementById('invoiceForm').reset();
}

function clearTable() {
    const tableBody = document.getElementById('invoiceTableBody');
    tableBody.innerHTML = '';  
    document.getElementById('totalAmount').innerText = '0';  
}

function saveAsImage() {
    const captureElement = document.getElementById('capture');
    html2canvas(captureElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'invoice.png';
        link.click();
    });
}