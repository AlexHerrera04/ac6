async function fetchCountries() {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
        const data = await response.json();
        
        const tableBody = document.getElementById("countriesTable");
        data.data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${item.name}</td><td>${item.capital}</td>`;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error en obtenir les dades: ", error);
    }
}

fetchCountries();
