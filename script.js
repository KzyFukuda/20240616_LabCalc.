document.getElementById('molarity-link').addEventListener('click', function() {
    document.getElementById('molarity-page').style.display = 'block';
    document.getElementById('solution-page').style.display = 'none';
});

document.getElementById('solution-link').addEventListener('click', function() {
    document.getElementById('molarity-page').style.display = 'none';
    document.getElementById('solution-page').style.display = 'block';
});

function calculateMolarity() {
    const molecularWeight = parseFloat(document.getElementById('molecular-weight').value);
    const molarSolution = parseFloat(document.getElementById('molar-solution').value);
    const finalVolume = parseFloat(document.getElementById('final-volume').value);

    if (isNaN(molecularWeight) || isNaN(molarSolution) || isNaN(finalVolume)) {
        alert('Please fill in all fields');
        return;
    }

    const requiredMass = molecularWeight * molarSolution * (finalVolume / 1000);
    document.getElementById('required-mass').textContent = requiredMass.toFixed(2) + ' g';
}

function calculateSolution() {
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
    document.getElementById('chemical-formula').value = '';
    document.getElementById('molecular-weight').value = '';
    document.getElementById('molar-solution').value = '';
    document.getElementById('final-volume').value = '';
    document.getElementById('required-mass').textContent = '0.00 g';

    document.getElementById('stock-concentration').value = '';
    document.getElementById('desired-concentration').value = '';
    document.getElementById('desired-volume').value = '';
    document.getElementById('additional-stock').textContent = '0.00 ml';
}
