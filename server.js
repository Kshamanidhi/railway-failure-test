
const http = require("http");

const shouldFail = process.env.DEMO_FAIL === "true";

// Intentionally fail when DEMO_FAIL is set to "true"
if (shouldFail) {
  console.error("DEMO ERROR: Application startup failed.");
  console.error("Reason: DEMO_FAIL is set to true.");
  console.error("Fix: Set DEMO_FAIL to false or remove it.");
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Railway test app is running successfully!");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`App is running on port ${PORT}`);
  console.log("To test a failure, set DEMO_FAIL=true.");
});
