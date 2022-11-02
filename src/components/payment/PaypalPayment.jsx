import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import ProgressIndicator from "../utils/ProgressIndicator";

function PaypalPayment({ amount, values }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  amount = (amount / 121.5).toFixed(2);
  const handleApprove = (order) => {
    console.log(order);
    // send request to backend
    // if response is success
    setPaidFor(true);
    // if error
    // alert("Payment processed successfully! However, we are unable to fulfil your request. Kindly contact support@moovers.com for further assistance.")
  };

  if (paidFor) {
    // Go to success page
    alert("Thanks for booking your move with us");
  }

  if (error) {
    alert(error);
  }

  return (
    <div>
      <PayPalButtons
        style={{
          color: "silver",
          label: "pay",
          shape: "pill",
        }}
        fundingSource="paypal"
        createOrder={async (_data, actions) => {
          const orderId = await actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
          return orderId;
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          handleApprove(order.orderId);
        }}
        onError={(error) => {
          setError(error);
          console.log(error);
        }}
        onCancel={() => {
          // Display cancel page
        }}
      />
    </div>
  );
}

export default PaypalPayment;

// sb-tqcry8133188@business.example.com
