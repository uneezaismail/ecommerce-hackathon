
// Product Schema

export const productSchema = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'productId', type: 'string', title: 'Product ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
      { name: 'rating', type: 'number', title: 'Rating' },
      {  name: 'images',   type: 'array',   title: 'Images', of: [{  type: 'image',  }]},
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'color', type: 'string', title: 'Color' },
      { name: 'sizes', type: 'array', title: 'Sizes', of: [{ type: 'string' }] },
      { name: 'discountPercentage', type: 'number', title: 'Discount Percentage' }
    ]
  };
  
  



  // Order Schema

  export const orderSchema = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customerInfo', type: 'reference', to: [{ type: 'customer' }], title: 'Customer Info' },
      { name: 'productDetails', type: 'array', title: 'Product Details', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
      { name: 'status', type: 'string', title: 'Status' },
      { name: 'timestamp', type: 'datetime', title: 'Timestamp' }
    ]
  };





  // customer Schema

export const customerSchema = {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'customerId', type: 'string', title: 'Customer ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'text', title: 'Address' },
      { name: 'orderHistory', type: 'array', title: 'Order History', of: [{ type: 'reference', to: [{ type: 'order' }] }] },
      { name: 'zipCode', type: 'string', title: 'Zip Code' }
    ]
  };
  




  // shipment Schema

  export const shipmentSchema = {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { name: 'orderId', type: 'reference', to: [{ type: 'order' }], title: 'Order ID' },
      { name: 'shipmentId', type: 'string', title: 'Shipment ID' },
      { name: 'status', type: 'string', title: 'Status' },
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' },
      { name: 'trackingNumber', type: 'string', title: 'Tracking Number' }
    ]
  };





  // delivery Schema
  
  export const deliverySchema = {
    name: 'delivery',
    type: 'document',
    title: 'Delivery',
    fields: [
      { name: 'zoneNumber', type: 'string', title: 'Zone Number' },
      { name: 'coverageArea', type: 'text', title: 'Coverage Area' },
      { name: 'assignedDrivers', type: 'array', title: 'Assigned Drivers', of: [{ type: 'string' }] }
    ]
  };
  
  
 
  