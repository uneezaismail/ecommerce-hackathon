# OAK&TEAK Hackathon 3: Marketplace Development  

Welcome to the OAK&TEAK project, a modern, responsive e-commerce furniture marketplace designed to offer convenience, transparency, and a premium shopping experience. This document summarizes the activities and progress made over six days during Hackathon 3.  

---

## Day 1: Laying the Foundation for your Marketplace Journey

- **Marketplace Type**: General E-Commerce for Furniture.  
- **Primary Purpose**: Create a platform that simplifies furniture shopping, offering a wide range of quality furniture at affordable prices with reliable delivery.  
- **Unique Features**:  
  - One-stop platform for all furniture needs.  
  - Specially designed for busy professionals who lack time for in-store shopping.  
  - Customizable options (colors, sizes) and real-time tracking for a premium user experience.  
  - Transparent pricing with no hidden fees and quick customer support.  
- **Target Audience**: Homeowners, interior enthusiasts, offices, restaurants, and students in hostels.  
- **Entities and Data Schema**: Defined key entities (Products, Orders, Customers, Shipments, etc.) and their relationships to support the marketplace functionality.  

---

## Day 2: Planning the Technical Foundation  

### Overview  
Focused on creating a seamless, responsive e-commerce platform for furniture shopping by designing the system architecture, defining workflows, and prototyping core components.  

### Key Accomplishments 

- **System Architecture:**  
  - Integrated Next.js frontend, Sanity CMS backend, and third-party APIs for payments and shipment tracking.  

- **Core Pages Workflow:**  
  - **Home Page:** Showcased new arrivals and categories.  
  - **Product Listing:** Enabled filtering and sorting.  
  - **Product Details:** Provided detailed descriptions and customization options.  
  - **Cart & Checkout:** Supported quantity updates, shipping details, and payment collection.  
  - **Tracking:** Offered real-time shipment updates.  

- **Technologies Used:**  
  - **Next.js:** Fast, SEO-friendly pages with dynamic routing.  
  - **Sanity CMS:** Real-time updates for product and order data.  
  - **Tailwind CSS:** Mobile-friendly design.  
  - **APIs:** Secure payment and shipment tracking integration.  
 

---

## Day 3 - API Integration and Data Migration 

### Objective  
Focused on integrating APIs, migrating JSON data into Sanity CMS, validating schemas, and displaying data on the frontend.  

### Accomplishments 

- **API Integration**:  
  - Created custom endpoints:  
    - `/api/products` (fields: id, name, price, category, description).  
    - `/api/categories` (fields: id, title, slug).  

- **Schema Validation**:  
  - Adjusted Sanity schemas for products and categories to ensure compatibility.  

- **Data Migration**:  
  - Used `dotenv` for Sanity configuration.  
  - Fetched and migrated data via `axios` into Sanity CMS using the Sanity Client.  


### Tools Used  
- **Next.js**: Frontend and API handling.  
- **Sanity CMS**: Managed product and category data.  
- **Axios**: API requests.  
- **dotenv**: Managed environment variables.  
- **Sanity Client**: Document creation in CMS.  

---

## Day-4 - Building Dynamic Frontend Components

## Activities

- Implemented dynamic rendering for the **Product Listing** and **Product Detail** components, displaying product information such as name, price, stock, images, and additional details like sizes and colors.
- Developed the **Category** component to filter products based on category selection.
- Built the **Cart** component to track added items, update quantities, and calculate total price with state management.
- Added **Pagination** functionality to handle large product lists, dividing them into manageable pages with navigation buttons.
- Implemented a **Filter Panel** to enable users to filter products by price range, brand, and availability.
- Created a **Suggested Products** feature to recommend related items based on tags or categories.
- Started working on the **Order Tracking** component, offering real-time updates on the delivery status of customer orders.

---

 ## Day 5 - Testing, Error Handling, and Backend Integration Refinement

## Day-5 summary

- **Component Testing**: Verified **Product Listing**, **Cart**, **Checkout**, and **Filter** components for accuracy and functionality.
- **Error Handling**: Implemented error logs and validation messages for API errors, stock issues, and checkout.
- **Performance Optimization**: Optimized assets (Cloudinary, lazy loading), achieving **Lighthouse** scores of **96** (Performance) and **100** (SEO). Reduced page load time under 2 seconds.
- **Cross-Browser and Device Testing**: Ensured compatibility across **Chrome**, **Firefox**, **Safari**, **Edge**, and tested responsiveness on **iPhone/Android**.
- **User Acceptance Testing**: Simulated real-world usage (browsing, cart actions, checkout) and collected feedback.
- **Generated CSV**  Generated a CSV-based test report documenting test cases and results.
 

---

## Day 6: Deployment Preparation and Staging  

- Set up a staging environment on Vercel for testing in a production-like setting.  
- Configured environment variables securely.  
- Validated application functionality and resolved pre-deployment issues.  

---

This README provides an overview of the development journey for OAK&TEAK. The final marketplace is a testament to the effort and dedication applied during Hackathon 3, delivering a user-focused solution for modern furniture shopping.  
