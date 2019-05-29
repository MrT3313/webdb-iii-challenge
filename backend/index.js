const server = require ('./api/server.js')

const PORT = process.env(PORT, () => {
    console.log(`\n=== WEB_DB_3 API Listening on http://localhost:${PORT} ===\n`)
})