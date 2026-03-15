// Property Data
const properties = [
    {
        id: 1,
        type: 'rent',
        title: 'Modern 2BHK Apartment',
        location: 'Koramangala',
        area: 'koramangala',
        price: 25000,
        priceType: 'month',
        description: 'Beautiful modern apartment with excellent amenities and great location.',
        beds: 2,
        baths: 2,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Fully Furnished', '24/7 Security', 'Parking Available', 'Near Metro Station']
    },
    {
        id: 2,
        type: 'pg',
        title: 'Premium PG for Working Professionals',
        location: 'Indiranagar',
        area: 'indiranagar',
        price: 12000,
        priceType: 'month',
        description: 'Comfortable PG accommodation with all modern facilities.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['AC Rooms', '3 Meals Daily', 'Laundry Service', 'Study Room']
    },
    {
        id: 3,
        type: 'lease',
        title: 'Spacious 3BHK Villa',
        location: 'Jayanagar',
        area: 'jayanagar',
        price: 45000,
        priceType: 'month',
        description: 'Luxurious villa perfect for families with garden and parking.',
        beds: 3,
        baths: 3,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Private Garden', 'Car Parking', 'Servant Quarter', 'Power Backup']
    },
    {
        id: 4,
        type: 'coliving',
        title: 'Tech Startup Co-living Space',
        location: 'Whitefield',
        area: 'whitefield',
        price: 18000,
        priceType: 'month',
        description: 'Modern co-living space designed for tech professionals.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['High-Speed Internet', 'Co-working Space', 'Gym Access', 'Events & Networking']
    },
    {
        id: 5,
        type: 'buy',
        title: 'Luxury 4BHK Penthouse',
        location: 'Koramangala',
        area: 'koramangala',
        price: 8500000,
        priceType: 'total',
        description: 'Stunning penthouse with panoramic city views and premium finishes.',
        beds: 4,
        baths: 4,
        wifi: false,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Panoramic Views', 'Private Terrace', 'Premium Finishes', 'Smart Home Features']
    },
    {
        id: 6,
        type: 'rent',
        title: 'Cozy 1BHK Studio',
        location: 'Marathahalli',
        area: 'marathahalli',
        price: 15000,
        priceType: 'month',
        description: 'Perfect studio apartment for singles or couples.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Modern Kitchen', 'Balcony', 'Pet Friendly', 'Close to IT Parks']
    },
    {
        id: 7,
        type: 'pg',
        title: 'Girls PG - Safe & Secure',
        location: 'Jayanagar',
        area: 'jayanagar',
        price: 10000,
        priceType: 'month',
        description: 'Exclusive PG for women with safety features and amenities.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Women Only', 'CCTV Security', 'Homely Food', 'Transportation']
    },
    {
        id: 8,
        type: 'lease',
        title: 'Commercial Space for Lease',
        location: 'Indiranagar',
        area: 'indiranagar',
        price: 75000,
        priceType: 'month',
        description: 'Prime commercial location perfect for retail or office space.',
        beds: 0,
        baths: 2,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['High Footfall', 'Parking Space', 'Storage Area', 'Flexible Lease Terms']
    },
    {
        id: 9,
        type: 'coliving',
        title: 'Artists & Creatives Hub',
        location: 'Koramangala',
        area: 'koramangala',
        price: 22000,
        priceType: 'month',
        description: 'Creative co-living space with art studios and collaborative areas.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Art Studios', 'Creative Community', 'Exhibition Space', 'Flexible Timings']
    },
    {
        id: 10,
        type: 'buy',
        title: 'Plot for Construction',
        location: 'Whitefield',
        area: 'whitefield',
        price: 2500000,
        priceType: 'total',
        description: '1200 sq ft plot in prime location ready for construction.',
        beds: 0,
        baths: 0,
        wifi: false,
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Clear Title', 'Corner Plot', 'Approved Layout', 'Near Schools']
    },
    {
        id: 11,
        type: 'rent',
        title: 'Executive 3BHK Apartment',
        location: 'Whitefield',
        area: 'whitefield',
        price: 35000,
        priceType: 'month',
        description: 'Executive apartment with luxury amenities and club facilities.',
        beds: 3,
        baths: 2,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Swimming Pool', 'Gym', 'Club House', 'Concierge Service']
    },
    {
        id: 12,
        type: 'pg',
        title: 'Budget PG for Students',
        location: 'Marathahalli',
        area: 'marathahalli',
        price: 8000,
        priceType: 'month',
        description: 'Affordable accommodation for students with essential amenities.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Near Colleges', 'Basic Amenities', 'Shared Kitchen', 'Study Hours']
    },
    {
        id: 13,
        type: 'lease',
        title: 'Duplex House with Garden',
        location: 'Jayanagar',
        area: 'jayanagar',
        price: 55000,
        priceType: 'month',
        description: 'Beautiful duplex house with private garden and modern amenities.',
        beds: 4,
        baths: 3,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Private Garden', 'Duplex Design', 'Modular Kitchen', 'Children\'s Play Area']
    },
    {
        id: 14,
        type: 'coliving',
        title: 'Digital Nomad Co-living',
        location: 'Indiranagar',
        area: 'indiranagar',
        price: 25000,
        priceType: 'month',
        description: 'Designed for digital nomads with high-speed internet and co-working spaces.',
        beds: 1,
        baths: 1,
        wifi: true,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['1Gbps Internet', 'Co-working Desk', 'Global Community', 'Flexible Stay']
    },
    {
        id: 15,
        type: 'buy',
        title: 'Ready to Move 2BHK',
        location: 'Marathahalli',
        area: 'marathahalli',
        price: 4200000,
        priceType: 'total',
        description: 'Ready to move apartment in gated community with all amenities.',
        beds: 2,
        baths: 2,
        wifi: false,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        highlights: ['Gated Community', 'Ready to Move', 'Children\'s Park', 'Security']
    }
];

