// Import modul http
const http = require('http');

// Membuat server
// Fungsi untuk menangani permintaan dan respons
const server=http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'texthtml'});
    res.write('<h1> Hello, Selamat Datang di Node js </h1>');
    res.end();
})
//Port yang akan digunakan oleh server
    const port = 3000; 

// Menjalankan server
    server.listen(port, ()=> {
        console.log('node.js http server sedang berjalan di port ${port}')
    });