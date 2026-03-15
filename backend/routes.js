const express = require("express");
const router = express.Router();
const db = require("./db");

// Transform DB row to match frontend property format
function formatProperty(row) {
    return {
        id: row.id,
        type: row.type,
        title: row.title,
        location: row.location,
        area: row.area,
        price: Math.round(parseFloat(row.price)),
        priceType: row.priceType,
        description: row.description,
        beds: row.beds,
        baths: row.baths,
        wifi: Boolean(row.wifi),
        image: row.image,
        highlights: typeof row.highlights === 'string' ? JSON.parse(row.highlights) : (row.highlights || [])
    };
}

/* GET all properties */
router.get("/properties", (req, res) => {
    const sql = "SELECT * FROM properties";
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results.map(formatProperty));
        }
    });
});

/* GET properties by type */
router.get("/properties/:type", (req, res) => {
    const type = req.params.type;
    const sql = "SELECT * FROM properties WHERE type = ?";
    db.query(sql, [type], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results.map(formatProperty));
        }
    });
});

module.exports = router;