// Translation Dictionary
const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'rent': 'Rent',
        'pg': 'PGs',
        'lease': 'Lease',
        'coliving': 'Co-living',
        'buy': 'Buy',
        'contact': 'Contact',

        // Hero
        'hero-title': 'Find your next EasyLiving space',
        'hero-subtitle': 'Rent, PGs, Lease, Co-living, Buy - all in one place',
        'start-exploring': 'Start Exploring',

        // Category Heroes
        'rent-hero-title': 'Find Your Perfect Rental Home',
        'rent-hero-subtitle': 'Discover comfortable and affordable rental properties in prime locations',
        'pg-hero-title': 'Find Your Perfect PG Accommodation',
        'pg-hero-subtitle': 'Comfortable and affordable PG options for students and working professionals',
        'lease-hero-title': 'Long-term Lease Properties',
        'lease-hero-subtitle': 'Find perfect lease properties for families and long-term commitments',
        'coliving-hero-title': 'Modern Co-living Spaces',
        'coliving-hero-subtitle': 'Experience community living with modern amenities and flexible spaces',
        'buy-hero-title': 'Find Your Dream Home',
        'buy-hero-subtitle': 'Purchase your perfect property with expert guidance and support',

        // Stats
        'properties-available': 'Properties Available',
        'prime-locations': 'Prime Locations',
        'price-range': 'Price Range',
        'min-price-lakhs': 'Min Price (in Lakhs)',
        'max-price-lakhs': 'Max Price (in Lakhs)',

        // Dashboard
        'tile-rent-title': 'Rent Houses',
        'tile-rent-desc': 'Find your perfect rental home with flexible terms',
        'tile-pg-title': 'PGs',
        'tile-pg-desc': 'Student and working professional accommodations',
        'tile-lease-title': 'Lease',
        'tile-lease-desc': 'Long-term leasing options for families',
        'tile-coliving-title': 'Co-living',
        'tile-coliving-desc': 'Modern shared living spaces with amenities',
        'tile-buy-title': 'Buy',
        'tile-buy-desc': 'Purchase your dream home with expert guidance',

        // Filters
        'search-placeholder': 'Search by area, type, or features',
        'area-all': 'All Areas',
        'type-all': 'All Types',
        'type-rent': 'Rent',
        'type-pg': 'PGs',
        'type-lease': 'Lease',
        'type-coliving': 'Co-living',
        'type-buy': 'Buy',
        'min-price': 'Min Price',
        'max-price': 'Max Price',
        'apply-filters': 'Apply Filters',

        // Sections
        'section-rent': 'Rental Properties',
        'section-pg': 'PG Accommodations',
        'section-lease': 'Lease Properties',
        'section-coliving': 'Co-living Spaces',
        'section-buy': 'Properties for Sale',

        // Property Actions
        'view-details': 'View Details',
        'contact-now': 'Contact Now',

        // Trust Elements
        'verified-listings': 'Verified Listings',
        'secure-payments': 'Secure Payments (Coming Soon)',
        'support': '24/7 Support',

        // Footer
        'footer-desc': 'Your trusted partner in finding the perfect living space',
        'privacy-policy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'contact-us': 'Contact Us',
        'email': '📧 contact@easyliving.com',
        'phone': '📞 +91 98765 43210',
        'copyright': '© 2026 EasyLiving. All rights reserved.'
    },
    hi: {
        // Navigation
        'home': 'होम',
        'rent': 'किराया',
        'pg': 'पीजी',
        'lease': 'लीज',
        'coliving': 'को-लिविंग',
        'buy': 'खरीदें',
        'contact': 'संपर्क',

        // Hero
        'hero-title': 'अपनी अगली EasyLiving जगह खोजें',
        'hero-subtitle': 'किराया, पीजी, लीज, को-लिविंग, खरीदें - सब एक जगह',
        'start-exploring': 'खोजना शुरू करें',

        // Category Heroes
        'rent-hero-title': 'अपना आदर्श किरायेदार घर खोजें',
        'rent-hero-subtitle': 'प्रधान स्थानों में आरामदायक और किफायती किराये की संपत्तियां खोजें',
        'pg-hero-title': 'अपना आदर्श पीजी आवास खोजें',
        'pg-hero-subtitle': 'छात्रों और कार्यरत पेशेवरों के लिए आरामदायक और किफायती पीजी विकल्प',
        'lease-hero-title': 'दीर्घकालिक पट्टा संपत्तियां',
        'lease-hero-subtitle': 'परिवारों और दीर्घकालिक प्रतिबद्धताओं के लिए आदर्श पट्टा संपत्तियां खोजें',
        'coliving-hero-title': 'आधुनिक सह-वास स्थान',
        'coliving-hero-subtitle': 'आधुनिक सुविधाओं और लचीली जगहों के साथ सामुदायिक जीवन का अनुभव करें',
        'buy-hero-title': 'अपना सपना घर खोजें',
        'buy-hero-subtitle': 'विशेषज्ञ मार्गदर्शन और सहायता के साथ अपनी आदर्श संपत्ति खरीदें',

        // Stats
        'properties-available': 'उपलब्ध संपत्तियां',
        'prime-locations': 'प्रधान स्थान',
        'price-range': 'मूल्य सीमा',
        'min-price-lakhs': 'न्यूनतम मूल्य (लाख में)',
        'max-price-lakhs': 'अधिकतम मूल्य (लाख में)',

        // Dashboard
        'tile-rent-title': 'घर किराए पर',
        'tile-rent-desc': 'लचीली शर्तों के साथ अपना आदर्श किरायेदार घर खोजें',
        'tile-pg-title': 'पीजी',
        'tile-pg-desc': 'छात्रों और कार्यरत पेशेवरों के लिए आवास',
        'tile-lease-title': 'लीज',
        'tile-lease-desc': 'परिवारों के लिए दीर्घकालिक पट्टा विकल्प',
        'tile-coliving-title': 'को-लिविंग',
        'tile-coliving-desc': 'सुविधाओं के साथ आधुनिक साझा रहने की जगहें',
        'tile-buy-title': 'खरीदें',
        'tile-buy-desc': 'विशेषज्ञ मार्गदर्शन के साथ अपना सपना घर खरीदें',

        // Filters
        'search-placeholder': 'क्षेत्र, प्रकार या सुविधाओं द्वारा खोजें',
        'area-all': 'सभी क्षेत्र',
        'type-all': 'सभी प्रकार',
        'type-rent': 'किराया',
        'type-pg': 'पीजी',
        'type-lease': 'लीज',
        'type-coliving': 'को-लिविंग',
        'type-buy': 'खरीदें',
        'min-price': 'न्यूनतम मूल्य',
        'max-price': 'अधिकतम मूल्य',
        'apply-filters': 'फिल्टर लागू करें',

        // Sections
        'section-rent': 'किराये की संपत्तियां',
        'section-pg': 'पीजी आवास',
        'section-lease': 'लीज संपत्तियां',
        'section-coliving': 'को-लिविंग स्थान',
        'section-buy': 'बिक्री के लिए संपत्तियां',

        // Property Actions
        'view-details': 'विवरण देखें',
        'contact-now': 'अभी संपर्क करें',

        // Trust Elements
        'verified-listings': 'सत्यापित लिस्टिंग',
        'secure-payments': 'सुरक्षित भुगतान (जल्द आ रहा है)',
        'support': '24/7 सहायता',

        // Footer
        'footer-desc': 'सही रहने की जगह खोजने में आपका विश्वसनीय साथी',
        'privacy-policy': 'गोपनीयता नीति',
        'terms': 'सेवा की शर्तें',
        'contact-us': 'हमसे संपर्क करें',
        'email': '📧 contact@easyliving.com',
        'phone': '📞 +91 98765 43210',
        'copyright': '© 2026 EasyLiving. सभी अधिकार सुरक्षित।'
    },
    kn: {
        // Navigation
        'home': 'ಮುಖ್ಯ ಪುಟ',
        'rent': 'ಬಾಡಿಗೆ',
        'pg': 'ಪಿಜಿ',
        'lease': 'ಲೀಸ್',
        'coliving': 'ಸಹ ವಾಸ',
        'buy': 'ಖರೀದಿ',
        'contact': 'ಸಂಪರ್ಕ',

        // Hero
        'hero-title': 'ನಿಮ್ಮ ಮುಂದಿನ EasyLiving ಸ್ಥಳವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'hero-subtitle': 'ಬಾಡಿಗೆ, ಪಿಜಿ, ಲೀಸ್, ಸಹ ವಾಸ, ಖರೀದಿ - ಎಲ್ಲಾ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ',
        'start-exploring': 'ಹುಡುಕಾಟವನ್ನು ಪ್ರಾರಂಭಿಸಿ',

        // Category Heroes
        'rent-hero-title': 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಬಾಡಿಗೆ ಮನೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'rent-hero-subtitle': 'ಪ್ರಧಾನ ಸ್ಥಳಗಳಲ್ಲಿ ಆರಾಮದಾಯಕ ಮತ್ತು ಸಮರ್ಥನೀಯ ಬಾಡಿಗೆ ಸ್ವತ್ತುಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'pg-hero-title': 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಪಿಜಿ ವಸತಿಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'pg-hero-subtitle': 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಕೆಲಸಗಾರ ವೃತ್ತಿಪರರಿಗೆ ಆರಾಮದಾಯಕ ಮತ್ತು ಸಮರ್ಥನೀಯ ಪಿಜಿ ಆಯ್ಕೆಗಳು',
        'lease-hero-title': 'ದೀರ್ಘಾವಧಿಯ ಪಟ್ಟಾ ಸ್ವತ್ತುಗಳು',
        'lease-hero-subtitle': 'ಕುಟುಂಬಗಳು ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ಬದ್ಧತೆಗಳಿಗೆ ಪರಿಪೂರ್ಣ ಪಟ್ಟಾ ಸ್ವತ್ತುಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'coliving-hero-title': 'ಆಧುನಿಕ ಸಹ-ವಾಸ ಸ್ಥಳಗಳು',
        'coliving-hero-subtitle': 'ಆಧುನಿಕ ಸೌಕರ್ಯಗಳು ಮತ್ತು ನಮ್ಯತೆಯ ಸ್ಥಳಗಳೊಂದಿಗೆ ಸಮುದಾಯ ಜೀವನದ ಅನುಭವವನ್ನು ಪಡೆಯಿರಿ',
        'buy-hero-title': 'ನಿಮ್ಮ ಕನಸಿನ ಮನೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'buy-hero-subtitle': 'ತಜ್ಞ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲದೊಂದಿಗೆ ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಸ್ವತ್ತನ್ನು ಖರೀದಿಸಿ',

        // Stats
        'properties-available': 'ಲಭ್ಯವಿರುವ ಸ್ವತ್ತುಗಳು',
        'prime-locations': 'ಪ್ರಧಾನ ಸ್ಥಳಗಳು',
        'price-range': 'ಬೆಲೆ ಶ್ರೇಣಿ',
        'min-price-lakhs': 'ಕನಿಷ್ಠ ಬೆಲೆ (ಲಕ್ಷದಲ್ಲಿ)',
        'max-price-lakhs': 'ಗರಿಷ್ಠ ಬೆಲೆ (ಲಕ್ಷದಲ್ಲಿ)',

        // Dashboard
        'tile-rent-title': 'ಮನೆಗಳನ್ನು ಬಾಡಿಗೆಗೆ',
        'tile-rent-desc': 'ನಮ್ಯತೆಯ ನಿಯಮಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಬಾಡಿಗೆ ಮನೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
        'tile-pg-title': 'ಪಿಜಿ',
        'tile-pg-desc': 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಕೆಲಸಗಾರ ವೃತ್ತಿಪರರಿಗೆ ವಸತಿ',
        'tile-lease-title': 'ಲೀಸ್',
        'tile-lease-desc': 'ಕುಟುಂಬಗಳಿಗೆ ದೀರ್ಘಾವಧಿಯ ಪಟ್ಟಾ ಆಯ್ಕೆಗಳು',
        'tile-coliving-title': 'ಸಹ ವಾಸ',
        'tile-coliving-desc': 'ಸೌಕರ್ಯಗಳೊಂದಿಗೆ ಆಧುನಿಕ ಹಂಚಿದ ವಾಸ ಸ್ಥಳಗಳು',
        'tile-buy-title': 'ಖರೀದಿ',
        'tile-buy-desc': 'ತಜ್ಞ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ನಿಮ್ಮ ಕನಸಿನ ಮನೆಯನ್ನು ಖರೀದಿಸಿ',

        // Filters
        'search-placeholder': 'ಪ್ರದೇಶ, ಪ್ರಕಾರ ಅಥವಾ ಸೌಕರ್ಯಗಳಿಂದ ಹುಡುಕಿ',
        'area-all': 'ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು',
        'type-all': 'ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು',
        'type-rent': 'ಬಾಡಿಗೆ',
        'type-pg': 'ಪಿಜಿ',
        'type-lease': 'ಲೀಸ್',
        'type-coliving': 'ಸಹ ವಾಸ',
        'type-buy': 'ಖರೀದಿ',
        'min-price': 'ಕನಿಷ್ಠ ಬೆಲೆ',
        'max-price': 'ಗರಿಷ್ಠ ಬೆಲೆ',
        'apply-filters': 'ಫಿಲ್ಟರ್ ಅನ್ವಯಿಸಿ',

        // Sections
        'section-rent': 'ಬಾಡಿಗೆ ಸ್ವತ್ತುಗಳು',
        'section-pg': 'ಪಿಜಿ ವಸತಿ',
        'section-lease': 'ಲೀಸ್ ಸ್ವತ್ತುಗಳು',
        'section-coliving': 'ಸಹ ವಾಸ ಸ್ಥಳಗಳು',
        'section-buy': 'ಮಾರಾಟಕ್ಕೆ ಸ್ವತ್ತುಗಳು',

        // Property Actions
        'view-details': 'ವಿವರಗಳನ್ನು ನೋಡಿ',
        'contact-now': 'ಈಗ ಸಂಪರ್ಕಿಸಿ',

        // Trust Elements
        'verified-listings': 'ಪರಿಶೀಲಿಸಿದ ಪಟ್ಟಿಗಳು',
        'secure-payments': 'ಸುರಕ್ಷಿತ ಪಾವತಿಗಳು (ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ)',
        'support': '24/7 ಬೆಂಬಲ',

        // Footer
        'footer-desc': 'ಸರಿಯಾದ ವಾಸ ಸ್ಥಳವನ್ನು ಕಂಡುಹಿಡಿಯುವಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಸಹಭಾಗಿ',
        'privacy-policy': 'ಗೌಪ್ಯತಾ ನೀತಿ',
        'terms': 'ಸೇವಾ ನಿಯಮಗಳು',
        'contact-us': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
        'email': '📧 contact@easyliving.com',
        'phone': '📞 +91 98765 43210',
        'copyright': '© 2026 EasyLiving. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    }
};

