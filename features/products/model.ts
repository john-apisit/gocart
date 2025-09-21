export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  size: string[];
  color: string[];
  image: string[];
  rating: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "Soft cotton crew neck t-shirt for everyday wear.",
    price: 15.99,
    category: "Apparel",
    size: ["S", "M", "L", "XL"],
    color: ["White", "Black", "Gray"],
    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Denim jeans with a slim cut for a modern look.",
    price: 49.99,
    category: "Apparel",
    size: ["28", "30", "32", "34", "36"],
    color: ["Blue", "Black"],
    image: [
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2xpbSUyMEZpdCUyMEplYW5zfGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1711397029747-af93289fe4af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2xpbSUyMEZpdCUyMEplYW5zfGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2xpbSUyMEZpdCUyMEplYW5zfGVufDB8fDB8fHwy",
    ],
    rating: 4.5,
  },
  {
    id: "3",
    name: "Running Sneakers",
    description: "Lightweight sneakers designed for running and workouts.",
    price: 79.99,
    category: "Footwear",
    size: ["7", "8", "9", "10", "11", "12"],
    color: ["White", "Black", "Red"],

    image: [
      "https://images.unsplash.com/photo-1709258228137-19a8c193be39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UnVubmluZyUyMFNuZWFrZXJzfGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1525401919108-97462bd24fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UnVubmluZyUyMFNuZWFrZXJzfGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVubmluZyUyMFNuZWFrZXJzfGVufDB8fDB8fHwy",
    ],
    rating: 4.5,
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "Slim leather wallet with multiple compartments.",
    price: 39.99,
    category: "Accessories",
    size: [],
    color: ["Brown", "Black"],

    image: [
      "https://images.unsplash.com/photo-1620109176813-e91290f6c795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1612023395494-1c4050b68647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1512414947060-048d53abb081?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "5",
    name: "Bluetooth Headphones",
    description: "Wireless over-ear headphones with noise cancellation.",
    price: 129.99,
    category: "Electronics",
    size: [],
    color: ["Black", "Silver"],

    image: [
      "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmx1ZXRvb3RoJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1631281637573-14de1a1968fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmx1ZXRvb3RoJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8Mg%3D%3D",
    ],
    rating: 1,
  },
  {
    id: "6",
    name: "Smartwatch Series 5",
    description: "Feature-rich smartwatch with fitness tracking.",
    price: 19900.99,
    category: "Electronics",
    size: [],
    color: ["Black", "Silver", "Rose Gold"],

    image: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnR3YXRjaCUyMFNlcmllcyUyMDV8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnR3YXRjaCUyMFNlcmllcyUyMDV8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnR3YXRjaCUyMFNlcmllcyUyMDV8ZW58MHx8MHx8fDI%3D",
    ],
    rating: 2,
  },
  {
    id: "7",
    name: "Yoga Mat",
    description: "Non-slip yoga mat for fitness and meditation.",
    price: 25.99,
    category: "Fitness",
    size: ["Standard"],
    color: ["Blue", "Purple", "Green"],

    image: [
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WW9nYSUyME1hdHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1621886178958-be42369fc9e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8WW9nYSUyME1hdHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1718862403436-616232ec6005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8WW9nYSUyME1hdHxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    rating: 3,
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    description: "Reusable insulated water bottle, keeps drinks hot or cold.",
    price: 19.99,
    category: "Home & Kitchen",
    size: ["500ml", "1L"],
    color: ["Silver", "Black", "Blue"],

    image: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RhaW5sZXNzJTIwU3RlZWwlMjBXYXRlciUyMEJvdHRsZXxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1544003484-3cd181d17917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RhaW5sZXNzJTIwU3RlZWwlMjBXYXRlciUyMEJvdHRsZXxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1605714312496-01e90cb509cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RhaW5sZXNzJTIwU3RlZWwlMjBXYXRlciUyMEJvdHRsZXxlbnwwfHwwfHx8Mg%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "9",
    name: "Gaming Keyboard",
    description: "Mechanical keyboard with RGB lighting.",
    price: 89.99,
    category: "Electronics",
    size: [],
    color: ["Black"],

    image: [
      "https://images.unsplash.com/photo-1626155399627-86488538895d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1637243218672-d338945efdf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDI%3D",
    ],
    rating: 4.5,
  },
  {
    id: "10",
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support.",
    price: 149.99,
    category: "Furniture",
    size: [],
    color: ["Black", "Gray"],

    image: [
      "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDI%3D",
    ],
    rating: 4.5,
  },
  {
    id: "11",
    name: "Cotton Bedsheet Set",
    description: "Soft and breathable 4-piece bedsheet set.",
    price: 59.99,
    category: "Home & Living",
    size: ["Queen", "King"],
    color: ["White", "Beige", "Gray"],

    image: [
      "https://images.unsplash.com/photo-1663247135608-594dd5e69b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q290dG9uJTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1660500875873-bb96d7ee44cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q290dG9uJTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1582586131113-f9f71cda5265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q290dG9uJTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDI%3D",
    ],
    rating: 4.5,
  },
  {
    id: "12",
    name: "Non-Stick Frying Pan",
    description: "Durable non-stick frying pan for everyday cooking.",
    price: 29.99,
    category: "Home & Kitchen",
    size: ["10 inch", "12 inch"],
    color: ["Black"],

    image: [
      "https://images.unsplash.com/photo-1653806347022-d40d152ca3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Tm9uJTIwU3RpY2slMjBGcnlpbmclMjBQYW58ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1581622558638-818128465982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Tm9uJTIwU3RpY2slMjBGcnlpbmclMjBQYW58ZW58MHx8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1608019527603-faa25edca921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm9uJTIwU3RpY2slMjBGcnlpbmclMjBQYW58ZW58MHx8MHx8fDI%3D",
    ],
    rating: 4.5,
  },
  {
    id: "13",
    name: "Electric Toothbrush",
    description: "Rechargeable toothbrush with multiple cleaning modes.",
    price: 59.99,
    category: "Personal Care",
    size: [],
    color: ["White", "Blue"],

    image: [
      "https://images.unsplash.com/photo-1612181819081-950d35f4d826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1641130331708-dd0cc94ae8e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHwy",
      "https://images.unsplash.com/photo-1695073623172-83ccd32fada9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHwy",
      "",
      "",
      "",
    ],
    rating: 4.5,
  },
  {
    id: "14",
    name: "Hair Dryer",
    description: "Compact and powerful hair dryer with ionic technology.",
    price: 45.99,
    category: "Personal Care",
    size: [],
    color: ["Black", "Pink"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "15",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    price: 24.99,
    category: "Electronics",
    size: [],
    color: ["Black", "Gray"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "16",
    name: "Travel Backpack",
    description: "Spacious waterproof backpack for travel and work.",
    price: 69.99,
    category: "Accessories",
    size: [],
    color: ["Black", "Blue", "Green"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "17",
    name: "Sunglasses",
    description: "UV400 polarized sunglasses for outdoor activities.",
    price: 29.99,
    category: "Accessories",
    size: [],
    color: ["Black", "Brown"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "18",
    name: "Digital Camera",
    description: "Compact digital camera with 20MP lens.",
    price: 249.99,
    category: "Electronics",
    size: [],
    color: ["Black", "Silver"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "19",
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with deep bass.",
    price: 59.99,
    category: "Electronics",
    size: [],
    color: ["Black", "Blue", "Red"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "20",
    name: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness.",
    price: 34.99,
    category: "Home & Living",
    size: [],
    color: ["White", "Black"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "21",
    name: "Cooking Knife Set",
    description: "Professional stainless steel kitchen knife set.",
    price: 89.99,
    category: "Home & Kitchen",
    size: [],
    color: ["Silver"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "22",
    name: "Winter Jacket",
    description: "Insulated winter jacket for extreme cold.",
    price: 129.99,
    category: "Apparel",
    size: ["S", "M", "L", "XL"],
    color: ["Black", "Navy"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "23",
    name: "Cotton Hoodie",
    description: "Casual pullover hoodie with kangaroo pocket.",
    price: 49.99,
    category: "Apparel",
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "Black", "Blue"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "24",
    name: "Sports Watch",
    description: "Durable sports watch with stopwatch and waterproof design.",
    price: 59.99,
    category: "Accessories",
    size: [],
    color: ["Black", "Blue"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "25",
    name: "Camping Tent",
    description: "2-person waterproof camping tent for outdoor adventures.",
    price: 149.99,
    category: "Outdoor",
    size: ["2-person"],
    color: ["Green", "Gray"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "26",
    name: "Portable Power Bank",
    description: "10,000mAh fast-charging portable power bank.",
    price: 39.99,
    category: "Electronics",
    size: [],
    color: ["Black", "White"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "27",
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with timer function.",
    price: 79.99,
    category: "Home & Kitchen",
    size: [],
    color: ["Black", "Silver"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "28",
    name: "Robot Vacuum Cleaner",
    description: "Smart vacuum cleaner with app control.",
    price: 249.99,
    category: "Home & Living",
    size: [],
    color: ["White", "Black"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "29",
    name: "E-Book Reader",
    description: "Lightweight e-book reader with adjustable backlight.",
    price: 119.99,
    category: "Electronics",
    size: [],
    color: ["Black", "White"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
  {
    id: "30",
    name: "Wireless Earbuds",
    description: "Compact true wireless earbuds with charging case.",
    price: 89.99,
    category: "Electronics",
    size: [],
    color: ["Black", "White"],

    image: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1722926628555-252c1c0258bf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    rating: 4.5,
  },
];

export const popularProducts = products.slice(5, 13);
export const featuredProducts = products.slice(0, 6);
