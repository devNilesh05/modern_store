import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../model/products';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav"
import { MatNavList, MatListItem } from "@angular/material/list"
import { EcommerceStore } from '../../ecommerce-store';


@Component({
  selector: 'app-products-grid',
  imports: [CurrencyPipe, LucideAngularModule, NgClass, MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, RouterLink, TitleCasePipe],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  products = signal<Product[]>([
    {
      id: "p001",
      name: "Wireless Bluetooth Earbuds",
      description: "Compact true-wireless earbuds with noise cancellation and 24h battery life",
      price: 1499,
      imageUrl: "https://i.pinimg.com/736x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
      rating: 4.5,
      reviewCount: 1342,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p002",
      name: "Stainless Steel Water Bottle 1L",
      description: "Reusable insulated bottle keeps drinks hot or cold for 12 hours",
      price: 899,
      imageUrl: "https://i.pinimg.com/736x/57/82/9e/57829e29a74fc50884a93864adab2792.jpg",
      rating: 4.7,
      reviewCount: 567,
      inStock: true,
      category: "home"
    },
    {
      id: "p003",
      name: "Ergonomic Office Chair",
      description: "Adjustable height chair with lumbar support and breathable mesh back",
      price: 5999,
      imageUrl: "https://i.pinimg.com/736x/7a/3c/5c/7a3c5ca272bf8f2e4b2ad7c0f2d97632.jpg",
      rating: 4.3,
      reviewCount: 289,
      inStock: false,
      category: "furniture"
    },
    {
      id: "p004",
      name: "LED Desk Lamp with USB Charging Port",
      description: "Touch-control desk lamp with adjustable brightness and built-in USB charger",
      price: 1299,
      imageUrl: "https://i.pinimg.com/736x/3d/9d/bb/3d9dbb6799397b6854745bdc54158e41.jpg",
      rating: 4.6,
      reviewCount: 412,
      inStock: true,
      category: "home"
    },
    {
      id: "p005",
      name: "Ceramic Non-Stick Frying Pan 26cm",
      description: "Durable non-stick pan suitable for daily cooking; easy to clean",
      price: 1499,
      imageUrl: "https://i.pinimg.com/736x/d0/9c/0f/d09c0f4186ed6e8b35fc35ea9a7d1ce4.jpg",
      rating: 4.4,
      reviewCount: 234,
      inStock: true,
      category: "home"
    },
    {
      id: "p006",
      name: "Buy DualSense Edge® PS5™ Wireless Controller",
      description: "High-capacity portable charger with dual USB output and fast charging",
      price: 2199,
      imageUrl: "https://i.pinimg.com/736x/e1/0f/c3/e10fc3b40a282173d7504b0d3c6c990c.jpg",
      rating: 4.5,
      reviewCount: 980,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p007",
      name: "JBL wireless earbuds",
      description: "Comfortable headphones with active noise cancellation and 30h playtime",
      price: 3499,
      imageUrl: "https://i.pinimg.com/736x/db/c9/b5/dbc9b56e1255e2b806357306deb6f338.jpg",
      rating: 4.2,
      reviewCount: 678,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p008",
      name: "Smart LED Bulb (WiFi Enabled)",
      description: "Energy-efficient bulb with color changing, remote control via app",
      price: 499,
      imageUrl: "https://i.pinimg.com/736x/5a/b9/bc/5ab9bc68ca6f6852efbfd63143b7dac1.jpg",
      rating: 4.3,
      reviewCount: 356,
      inStock: true,
      category: "home"
    },
    {
      id: "p009",
      name: "Yoga Mat 6 mm",
      description: "Non-slip, lightweight yoga mat for home workouts and yoga sessions",
      price: 899,
      imageUrl: "https://i.pinimg.com/736x/54/7f/3f/547f3f20016859bf7704ca4f93f6562c.jpg",
      rating: 4.6,
      reviewCount: 423,
      inStock: true,
      category: "sports"
    },
    {
      id: "p010",
      name: "Stainless Steel Cookware Set (3-Piece)",
      description: "Set of 3 cooking pots with lids — ideal for everyday meals",
      price: 3499,
      imageUrl: "https://i.pinimg.com/736x/5a/d5/1a/5ad51aede05509711577db98b97ea45d.jpg",
      rating: 4.4,
      reviewCount: 198,
      inStock: true,
      category: "home"
    },
    {
      id: "p011",
      name: "Classic Cotton T-Shirt (Men)",
      description: "Comfortable crew-neck T-shirt made from 100% cotton",
      price: 899,
      imageUrl: "https://i.pinimg.com/736x/bb/a7/46/bba7461bb07e602095af4a7346b4b1ca.jpg",
      rating: 4.1,
      reviewCount: 1420,
      inStock: true,
      category: "clothing"
    },
    {
      id: "p012",
      name: "Running Shoes (Unisex)",
      description: "Lightweight running shoes with breathable mesh upper and cushioned sole",
      price: 2999,
      imageUrl: "https://i.pinimg.com/736x/60/3d/37/603d3723ee5f6653a36604d863fa45fb.jpg",
      rating: 4.5,
      reviewCount: 890,
      inStock: true,
      category: "clothing"
    },
    {
      id: "p013",
      name: "Electric Kettle 1.7L",
      description: "Fast-boil stainless steel kettle with auto shut-off feature",
      price: 1899,
      imageUrl: "https://i.pinimg.com/736x/10/dc/32/10dc32633da9f667401390bc83c84e25.jpg",
      rating: 4.6,
      reviewCount: 376,
      inStock: true,
      category: "home"
    },
    {
      id: "p014",
      name: "Portable Table Fan 12 inch",
      description: "Compact fan for desks or small rooms; 3-speed control",
      price: 1199,
      imageUrl: "https://i.pinimg.com/736x/f1/2c/72/f12c72678896212cc4b503400da8817b.jpg",
      rating: 4.0,
      reviewCount: 223,
      inStock: true,
      category: "home"
    },
    {
      id: "p015",
      name: "Classic Backpack 20L",
      description: "Durable backpack with multiple compartments — ideal for daily use or travel",
      price: 1599,
      imageUrl: "https://i.pinimg.com/736x/e6/a8/4a/e6a84afc1ebbc115e0597f8156704120.jpg",
      rating: 4.3,
      reviewCount: 498,
      inStock: true,
      category: "bags"
    },
    {
      id: "p016",
      name: "Digital Alarm Clock with LED Display",
      description: "Simple bedside clock with alarm, snooze and backlight",
      price: 699,
      imageUrl: "https://i.pinimg.com/736x/7e/51/ac/7e51ac189085996a88be3ad27b933d7b.jpg",
      rating: 4.2,
      reviewCount: 134,
      inStock: true,
      category: "home"
    },
    {
      id: "p017",
      name: "Portable Bluetooth Speaker",
      description: "Compact speaker with 10W output and 8h playtime — perfect for outdoor or travel",
      price: 2299,
      imageUrl: "https://i.pinimg.com/736x/b0/05/de/b005defe4050da42b70f3a6295c205b7.jpg",
      rating: 4.4,
      reviewCount: 620,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p018",
      name: "Microfiber Bath Towel (Large)",
      description: "Soft, quick-dry towel ideal for bathroom or gym use",
      price: 599,
      imageUrl: "https://i.pinimg.com/736x/df/63/2a/df632a2b3a08321c9a5e80ced6387e7e.jpg",
      rating: 4.5,
      reviewCount: 278,
      inStock: true,
      category: "living"
    },
    {
      id: "p019",
      name: "Silicone Baking Mat (Set of 2)",
      description: "Reusable non-stick mats — great for baking and easy cleanup",
      price: 899,
      imageUrl: "https://i.pinimg.com/736x/7d/ba/5a/7dba5af3c062444ab079e5ffb6900d07.jpg",
      rating: 4.6,
      reviewCount: 154,
      inStock: true,
      category: "home"
    },
    {
      id: "p020",
      name: "Logitech MX Master 3S - Wireless Mouse",
      description: "Compact and ergonomic with adjustable DPI and long battery life",
      price: 799,
      imageUrl: "https://i.pinimg.com/736x/ee/f2/74/eef274ed6edd234344df8339af0d5eb7.jpg",
      rating: 4.2,
      reviewCount: 442,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p021",
      name: "Choetech 8K@60Hz Type-C to HDMI Adapter",
      description: "Adapter for connecting laptops or tablets to HDMI monitors or TVs",
      price: 999,
      imageUrl: "https://i.pinimg.com/736x/35/33/07/3533079402742d1e957ca893d6ee2256.jpg",
      rating: 4.1,
      reviewCount: 198,
      inStock: true,
      category: "electronics"
    },
    {
      id: "p022",
      name: "Dustbuster Handheld Vacuum Cleaner",
      description: "Lightweight cordless vacuum — ideal for quick cleanups at home",
      price: 2799,
      imageUrl: "https://i.pinimg.com/736x/f5/c9/57/f5c9579cd4f77e1ebe08c31ea1b8798d.jpg",
      rating: 4.3,
      reviewCount: 167,
      inStock: true,
      category: "home"
    },
    {
      id: "p023",
      name: "Electric Hair Dryer",
      description: "Compact dryer with multiple heat/speed settings and cool-air function",
      price: 1999,
      imageUrl: "https://i.pinimg.com/736x/ff/f9/7b/fff97b505f97ee1af22613d06aa5ec6b.jpg",
      rating: 4.4,
      reviewCount: 289,
      inStock: true,
      category: "personal"
    },
    {
      id: "p024",
      name: "Organic Cotton Face Towel (Set of 2)",
      description: "Soft and absorbent towel – ideal for face or bathroom use",
      price: 699,
      imageUrl: "https://i.pinimg.com/736x/ba/28/74/ba2874394c0812db037368bd1ee7388a.jpg",
      rating: 4.5,
      reviewCount: 204,
      inStock: true,
      category: "living"
    },
    {
      id: "p025",
      name: "Kids’ Wooden Building Blocks Toy Set",
      description: "Safe unfinished wooden toy blocks — encourages creativity and motor skills",
      price: 1299,
      imageUrl: "https://i.pinimg.com/736x/65/a4/4a/65a44a295b928240a08c4293c829ba9e.jpg",
      rating: 4.7,
      reviewCount: 145,
      inStock: true,
      category: "toys"
    },
    {
      id: "p026",
      name: "Travel Neck Pillow Memory Foam",
      description: "Comfortable memory-foam pillow for neck support during travel",
      price: 999,
      imageUrl: "https://i.pinimg.com/736x/d9/04/26/d90426da6dc58e78f7d64de936d9c4e6.jpg",
      rating: 4.4,
      reviewCount: 312,
      inStock: true,
      category: "travel"
    },
    {
      id: "p027",
      name: "LED Flashlight 5000lm",
      description: "High-power portable flashlight — great for outdoors, emergencies and camping",
      price: 1599,
      imageUrl: "https://i.pinimg.com/736x/05/b9/a5/05b9a5da4e7e997986b00dede3dc9f58.jpg",
      rating: 4.3,
      reviewCount: 224,
      inStock: true,
      category: "tools"
    },
    {
      id: "p028",
      name: "Mechanical Keyboard",
      description: "Premium RGB mechanical keyboard for gamers and programmers",
      price: 5999,
      imageUrl: "https://i.pinimg.com/736x/6b/1d/7c/6b1d7c691358dfe5a0807bc60f0ed2cf.jpg",
      rating: 4.4,
      reviewCount: 498,
      inStock: true,
      category: "accessories"
    },
    {
      id: "p029",
      name: "Classic Sunglasses (UV Protection)",
      description: "Stylish sunglasses with UV400 protection and polarized lenses",
      price: 899,
      imageUrl: "https://i.pinimg.com/736x/77/a0/a9/77a0a9fce3d295ed67c90d010204480a.jpg",
      rating: 4.2,
      reviewCount: 652,
      inStock: true,
      category: "accessories"
    },
    {
      id: "p030",
      name: "Cotton Bedsheet King Size",
      description: "Soft 100% cotton bedsheet for king-size bed — breathable and machine-washable",
      price: 2499,
      imageUrl: "https://i.pinimg.com/736x/66/a6/09/66a609fc0eed5846c5c798e1cc6d5142.jpg",
      rating: 4.5,
      reviewCount: 321,
      inStock: true,
      category: "living"
    }
  ]); 

  shoppingIcon = ShoppingCart


  // category = input<string>('all')

  // filteredProducts = computed(() => {
  //   if(this.category() === 'all') return this.products()

  //   return this.products().filter(p => {
  //     console.log(p.category)
  //     p.category ===  this.category().toLowerCase()})
  // })

  category = signal('all');

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const cat = params.get('category') ?? 'all';
      this.category.set(cat.toLowerCase());
      console.log(this.category())
    });

    this.store.setCategory(this.category)
  }

  store = inject(EcommerceStore)

  // filteredProducts = computed(() => {
  //   const current = this.category().toLowerCase();

  //   if (current === 'all') return this.products();

  //   return this.products().filter(
  //     p => p.category.toLowerCase() === current
  //   );
  // });

  categories = signal<string[]>(['all', "electronics",
    "home",
    "furniture",
    "sports",
    "clothing",
    "bags ",
    "living",
    "personal",
    "toys  ",
    "travel ",
    "tools",
    "accessories"])


}