// Global Variables
let currentLanguage = 'en';
let filteredProperties = [...properties];
let currentFilters = {
    search: '',
    area: 'all',
    type: 'all',
    minPrice: '',
    maxPrice: ''
};

// DOM Elements
const navbar = document.getElementById('navbar');
const languageButtons = document.querySelectorAll('.lang-btn');
const dashboardTiles = document.querySelectorAll('.dashboard-tile');
const searchInput = document.getElementById('search-input');
const areaFilter = document.getElementById('area-filter');
const typeFilter = document.getElementById('type-filter');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const applyFiltersBtn = document.getElementById('apply-filters');
const modal = document.getElementById('property-modal');
const modalClose = document.querySelector('.modal-close');
const contactBtn = document.querySelector('.modal-cta');

// Initialize DOM elements for category pages
function initializeCategoryDOMElements() {
    // These elements exist on category pages
    const categorySearchInput = document.getElementById('search-input');
    const categoryAreaFilter = document.getElementById('area-filter');
    const categoryMinPriceInput = document.getElementById('min-price');
    const categoryMaxPriceInput = document.getElementById('max-price');
    const categoryApplyFiltersBtn = document.getElementById('apply-filters');

    // Update global references if they exist
    if (categorySearchInput) Object.assign(searchInput, categorySearchInput);
    if (categoryAreaFilter) Object.assign(areaFilter, categoryAreaFilter);
    if (categoryMinPriceInput) Object.assign(minPriceInput, categoryMinPriceInput);
    if (categoryMaxPriceInput) Object.assign(maxPriceInput, categoryMaxPriceInput);
    if (categoryApplyFiltersBtn) Object.assign(applyFiltersBtn, categoryApplyFiltersBtn);
}

