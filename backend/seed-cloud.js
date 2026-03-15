const { Client } = require('pg');

const connectionString = 'postgresql://dbadmin:Sai9leAqpyD5ehQDIYQrXST4cAsuCo6I@dpg-d6re35haae7s739ukutg-a.oregon-postgres.render.com/easyliving';

const seedData = [
  [1, 'rent', 'Modern 2BHK Apartment', 'Koramangala', 'koramangala', 25000, 'month', 'Beautiful modern apartment with excellent amenities and great location.', 2, 2, true, 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Fully Furnished', '24/7 Security', 'Parking Available', 'Near Metro Station'])],
  [2, 'pg', 'Premium PG for Working Professionals', 'Indiranagar', 'indiranagar', 12000, 'month', 'Comfortable PG accommodation with all modern facilities.', 1, 1, true, 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['AC Rooms', '3 Meals Daily', 'Laundry Service', 'Study Room'])],
  [3, 'lease', 'Spacious 3BHK Villa', 'Jayanagar', 'jayanagar', 45000, 'month', 'Luxurious villa perfect for families with garden and parking.', 3, 3, true, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Private Garden', 'Car Parking', 'Servant Quarter', 'Power Backup'])],
  [4, 'coliving', 'Tech Startup Co-living Space', 'Whitefield', 'whitefield', 18000, 'month', 'Modern co-living space designed for tech professionals.', 1, 1, true, 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['High-Speed Internet', 'Co-working Space', 'Gym Access', 'Events & Networking'])],
  [5, 'buy', 'Luxury 4BHK Penthouse', 'Koramangala', 'koramangala', 8500000, 'total', 'Stunning penthouse with panoramic city views and premium finishes.', 4, 4, false, 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Panoramic Views', 'Private Terrace', 'Premium Finishes', 'Smart Home Features'])],
  [6, 'rent', 'Cozy 1BHK Studio', 'Marathahalli', 'marathahalli', 15000, 'month', 'Perfect studio apartment for singles or couples.', 1, 1, true, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Modern Kitchen', 'Balcony', 'Pet Friendly', 'Close to IT Parks'])],
  [7, 'pg', 'Girls PG - Safe & Secure', 'Jayanagar', 'jayanagar', 10000, 'month', 'Exclusive PG for women with safety features and amenities.', 1, 1, true, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Women Only', 'CCTV Security', 'Homely Food', 'Transportation'])],
  [8, 'lease', 'Commercial Space for Lease', 'Indiranagar', 'indiranagar', 75000, 'month', 'Prime commercial location perfect for retail or office space.', 0, 2, true, 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['High Footfall', 'Parking Space', 'Storage Area', 'Flexible Lease Terms'])],
  [9, 'coliving', 'Artists & Creatives Hub', 'Koramangala', 'koramangala', 22000, 'month', 'Creative co-living space with art studios and collaborative areas.', 1, 1, true, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Art Studios', 'Creative Community', 'Exhibition Space', 'Flexible Timings'])],
  [10, 'buy', 'Plot for Construction', 'Whitefield', 'whitefield', 2500000, 'total', '1200 sq ft plot in prime location ready for construction.', 0, 0, false, 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Clear Title', 'Corner Plot', 'Approved Layout', 'Near Schools'])],
  [11, 'rent', 'Executive 3BHK Apartment', 'Whitefield', 'whitefield', 35000, 'month', 'Executive apartment with luxury amenities and club facilities.', 3, 2, true, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Swimming Pool', 'Gym', 'Club House', 'Concierge Service'])],
  [12, 'pg', 'Budget PG for Students', 'Marathahalli', 'marathahalli', 8000, 'month', 'Affordable accommodation for students with essential amenities.', 1, 1, true, 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Near Colleges', 'Basic Amenities', 'Shared Kitchen', 'Study Hours'])],
  [13, 'lease', 'Duplex House with Garden', 'Jayanagar', 'jayanagar', 55000, 'month', 'Beautiful duplex house with private garden and modern amenities.', 4, 3, true, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Private Garden', 'Duplex Design', 'Modular Kitchen', 'Children\'s Play Area'])],
  [14, 'coliving', 'Digital Nomad Co-living', 'Indiranagar', 'indiranagar', 25000, 'month', 'Designed for digital nomads with high-speed internet and co-working spaces.', 1, 1, true, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['1Gbps Internet', 'Co-working Desk', 'Global Community', 'Flexible Stay'])],
  [15, 'buy', 'Ready to Move 2BHK', 'Marathahalli', 'marathahalli', 4200000, 'total', 'Ready to move apartment in gated community with all amenities.', 2, 2, false, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', JSON.stringify(['Gated Community', 'Ready to Move', 'Children\'s Park', 'Security'])],
];

async function seed() {
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('connected to cloud postgres');

    await client.query('DROP TABLE IF EXISTS properties');
    await client.query(`
      CREATE TABLE properties (
        id SERIAL PRIMARY KEY,
        type VARCHAR(20) NOT NULL,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(100) NOT NULL,
        area VARCHAR(50) NOT NULL,
        price DECIMAL(15, 2) NOT NULL,
        price_type VARCHAR(20) NOT NULL DEFAULT 'month',
        description TEXT,
        beds INT DEFAULT 0,
        baths INT DEFAULT 0,
        wifi BOOLEAN DEFAULT FALSE,
        image VARCHAR(500),
        highlights JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    for (const row of seedData) {
      await client.query(
        'INSERT INTO properties (id, type, title, location, area, price, price_type, description, beds, baths, wifi, image, highlights) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
        row
      );
    }

    console.log('Seeded 15 properties successfully');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await client.end();
  }
}

seed();
