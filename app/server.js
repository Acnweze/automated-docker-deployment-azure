const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        application: "Azure DevOps Deployment Lab",
        status: "Running",
        environment: "Docker",
        server: "Azure Virtual Machine",
        message: "Successfully deployed using CI/CD!"
    }, null, 2));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Application running on port ${PORT}`);
});
