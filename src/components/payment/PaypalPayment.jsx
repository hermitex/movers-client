import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import SuccessModal from "../moving-process/Success";

function PaypalPayment({ amount, getPayData, values }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  amount = (amount / 121.5).toFixed(2);
  const handleApprove = (order) => {
    getPayData(order);
    // send request to backend
    // if response is success
    setPaidFor(true);
    // if error
    // alert("Payment processed successfully! However, we are unable to fulfil your request. Kindly contact support@moovers.com for further assistance.")
  };

  if (paidFor) {
    // Go to success page
    // navigate("/success")
  }

  if (error) {
    alert(error);
  }

  return (
    // <PayPalScriptProvider
    //   options={{
    //     "client-id":
    //       "AVFQQPBVQ3lGiR05sGozQMEQDMAO0Egq3ckF4qe1jA8Y6EOits4nOpzXUMzNw_aWthfYFBVC5HmkUirq",
    //   }}
    // >
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
          handleApprove(order);
        }}
        onError={(error) => {
          setError(error);
          console.log(error);
        }}
        onCancel={() => {
          // Display cancel page
        }}
      />
      {paidFor ? (
        <SuccessModal
          isOpen={true}
          message="Thanks for booking your move with us"
        />
      ) : null}
    </div>
    // </PayPalScriptProvider>
  );
}

export default PaypalPayment;

// sb-tqcry8133188@business.example.com
