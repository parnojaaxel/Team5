
    <table id="data-table">
{/* <!-- Data will be displayed here --> */}
    </table>


        // Public URL of the Google Sheets CSV file
        const csvURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYsIQ08YQD2UsVpJ1JmW_n80bEI2gDwJmeMVHlO3JElegCwxTjBvpCTYaITmQObBURaMVCRVSzbzHa/pub?gid=0&single=true&output=csv';

        // Function to fetch and display data
        function fetchData() {
            fetch(csvURL)
                .then(response => response.text())
                .then(data => {
                    // Parse CSV data into an array of rows
                    const rows = data.split('\n');

                    // Create a table to display the data
                    const table = document.getElementById('data-table');

                    // Add header row
                    const headerRow = document.createElement('tr');
                    rows[0].split(',').forEach(cell => {
                        const th = document.createElement('th');
                        th.textContent = cell;
                        headerRow.appendChild(th);
                    });
                    table.appendChild(headerRow);

                    // Add data rows
                    for (let i = 1; i < rows.length; i++) {
                        const row = document.createElement('tr');
                        rows[i].split(',').forEach(cell => {
                            const td = document.createElement('td');
                            td.textContent = cell;
                            row.appendChild(td);
                        });
                        table.appendChild(row);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // Call the fetchData function when the page loads
        fetchData();
