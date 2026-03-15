const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || ''}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME || 'easyliving'}`,
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.on('error', (err) => {
    console.warn("⚠️  PostgreSQL connection error:", err.message);
});

console.log("🐘 PostgreSQL Client Configured");

module.exports = {
    query: (text, params, callback) => pool.query(text, params, callback)
};
