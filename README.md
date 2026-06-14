# 🛒 Grocery Delivery Web App (Frontend)

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![Zustand](https://img.shields.io/badge/State-Zustand-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-green)
![Vite](https://img.shields.io/badge/Vite-Fast-purple)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A **mobile-first grocery delivery web application** built using **React, TypeScript, Zustand, Tailwind CSS, and Vite**.

This project is a **real-world frontend system design implementation** based on a provided Figma design. It simulates a complete grocery delivery experience with modern UI/UX principles, scalable architecture, and production-level state management.

The application demonstrates how a real e-commerce platform is structured, including authentication flows, product browsing, cart system, checkout process, and order lifecycle management.

---

## 🌐 Live Demo

👉 [View Live Application](https://rummy-grocery-app.netlify.app/)

---

# 🎯 Project Overview

This project is designed to replicate a **real-world grocery delivery platform UI system** with a strong focus on:

- Clean frontend architecture
- Scalable state management using Zustand
- Pixel-perfect Figma implementation (mobile-first)
- Fully responsive design (mobile + desktop)
- Real-world e-commerce user flows
- Future implementation of Backend make easy

It is built to demonstrate **frontend engineering skills equivalent to production-level applications**.

---

# 🚀 Key Features

## 🔐 Authentication System

- Splash screen → onboarding flow
- Login / Signup functionality
- OTP verification UI (ex. 1234)
- Location selection screen
- Persistent user session using localStorage

---

## 🛒 Product & Shopping System

- Category-based product listing
- Product detail view
- Search functionality
- Filter UI (price, category, etc.)

---

## 🛍️ Cart System

- Add / remove products
- Increase / decrease quantity
- Auto price calculation (subtotal, delivery, total)
- Persistent cart using Zustand + localStorage

---

## ❤️ Wishlist System

- Add/remove favorite products
- Instant add-to-cart from wishlist
- Persistent across sessions

---

## 💳 Checkout Flow

- Delivery options:

  - Home Delivery
  - Express Delivery
  - Store Pickup

- Payment options:

  - Cash on Delivery
  - UPI (mock)
  - Card (mock)

- Order simulation:
  - Random success/failure response
  - Auto-generated order ID
  - Order success & failure screens

---

## ⚡ UI/UX Enhancements

- Skeleton loaders for smooth UX
- Empty states for better usability
- Smooth transitions and animations
- Fully responsive breakpoints

---

# 🚀 Tech Stack

| Technology   | Purpose           |
| ------------ | ----------------- |
| React (Vite) | UI Framework      |
| TypeScript   | Type Safety       |
| Zustand      | State Management  |
| Tailwind CSS | Styling           |
| React Router | Navigation        |
| LocalStorage | Persistence Layer |

---

# 🧠 Architecture Overview

The application follows a **layered architecture approach**:

This ensures:

- Clean separation of concerns
- Scalable state management
- Easy maintainability
- Production-ready structure

---

# 💾 Data Persistence Strategy

| Data Type | Storage Method     |
| --------- | ------------------ |
| Users     | localStorage.users |
| Session   | localStorage.user  |
| Cart      | Zustand + storage  |
| Favorites | Zustand + storage  |
| Orders    | Zustand            |

---

# 📱 Responsive Design Strategy

## Mobile First (Figma Based)

- Bottom navigation system
- Card-based layout
- Pixel-perfect UI matching Figma

## Desktop Design (Custom)

- Max width container (`max-w-7xl`)
- 6-column product grid
- Sidebar filters
- Sticky cart summary
- Optimized spacing and layout

---

# ⚙️ State Management (Zustand)

The application uses modular Zustand stores:

- `authStore` → authentication flow
- `cartStore` → cart management
- `favoriteStore` → wishlist system
- `orderStore` → order processing

Each store is:

- Lightweight
- Persistent
- Highly scalable

---

# 📈 Why This Project Stands Out

- Real-world e-commerce flow simulation
- Production-grade frontend architecture
- Clean and scalable folder structure
- Strong TypeScript implementation (strict mode)
- Efficient state management using Zustand (no Redux complexity)
- Fully responsive UI (mobile-first + desktop optimized)
- Interview-ready system design approach

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/your-username/grocery-app.git
cd grocery-app
```