// Fetch properties from API (falls back to hardcoded data)
async function fetchPropertiesFromAPI() {
    try {
        const response = await fetch('/api/properties');
        if (!response.ok) throw new Error('API unavailable');
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            // Merge API data into the properties array
            properties.length = 0;
            data.forEach(p => properties.push(p));
            console.log('✅ Loaded', data.length, 'properties from API');
        }
    } catch (err) {
        console.log('ℹ️ Using hardcoded property data (API unavailable)');
    }
    filteredProperties = [...properties];
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    // Try to load from API first
    await fetchPropertiesFromAPI();

    // Check if we're on a category page
    if (typeof currentPageType !== 'undefined') {
        // We're on a category page
        initializeCategoryPage();
    } else {
        // We're on the main page
        renderAllProperties();
        setupEventListeners();
        updateLanguage(currentLanguage);
    }
});

function initializeCategoryPage() {
    // Initialize DOM elements for category pages
    initializeCategoryDOMElements();

    // Filter properties for this category
    filteredProperties = properties.filter(property => property.type === currentPageType);

    // Update property count in hero
    const countElement = document.getElementById(`${currentPageType}-count`);
    if (countElement) {
        countElement.textContent = filteredProperties.length;
    }

    // Render properties
    renderCategoryProperties();

    // Setup event listeners
    setupCategoryEventListeners();

    // Update language
    updateLanguage(currentLanguage);
}

