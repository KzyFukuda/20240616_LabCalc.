document.getElementById('molarity-link').addEventListener('click', function() {
    showPage('molarity-page');
    setActiveLink('molarity-link');
});

document.getElementById('mol-conc-link').addEventListener('click', function() {
    showPage('mol-conc-page');
    setActiveLink('mol-conc-link');
});

document.getElementById('mass-conc-link').addEventListener('click', function() {
    showPage('mass-conc-page');
    setActiveLink('mass-conc-link');
});

function showPage(pageId) {
    document.getElementById('molarity-page').style.display = 'none';
    document.getElementById('mol-conc-page').style.display = 'none';
    document.getElementById('mass-conc-page').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function setActiveLink(linkId) {
    const links = document.getElementsByClassName('nav-link');
    for (let link of links) {
        link.classList.remove('active');
    }
    document.getElementById(linkId).classList.add('active');
}

function calculateMolarity() {
    const molecularWeight = parseFloat(document.getElementById('molecular-weight').value);
    const molarSolution = parseFloat(document.getElementById('molar-solution').value);
    const molarSolutionUnit = parseFloat(document.getElementById('molar-solution-unit').value);
    const finalVolume = parseFloat(document.getElementById('final-volume').value);
    const finalVolumeUnit = parseFloat(document.getElementById('final-volume-unit').value);
    const requiredMass = parseFloat(document.getElementById('required-mass').value);
    const requiredMassUnit = parseFloat(document.getElementById('required-mass-unit').value);

    if (!isNaN(requiredMass) && isNaN(molecularWeight)) {
        document.getElementById('molecular-weight').value = (requiredMass / (molarSolution * molarSolutionUnit * finalVolume * finalVolumeUnit * requiredMassUnit)).toFixed(2);
    } else if (!isNaN(requiredMass) && isNaN(molarSolution)) {
        document.getElementById('molar-solution').value = (requiredMass / (molecularWeight * finalVolume * finalVolumeUnit * requiredMassUnit) / molarSolutionUnit).toFixed(2);
    } else if (!isNaN(requiredMass) && isNaN(finalVolume)) {
        document.getElementById('final-volume').value = (requiredMass / (molecularWeight * molarSolution * molarSolutionUnit * requiredMassUnit) / finalVolumeUnit).toFixed(2);
    } else {
        const molarSolutionInM = molarSolution * molarSolutionUnit;
        const finalVolumeInL = finalVolume * finalVolumeUnit;
        document.getElementById('required-mass').value = (molecularWeight * molarSolutionInM * finalVolumeInL / requiredMassUnit).toFixed(2);
    }
}

function calculateSolution() {
    const stockConcentration = parseFloat(document.getElementById('stock-concentration').value);
    const stockConcentrationUnit = parseFloat(document.getElementById('stock-concentration-unit').value);
    const desiredConcentration = parseFloat(document.getElementById('desired-concentration').value);
    const desiredConcentrationUnit = parseFloat(document.getElementById('desired-concentration-unit').value);
    const desiredVolume = parseFloat(document.getElementById('desired-volume').value);
    const desiredVolumeUnit = parseFloat(document.getElementById('desired-volume-unit').value);
    const additionalStock = parseFloat(document.getElementById('additional-stock').value);
    const additionalStockUnit = parseFloat(document.getElementById('additional-stock-unit').value);

    if (isNaN(additionalStock)) {
        document.getElementById('additional-stock').value = (desiredConcentration * desiredConcentrationUnit * desiredVolume * desiredVolumeUnit / stockConcentration / stockConcentrationUnit / additionalStockUnit).toFixed(2);
    } else if (isNaN(stockConcentration)) {
        document.getElementById('stock-concentration').value = (desiredConcentration * desiredConcentrationUnit * desiredVolume * desiredVolumeUnit / additionalStock / additionalStockUnit / stockConcentrationUnit).toFixed(2);
    } else if (isNaN(desiredConcentration)) {
        document.getElementById('desired-concentration').value = (additionalStock * additionalStockUnit * stockConcentration * stockConcentrationUnit / desiredVolume / desiredVolumeUnit / desiredConcentrationUnit).toFixed(2);
    } else if (isNaN(desiredVolume)) {
        document.getElementById('desired-volume').value = (additionalStock * additionalStockUnit * stockConcentration * stockConcentrationUnit / desiredConcentration / desiredConcentrationUnit / desiredVolumeUnit).toFixed(2);
    } else {
        const desiredVolumeInL = desiredVolume * desiredVolumeUnit;
        const additionalStockInL = additionalStock * additionalStockUnit;
        document.getElementById('additional-stock').value = (desiredConcentration * desiredVolumeInL / stockConcentration).toFixed(2);
    }
}

function calculateMassConc() {
    const massStockConcentration = parseFloat(document.getElementById('mass-stock-concentration').value);
    const massStockConcentrationUnit = parseFloat(document.getElementById('mass-stock-concentration-unit').value);
    const massDesiredConcentration = parseFloat(document.getElementById('mass-desired-concentration').value);
    const massDesiredConcentrationUnit = parseFloat(document.getElementById('mass-desired-concentration-unit').value);
    const massDesiredVolume = parseFloat(document.getElementById('mass-desired-volume').value);
    const massDesiredVolumeUnit = parseFloat(document.getElementById('mass-desired-volume-unit').value);
    const massAdditionalStock = parseFloat(document.getElementById('mass-additional-stock').value);
    const massAdditionalStockUnit = parseFloat(document.getElementById('mass-additional-stock-unit').value);

    if (isNaN(massAdditionalStock)) {
        document.getElementById('mass-additional-stock').value = (massDesiredConcentration * massDesiredConcentrationUnit * massDesiredVolume * massDesiredVolumeUnit / massStockConcentration / massStockConcentrationUnit / massAdditionalStockUnit).toFixed(2);
    } else if (isNaN(massStockConcentration)) {
        document.getElementById('mass-stock-concentration').value = (massDesiredConcentration * massDesiredConcentrationUnit * massDesiredVolume * massDesiredVolumeUnit / massAdditionalStock / massAdditionalStockUnit / massStockConcentrationUnit).toFixed(2);
    } else if (isNaN(massDesiredConcentration)) {
        document.getElementById('mass-desired-concentration').value = (massAdditionalStock * massAdditionalStockUnit * massStockConcentration * massStockConcentrationUnit / massDesiredVolume / massDesiredVolumeUnit / massDesiredConcentrationUnit).toFixed(2);
    } else if (isNaN(massDesiredVolume)) {
        document.getElementById('mass-desired-volume').value = (massAdditionalStock * massAdditionalStockUnit * massStockConcentration * massStockConcentrationUnit / massDesiredConcentration / massDesiredConcentrationUnit / massDesiredVolumeUnit).toFixed(2);
    } else {
        const massDesiredVolumeInL = massDesiredVolume * massDesiredVolumeUnit;
        const massAdditionalStockInL = massAdditionalStock * massAdditionalStockUnit;
        document.getElementById('mass-additional-stock').value = (massDesiredConcentration * massDesiredVolumeInL / massStockConcentration).toFixed(2);
    }
}

function updateMolarityUnit() {
    const molarSolution = parseFloat(document.getElementById('molar-solution').value);
    const molarSolutionUnit = parseFloat(document.getElementById('molar-solution-unit').value);
    const newUnit = document.getElementById('molar-solution-unit').value;

    if (!isNaN(molarSolution)) {
        document.getElementById('molar-solution').value = (molarSolution * molarSolutionUnit / newUnit).toFixed(2);
    }
}

function updateVolumeUnit() {
    const finalVolume = parseFloat(document.getElementById('final-volume').value);
    const finalVolumeUnit = parseFloat(document.getElementById('final-volume-unit').value);
    const newUnit = document.getElementById('final-volume-unit').value;

    if (!isNaN(finalVolume)) {
        document.getElementById('final-volume').value = (finalVolume * finalVolumeUnit / newUnit).toFixed(2);
    }

    const additionalStock = parseFloat(document.getElementById('additional-stock').value);
    const additionalStockUnit = parseFloat(document.getElementById('additional-stock-unit').value);
    const newAdditionalUnit = document.getElementById('additional-stock-unit').value;

    if (!isNaN(additionalStock)) {
        document.getElementById('additional-stock').value = (additionalStock * additionalStockUnit / newAdditionalUnit).toFixed(2);
    }

    const massAdditionalStock = parseFloat(document.getElementById('mass-additional-stock').value);
    const massAdditionalStockUnit = parseFloat(document.getElementById('mass-additional-stock-unit').value);
    const newMassAdditionalUnit = document.getElementById('mass-additional-stock-unit').value;

    if (!isNaN(massAdditionalStock)) {
        document.getElementById('mass-additional-stock').value = (massAdditionalStock * massAdditionalStockUnit / newMassAdditionalUnit).toFixed(2);
    }
}

function updateSolutionUnit() {
    const stockConcentration = parseFloat(document.getElementById('stock-concentration').value);
    const stockConcentrationUnit = parseFloat(document.getElementById('stock-concentration-unit').value);
    const newUnit = document.getElementById('stock-concentration-unit').value;

    if (!isNaN(stockConcentration)) {
        document.getElementById('stock-concentration').value = (stockConcentration * stockConcentrationUnit / newUnit).toFixed(2);
    }

    const desiredConcentration = parseFloat(document.getElementById('desired-concentration').value);
    const desiredConcentrationUnit = parseFloat(document.getElementById('desired-concentration-unit').value);
    const newDesiredUnit = document.getElementById('desired-concentration-unit').value;

    if (!isNaN(desiredConcentration)) {
        document.getElementById('desired-concentration').value = (desiredConcentration * desiredConcentrationUnit / newDesiredUnit).toFixed(2);
    }
}

function updateMassConcUnit() {
    const massStockConcentration = parseFloat(document.getElementById('mass-stock-concentration').value);
    const massStockConcentrationUnit = parseFloat(document.getElementById('mass-stock-concentration-unit').value);
    const newUnit = document.getElementById('mass-stock-concentration-unit').value;

    if (!isNaN(massStockConcentration)) {
        document.getElementById('mass-stock-concentration').value = (massStockConcentration * massStockConcentrationUnit / newUnit).toFixed(2);
    }

    const massDesiredConcentration = parseFloat(document.getElementById('mass-desired-concentration').value);
    const massDesiredConcentrationUnit = parseFloat(document.getElementById('mass-desired-concentration-unit').value);
    const newMassDesiredUnit = document.getElementById('mass-desired-concentration-unit').value;

    if (!isNaN(massDesiredConcentration)) {
        document.getElementById('mass-desired-concentration').value = (massDesiredConcentration * massDesiredConcentrationUnit / newMassDesiredUnit).toFixed(2);
    }
}

function updateMassVolumeUnit() {
    const massDesiredVolume = parseFloat(document.getElementById('mass-desired-volume').value);
    const massDesiredVolumeUnit = parseFloat(document.getElementById('mass-desired-volume-unit').value);
    const newMassVolumeUnit = document.getElementById('mass-desired-volume-unit').value;

    if (!isNaN(massDesiredVolume)) {
        document.getElementById('mass-desired-volume').value = (massDesiredVolume * massDesiredVolumeUnit / newMassVolumeUnit).toFixed(2);
    }
}

function updateMassUnit() {
    const requiredMass = parseFloat(document.getElementById('required-mass').value);
    const requiredMassUnit = parseFloat(document.getElementById('required-mass-unit').value);
    const newUnit = document.getElementById('required-mass-unit').value;

    if (!isNaN(requiredMass)) {
        document.getElementById('required-mass').value = (requiredMass * requiredMassUnit / newUnit).toFixed(2);
    }
}

function resetForm() {
    document.getElementById('molecular-weight').value = '';
    document.getElementById('molar-solution').value = '';
    document.getElementById('final-volume').value = '';
    document.getElementById('required-mass').value = '';

    document.getElementById('stock-concentration').value = '';
    document.getElementById('desired-concentration').value = '';
    document.getElementById('desired-volume').value = '';
    document.getElementById('additional-stock').value = '';

    document.getElementById('mass-stock-concentration').value = '';
    document.getElementById('mass-desired-concentration').value = '';
    document.getElementById('mass-desired-volume').value = '';
    document.getElementById('mass-additional-stock').value = '';
}
