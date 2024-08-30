const sql = require("msnodesqlv8");
const http = require('http');
const connectionString = "server=(localdb)\\Mock;Database=FullTest;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.url,"\n", req.method)

    res.setHeader('Content-Type', 'text/html')

            let tableRows = data.map(row => `
                <tr>
                    <td>${row.Id}</td>
                    <td>${row.FirstName}</td>
                    <td>${row.LastName}</td>
                </tr>
            `).join('');

            let html = `
            <html>
            <body>
              <table border="1">
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                </tr>
                ${tableRows}
              </table>
            </body>
            </html>
            `;

    res.write(html)
    res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on port 3000')
})



const query = "SELECT * FROM [User]";  // Use the correct table name

let data = "";

const sqlShowRows = sql.query(connectionString, query, (err, rows) => {
    if (err) {
        console.error("Query failed:", err);
    } else {
        console.log("Query done!");
        data = rows
    }
});

sqlShowRows;
