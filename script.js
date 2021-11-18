function compute(ev) {
    ev.preventDefault();
    const { principal, rate, years, result } = this.elements;
    if (principal.value <= 0) {
        alert("Enter a positive number");
        // focus input element
        principal.focus();
        return;
    }
    const interest = +principal.value * +years.value * +rate.value / 100;
    const year = new Date().getFullYear() + parseInt(years.value);

    result.innerHTML = `
        <br>
        If you deposit <mark>${principal.value}</mark>,<br>
        at an interest rate of <mark>${rate.value}%</mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${year}</mark>
    `;
}

function updateRate() {
    const rateval = this.value;
    document.getElementById("rate_val").innerText = `${rateval}%`;
}

document.getElementById('sic').addEventListener("submit", compute);
document.getElementById('rate').addEventListener("change", updateRate);
