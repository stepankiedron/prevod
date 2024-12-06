
function convertFromCelsius() {
    const celsiusInput = document.getElementById("celsius").value;
    if (celsiusInput === "") {
        document.getElementById("fahrenheit").value = "";
        return;
    }
    const fahrenheit = (parseFloat(celsiusInput) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function convertFromFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheit").value;
    if (fahrenheitInput === "") {
        document.getElementById("celsius").value = "";
        return;
    }
    const celsius = (parseFloat(fahrenheitInput) - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
}