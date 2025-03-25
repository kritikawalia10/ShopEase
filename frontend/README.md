# 🛍️ Simplified Product Display Web Application
## 📌 Overview
This is a responsive product display web application built with React.js. Users can browse products, view detailed descriptions, and add items to their cart ("My Bag"). The UI is designed with a dark blue theme for better user interaction.

## 🚀 Features
✅ Product List Page – Displays multiple products in a grid layout (3 per row).
✅ Product Detail View – Clicking a product shows more details in a separate view.
✅ Shopping Cart ("My Bag") – Users can add products to their cart, adjust quantities, or remove them.
✅ State Management – Implemented using React Context API for cart functionality.
✅ Smooth Animations – Includes fade-in effects for UI enhancements.
✅ Responsive Design – Works on both desktop and mobile devices.

## 🛠️ Tech Stack
- Frontend: React.js, React Router
- Styling: CSS 
- State Management: React Context API
- Data Handling: Static JSON in data.js

# 📝 Design Choices
## 🎨 Color Scheme

- Dark Blue (#0A192F) – Primary background and navbar.
- Light Blue (#50BFE6) – Hover effects and active buttons.
- White (#FFFFFF) – Text contrast for readability.
- Green (#28A745) – Success messages (e.g., "Item added to cart").

## 🖥️ Grid Layout for Products

- At least 3 products per row on desktop for better UX.
- Responsive: Adjusts to 1-2 per row on mobile screens.

## 🛒 Cart Functionality

- Uses React Context API for global cart state.
- Displays added products with a total price calculation.