// Setup Event Listeners for Category Pages
function setupCategoryEventListeners() {
    // Language switching
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Filter functionality
    searchInput.addEventListener('input', debounce(applyCategoryFilters, 300));
    areaFilter.addEventListener('change', applyCategoryFilters);
    minPriceInput.addEventListener('input', applyCategoryFilters);
    maxPriceInput.addEventListener('input', applyCategoryFilters);
    applyFiltersBtn.addEventListener('click', applyCategoryFilters);

    // Modal functionality
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    contactBtn.addEventListener('click', () => {
        alert('Our team will contact you soon!');
        closeModal();
    });

    // Sticky navbar
    window.addEventListener('scroll', handleScroll);
}

// Setup Event Listeners for Main Page
function setupEventListeners() {
    // Language switching
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Dashboard tile navigation
    dashboardTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const type = tile.dataset.type;
            scrollToSection(`section-${type}`);
            currentFilters.type = type;
            applyFilters();
        });
    });

    // Navigation menu scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                scrollToSection(section);
            }
            updateActiveNavLink(link);
        });
    });

    // Filter functionality
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    areaFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    minPriceInput.addEventListener('input', applyFilters);
    maxPriceInput.addEventListener('input', applyFilters);
    applyFiltersBtn.addEventListener('click', applyFilters);

    // Modal functionality
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    contactBtn.addEventListener('click', () => {
        alert('Our team will contact you soon!');
        closeModal();
    });

    // Sticky navbar
    window.addEventListener('scroll', handleScroll);
}

