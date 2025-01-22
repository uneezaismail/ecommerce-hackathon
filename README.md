# OAK&TEAK Hackathon 3: Marketplace Development

## Project Overview
**OAK&TEAK** is a modern, responsive e-commerce platform for furniture, developed during **Hackathon 3**. The marketplace offers convenient, affordable, and transparent furniture shopping, allowing users to browse, purchase, and track their orders online. Key features include customizable shopping experiences, real-time order tracking, and no hidden fees.

---

## Key Components

- **Product Listings**: Displays furniture items with dynamic rendering, filtering by category, price, and availability, and sorting options.
- **Cart Functionality**: Allows users to add/remove items, update quantities, and calculates total price with taxes and discounts.
- **Checkout Process**: Collects billing details, validates forms, integrates payment systems, and provides an order summary.
- **Order Tracking**: Customers can track their orders in real-time using their phone number, integrated with shipment tracking APIs.

---

## Technologies Used

- **Next.js** for frontend and SSR.
- **Sanity CMS** for product data management.
- **Tailwind CSS** for responsive design.
- **Vercel** for hosting and deployment.
- **Stripe** for payments.
- **ShipEngine API** for shipment tracking.
- **Cloudinary** for image management.
- **Lighthouse** for performance testing.

---

## Deployment Steps

1. **Vercel Setup**: Connected GitHub repo to Vercel, configured build settings.
2. **Environment Variables**: Stored sensitive data like API keys in `.env` and uploaded to Vercel.
3. **Staging Testing**: Deployed to Vercel's staging environment, validated functionality, and conducted performance/security tests.

---

## Development Timeline

### Day 1: Laying the Foundation for Marketplace
- **Objective**: Defined the marketplace type and purpose, structured the entities like Products, Orders, and Shipments.
- **Key Accomplishments**:
  - Defined the **marketplace type** (furniture e-commerce) and the **primary purpose**.
  - Identified **key features**: one-stop platform, customizable options, transparent pricing, no hidden fees, and quick customer support.
  - Set **target audience**: homeowners, interior enthusiasts, professionals, offices, and restaurants.
  - Structured **entities** like Products, Orders, and Shipments, which will form the core of the backend.

### Day 2: Technical Foundation and Planning
- **Objective**: Designed the system architecture and planned key workflows.
- **Key Accomplishments**:
  - Designed **system architecture**: Integrated Next.js for the frontend, Sanity CMS for content management, and third-party APIs for payments and shipment tracking.
  - Developed workflows for key pages: **Home**, **Product Listings**, **Product Details**, **Cart & Checkout**, and **Tracking**.
  - Implemented responsive layouts using **Tailwind CSS** and ensured that components would be easily customizable.

### Day 3: API Integration and Data Migration
- **Objective**: Integrated APIs, migrated data to Sanity CMS, and validated schemas.
- **Key Accomplishments**:
  - Integrated **APIs** to handle data: created custom endpoints (`/api/products`, `/api/categories`) for managing product and category data.
  - Migrated **JSON data** into **Sanity CMS** using `axios` and ensured schema compatibility.
  - Utilized **dotenv** for managing sensitive data (API keys) and used **Sanity Client** for document creation and data management.

### Day 4: Frontend Component Development
- **Objective**: Built dynamic components for the frontend.
- **Key Accomplishments**:
  - Developed dynamic **Product Listing**, **Product Details**, and **Category** components, ensuring products are displayed with names, prices, images, and additional details like sizes and colors.
  - Created a **Cart component** with state management to handle quantities, totals, and price updates.
  - Implemented **Pagination** for better handling of large product lists and added **Filter Panel** to allow users to filter by price, brand, and availability.
  - Added **Suggested Products** based on categories/tags and began developing the **Order Tracking** feature for real-time delivery updates.

### Day 5: Testing, Error Handling, and Backend Refinement
- **Objective**: Focused on testing and error handling for frontend and backend components.
- **Key Accomplishments**:
  - Conducted **component testing** for **Product Listing**, **Cart**, **Checkout**, and **Filter** to ensure all features were working smoothly.
  - Implemented **error handling**: added error logs and validation messages for API errors, stock issues, and checkout problems.
  - Optimized **performance**: Reduced page load time using **Cloudinary** for images and **lazy loading** techniques. Achieved **Lighthouse scores of 96** (Performance) and **100** (SEO).
  - Ensured **cross-browser** compatibility and tested on **iPhone/Android** devices.
  - Performed **User Acceptance Testing** and created a **CSV report** documenting all tests.

### Day 6: Deployment Preparation and Staging
- **Objective**: Prepared the project for deployment and final testing.
- **Key Accomplishments**:
  - Set up the **staging environment** on **Vercel** to test the application in a production-like setting.
  - Configured **environment variables** securely and ensured that all functions were operational before deployment.
  - Conducted **final testing** to validate that the project was ready for deployment, resolving any last-minute issues.

---

This project provides an intuitive, transparent, and high-quality shopping experience for customers looking to purchase furniture online.
