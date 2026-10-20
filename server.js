
const http = require("http");

// Intentionally use a required variable without checking
// whether it exists first.
const allowedOrigins = process.env.DEMO_REQUIRED_ORIGINS.split(",");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Application is running.");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Application started successfully.");
  console.log(`Allowed origins configured: ${allowedOrigins.length}`);
});