// Language Switching
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguage(lang);

    // Update active language button
    languageButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Navigation and Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active navigation based on scroll position
    const sections = ['home', 'section-rent', 'section-pg', 'section-lease', 'section-coliving', 'section-buy', 'contact'];
    let current = 'home';

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section;
            }
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current.replace('section-', '')) {
            link.classList.add('active');
        }
    });
}

// Property Rendering for Category Pages
function renderCategoryProperties() {
    const propertiesGrid = document.getElementById('properties-grid');
    if (!propertiesGrid) return;

    propertiesGrid.innerHTML = '';

    if (filteredProperties.length > 0) {
        filteredProperties.forEach(property => {
            const card = createPropertyCard(property);
            propertiesGrid.appendChild(card);
        });
    } else {
        propertiesGrid.innerHTML = '<p class="no-properties">No properties found matching your criteria.</p>';
    }
}

// Property Rendering for Main Page
function renderAllProperties() {
    const sections = {
        'rent': document.getElementById('rent-properties'),
        'pg': document.getElementById('pg-properties'),
        'lease': document.getElementById('lease-properties'),
        'coliving': document.getElementById('coliving-properties'),
        'buy': document.getElementById('buy-properties')
    };

    // Clear all sections
    Object.values(sections).forEach(section => {
        section.innerHTML = '';
    });

    // Group properties by type
    const groupedProperties = {};
    Object.keys(sections).forEach(type => {
        groupedProperties[type] = filteredProperties.filter(prop => prop.type === type);
    });

    // Render properties in each section
    Object.entries(groupedProperties).forEach(([type, props]) => {
        const section = sections[type];
        if (props.length > 0) {
            props.forEach(property => {
                const card = createPropertyCard(property);
                section.appendChild(card);
            });
        } else {
            section.innerHTML = '<p class="no-properties">No properties found matching your criteria.</p>';
        }
    });
}

