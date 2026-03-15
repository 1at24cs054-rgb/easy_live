# 🏠 EasyLiving - Find Your Perfect Space

[![Full Stack](https://img.shields.io/badge/Full%20Stack-Web%20App-blue.svg)](https://github.com/1at24cs054-rgb/easy_live)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green.svg)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange.svg)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE)

EasyLiving is a comprehensive real estate and property management platform designed to simplify the process of finding your next home. Whether you're looking for a rental apartment, a PG, a lease property, a co-living space, or a home to buy, EasyLiving brings everything together in one beautiful, intuitive interface.

---

## ✨ Features

- **🔍 Smart Search & Filtering**: Find properties by area, type, or price range.
- **🌍 Multi-language Support**: Experience the platform in **English**, **Hindi (हिंदी)**, and **Kannada (ಕನ್ನಡ)**.
- **💎 Premium Design**: Modern, responsive UI with glassmorphism effects and smooth micro-animations.
- **⚡ Fast Performance**: Powered by an Express.js backend for rapid data fetching.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and smartphones.
- **✅ Verified Listings**: Built-in trust with verified property details and secure-ready infrastructure.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Vanilla), Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL (MariaDB) |
| **Environment** | Dotenv (Configurations) |
| **Styling** | Custom CSS Variables, Google Fonts (Poppins) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) server (e.g., via XAMPP or standalone)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/1at24cs054-rgb/easy_live.git
   cd easy_live
   ```

2. **Backend Configuration**:
   - Navigate to the `backend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file from the provided `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your MySQL credentials.

3. **Database Setup**:
   - Import the provided SQL schema to your MySQL server:
     ```bash
     mysql -u your_user -p < backend/setup.sql
     ```

4. **Start the Application**:
   - Run from the root directory:
     ```bash
     npm start
     ```
   - Visit **http://localhost:3000** in your browser.

---

## 📸 Screenshots

### Homepage
*(Add your beautiful homepage screenshot link here)*

### Property Listings
*(Add your property listing screenshot link here)*

---

## 📂 Project Structure

```text
easy_live/
├── backend/            # Express.js Server & API Routes
│   ├── db.js           # Database Connection
│   ├── routes.js       # API Endpoints
│   ├── server.js       # Main Entry Point
│   └── setup.sql       # Database Schema & Seed Data
├── frontend/           # Static Client-side Files
│   ├── index.html      # Main Webpage
│   ├── script.js       # Dynamic Rendering & API Calls
│   └── style.css       # Premium Styling
├── README.md           # Documentation
└── package.json        # Unified Start Scripts
```

---

## 👤 Author

**Dhanush** - [GitHub](https://github.com/1at24cs054-rgb)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Made with ❤️ for a better living experience.*
