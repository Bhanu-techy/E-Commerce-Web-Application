## Title

***Ecomerce Web App***


## Overview

This project is a React-based E-Commerce frontend application designed to simulate a real-world online shopping experience. Users can browse products, view detailed product information, choose quantities, and add items to a shopping cart. The application emphasizes clean UI, smooth navigation, and efficient state management.

The project was developed as part of hands-on learning to strengthen React fundamentals and frontend architecture concepts.

## Objectives

Build a functional E-Commerce user interface using React

Implement seamless navigation between product listing and product detail pages

Manage cart state efficiently across components

Apply React best practices and reusable component design

## Compete Instuctions

-Implement the page using HTML & CSS
-The page should be built using pure HTML and CSS for styling.
-Develop the functional page in ReactJS
-The frontend should be developed with the selected JavaScript framework, ensuring responsiveness and efficient state management.
-Server-Side Rendering (SSR) Implementation
-We would like to see if you are familiar with Server Side Rendering (SSR). Please use SSR where possible in your demo.
-Responsive Design
-The page needs to be responsive for both mobile and tablet views. Ensure proper scaling and layout adjustments based on screen size.


### Evaluation Criteria

-We will evaluate you based on the following:

-Code Structure: Clean and organized code.

-Naming Conventions: Proper naming conventions for classes, components, and files.

-Use of Pre-built JS Packages: Minimize the use of unnecessary pre-built JS package-s.

-Screen Size Fit: Ensure that the design fits well on all screen sizes.

-Minimized DOM Size: Keep the DOM size as minimal as possible for performance optimization.


## Key Features

Product listing with reusable product cards

Search and filter functionality for products

Detailed product view page

Quantity selection for products

Add to cart functionality

Dynamic cart updates using global state

Smooth navigation using React Router

Responsive UI for better user experience

## Application Workflow

User lands on the Home / Products page displaying a list of products

User can search or filter products

Clicking the “View More” button navigates to the Product Details page

On the Product Details page:

Full product information is displayed

User selects the desired product quantity

User adds the product to the cart

Cart state is updated globally and reflected across the application


## Technologies & Tools

React JS

JavaScript (ES6+)

HTML5

CSS3

React Hooks (useState, useEffect, useContext)

React Context API – for global cart state management

React Router DOM – for client-side routing

## Project Structure

```
src/
├── components/
│ ├── Header
│ ├── Product
│ ├── ProductItem
│ ├── Cart
│ ├── Filter
| ├── EmptyCartView
| ├── CartItem
| ├── Home
| ├── Footer
│ └── NotFound
├── context/
│ └── CartContext.jsx
|
├── App.js
└── index.js

```