function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card fade-in';
    card.setAttribute('data-type', property.type);
    card.innerHTML = `
        <div class="property-image" style="background-image: url('${property.image}')">
            <div class="property-badge">${property.type.toUpperCase()}</div>
        </div>
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">📍 ${property.location}</p>
            <p class="property-description">${property.description}</p>
            <div class="property-details">
                <div class="property-price">
                    ₹${property.price.toLocaleString()}${property.priceType === 'month' ? '/month' : ''}
                </div>
                <div class="property-features">
                    ${property.beds > 0 ? `<span>🛏️ ${property.beds}</span>` : ''}
                    ${property.baths > 0 ? `<span>🛁 ${property.baths}</span>` : ''}
                    ${property.wifi ? '<span>📶 Wi-Fi</span>' : ''}
                </div>
            </div>
            <div class="property-actions">
                <button class="btn-secondary" onclick="openModal(${property.id})" data-translate="view-details">View Details</button>
                <button class="save-btn" onclick="toggleSave(${property.id})">♥ Save</button>
            </div>
        </div>
    `;
    return card;
}

// Filter Functionality for Category Pages
function applyCategoryFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedArea = areaFilter.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    filteredProperties = properties.filter(property => {
        // Only show properties of current page type
        if (property.type !== currentPageType) return false;

        const matchesSearch = property.title.toLowerCase().includes(searchTerm) ||
                            property.location.toLowerCase().includes(searchTerm) ||
                            property.description.toLowerCase().includes(searchTerm);

        const matchesArea = selectedArea === 'all' || property.area === selectedArea;
        const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

        return matchesSearch && matchesArea && matchesPrice;
    });

    renderCategoryProperties();

    // Update property count
    const countElement = document.getElementById(`${currentPageType}-count`);
    if (countElement) {
        countElement.textContent = filteredProperties.length;
    }
}

