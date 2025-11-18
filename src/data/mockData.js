export const flights = [
  { 
    id: 1, 
    from: 'New York', 
    to: 'London', 
    date: '2025-11-24', 
    price: 450, 
    airline: 'SkyWings', 
    time: '10:00 AM', 
    duration: '7h 30m', 
    image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 2, 
    from: 'Tokyo', 
    to: 'Paris', 
    date: '2025-11-25', 
    price: 850, 
    airline: 'SkyWings Lux', 
    time: '08:00 PM', 
    duration: '12h 15m', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 3, 
    from: 'Dubai', 
    to: 'Singapore', 
    date: '2025-11-26', 
    price: 550, 
    airline: 'Emirates', 
    time: '02:00 AM', 
    duration: '8h 00m', 
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 4, 
    from: 'Mumbai', 
    to: 'New York', 
    date: '2025-11-27', 
    price: 1200, 
    airline: 'Air India', 
    time: '05:30 AM', 
    duration: '16h 10m', 
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 5, 
    from: 'Sydney', 
    to: 'Los Angeles', 
    date: '2025-11-28', 
    price: 980, 
    airline: 'Qantas', 
    time: '11:15 AM', 
    duration: '14h 45m', 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 6, 
    from: 'Delhi', 
    to: 'Toronto', 
    date: '2025-11-29', 
    price: 1150, 
    airline: 'Air Canada', 
    time: '01:45 AM', 
    duration: '15h 20m', 
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 7, 
    from: 'London', 
    to: 'Dubai', 
    date: '2025-11-30', 
    price: 620, 
    airline: 'British Airways', 
    time: '09:00 PM', 
    duration: '7h 10m', 
    image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800' 
  },
  { 
    id: 8, 
    from: 'Bangalore', 
    to: 'San Francisco', 
    date: '2025-12-01', 
    price: 1350, 
    airline: 'SkyWings Tech', 
    time: '03:30 AM', 
    duration: '17h 00m', 
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 9, 
    from: 'Paris', 
    to: 'Rome', 
    date: '2025-12-02', 
    price: 250, 
    airline: 'Air France', 
    time: '07:00 AM', 
    duration: '2h 05m', 
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 10, 
    from: 'Istanbul', 
    to: 'Maldives', 
    date: '2025-12-03', 
    price: 780, 
    airline: 'Turkish Airlines', 
    time: '12:00 PM', 
    duration: '8h 15m', 
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' 
  }
];

// Chart Data - 7 days of realistic trends
export const chartData = [
  { name: 'Mon', sales: 4000, passengers: 2400 },
  { name: 'Tue', sales: 3500, passengers: 2100 },
  { name: 'Wed', sales: 5200, passengers: 3800 },
  { name: 'Thu', sales: 4800, passengers: 3200 },
  { name: 'Fri', sales: 6500, passengers: 4500 }, // Weekend spike
  { name: 'Sat', sales: 7200, passengers: 4800 }, // Peak
  { name: 'Sun', sales: 6100, passengers: 4100 },
];