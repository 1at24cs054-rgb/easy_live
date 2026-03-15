const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "easyliving"
});

db.connect(err => {
    if (err) {
        console.warn("⚠️  Database connection failed:", err.message);
        console.warn("   The app will work with hardcoded property data.");
    } else {
        console.log("✅ MySQL Connected");
    }
});

module.exports = db;
