function calculate() {
    const stockConcentration = parseFloat(document.getElementById('stock-concentration').value);
    const desiredConcentration = parseFloat(document.getElementById('desired-concentration').value);
    const desiredVolume = parseFloat(document.getElementById('desired-volume').value);

    if (isNaN(stockConcentration) || isNaN(desiredConcentration) || isNaN(desiredVolume)) {
        alert('Please fill in all fields');
        return;
    }

    const additionalStock = (desiredConcentration * desiredVolume) / stockConcentration;

    document.getElementById('additional-stock').textContent = additionalStock.toFixed(2) + ' ml';
}

function resetForm() {
    document.getElementById('stock-concentration').value = '';
    document.getElementById('desired-concentration').value = '';
    document.getElementById('desired-volume').value = '';
    document.getElementById('additional-stock').textContent = '0.00 ml';
}
