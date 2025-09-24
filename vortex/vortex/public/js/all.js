document.addEventListener('DOMContentLoaded', () => {
    // EMI Calculator logic for emiplan.html
    const loanSlider = document.getElementById('loan');
    const rateSlider = document.getElementById('rate');
    const yearsSlider = document.getElementById('years');
    const loanValue = document.getElementById('loanValue');
    const rateValue = document.getElementById('rateValue');
    const yearsValue = document.getElementById('yearsValue');
    const resultDiv = document.getElementById('result');
    const emiChart = document.getElementById('emiChart');

    function calculateEMI() {
        if (!loanSlider || !rateSlider || !yearsSlider) return;
        const principal = parseInt(loanSlider.value);
        const annualRate = parseFloat(rateSlider.value);
        const years = parseInt(yearsSlider.value);

        loanValue.textContent = principal;
        rateValue.textContent = annualRate;
        yearsValue.textContent = years;

        const monthlyRate = annualRate / 12 / 100;
        const months = years * 12;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                    (Math.pow(1 + monthlyRate, months) - 1);
        const totalPayment = emi * months;
        const totalInterest = totalPayment - principal;

        resultDiv.innerHTML = `
            <strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}<br>
            <strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}<br>
            <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}
        `;

        // Draw chart
        if (emiChart && emiChart.getContext) {
            const ctx = emiChart.getContext('2d');
            ctx.clearRect(0, 0, emiChart.width, emiChart.height);
            const total = principal + totalInterest;
            const principalAngle = (principal / total) * 2 * Math.PI;
            const interestAngle = (totalInterest / total) * 2 * Math.PI;

            // Principal
            ctx.beginPath();
            ctx.moveTo(150, 150);
            ctx.arc(150, 150, 100, 0, principalAngle);
            ctx.closePath();
            ctx.fillStyle = '#3498db';
            ctx.fill();

            // Interest
            ctx.beginPath();
            ctx.moveTo(150, 150);
            ctx.arc(150, 150, 100, principalAngle, principalAngle + interestAngle);
            ctx.closePath();
            ctx.fillStyle = '#e74c3c';
            ctx.fill();
        }
    }

    if (loanSlider && rateSlider && yearsSlider) {
        loanSlider.addEventListener('input', calculateEMI);
        rateSlider.addEventListener('input', calculateEMI);
        yearsSlider.addEventListener('input', calculateEMI);
        calculateEMI();
    }
});