// Filter Functionality for Main Page
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedArea = areaFilter.value;
    const selectedType = typeFilter.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    filteredProperties = properties.filter(property => {
        const matchesSearch = property.title.toLowerCase().includes(searchTerm) ||
                            property.location.toLowerCase().includes(searchTerm) ||
                            property.description.toLowerCase().includes(searchTerm);

        const matchesArea = selectedArea === 'all' || property.area === selectedArea;
        const matchesType = selectedType === 'all' || property.type === selectedType;
        const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

        return matchesSearch && matchesArea && matchesType && matchesPrice;
    });

    renderAllProperties();

    // Update current filters
    currentFilters = {
        search: searchTerm,
        area: selectedArea,
        type: selectedType,
        minPrice: minPriceInput.value,
        maxPrice: maxPriceInput.value
    };
}

// Modal Functionality
function openModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    // Populate modal
    document.getElementById('modal-badge').textContent = property.type.toUpperCase();
    document.getElementById('modal-title').textContent = property.title;
    document.getElementById('modal-location').textContent = `📍 ${property.location}`;
    document.getElementById('modal-price').textContent = `₹${property.price.toLocaleString()}${property.priceType === 'month' ? '/month' : ''}`;
    document.getElementById('modal-description').textContent = property.description;

    // Set modal image based on individual property image
    const modalPlaceholder = document.querySelector('.modal-placeholder');
    if (modalPlaceholder) {
        modalPlaceholder.style.backgroundImage = `url('${property.image}')`;
        modalPlaceholder.style.backgroundSize = 'cover';
        modalPlaceholder.style.backgroundPosition = 'center';
        modalPlaceholder.style.backgroundRepeat = 'no-repeat';
    }

    // Render highlights
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = property.highlights.map(highlight =>
        `<div class="highlight-item">${highlight}</div>`
    ).join('');

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function getPropertyImage(type) {
    // Since each property now has its own image, we can use type-based fallback
    const fallbackImages = {
        rent: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
        pg: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
        lease: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
        coliving: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')",
        buy: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"
    };
    return fallbackImages[type] || fallbackImages.rent;
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function toggleSave(propertyId) {
    // Simple save functionality - in a real app, this would sync with backend
    const button = event.target;
    const isSaved = button.classList.contains('saved');

    if (isSaved) {
        button.classList.remove('saved');
        button.textContent = '♥ Save';
    } else {
        button.classList.add('saved');
        button.textContent = '♥ Saved';
        // Temporary feedback
        setTimeout(() => {
            button.textContent = '♥ Save';
        }, 1000);
    }
}

// Add some CSS for saved state
const style = document.createElement('style');
style.textContent = `
    .save-btn.saved {
        border-color: #ff4757;
        color: #ff4757;
        background: rgba(255, 71, 87, 0.1);
    }
    .no-properties {
        text-align: center;
        color: var(--text-secondary);
        font-style: italic;
        padding: 40px;
        grid-column: 1 / -1;
    }
`;
document.head.appendChild(style);