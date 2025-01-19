"use client";

import { useState } from "react";
import { TextField, Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios"; 
interface OrderData {
    orderId: string;
    status: string;
    deliveryDate: string;
  }
const OrderTracking = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const handleTrackOrder = async () => {
    setError("");
    setOrderData(null);

    
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`/api/track-order?phone=${phoneNumber}`);
      setOrderData(response.data);
    } catch (err) {
      setError("Unable to find orders for the given phone number.");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-white text-custom-green border shadow rounded-lg p-6 w-full max-w-lg">
        <Typography variant="h4" gutterBottom align="center">
          Track Your Order
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
          Enter your phone number to track your order status.
        </Typography>
        <div className="mt-4">
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={!!error}
            helperText={error || " "}
          />
        </div>
        <div className="mt-4">
          <Button id="track"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleTrackOrder}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Track Order"}
          </Button>
        </div>
        {orderData && (
          <div className="mt-6">
            <Typography variant="h6" gutterBottom>
              Order Details:
            </Typography>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Typography>
                <strong>Order ID:</strong> {orderData.orderId}
              </Typography>
              <Typography>
                <strong>Status:</strong> {orderData.status}
              </Typography>
              <Typography>
                <strong>Expected Delivery:</strong> {orderData.deliveryDate}
              </Typography>
            </div>
          </div>
        )}
        {!orderData && !loading && error && (
          <Typography variant="body2" color="error" align="center" className="mt-4">
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
