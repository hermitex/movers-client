import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal({ amount }) {
  const initialOptions = {
    client_id: `${process.env.REACT_APP_PAYPAL_ID}`,
  };
  return (
    <div>
      <PayPalScriptProvider>
        <PayPalButtons
          style={{ color: "blue", label: "pay" }}
          fundingSource="paypal"
          createOrder={async (data, actions) => {
            const orderId = await actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "KES",
                    value: 2,
                  },
                },
              ],
            });
            return orderId;
          }}
          onApprove={async (data, actions) => {
            console.log(data);
            const details = await actions.order.capture();
            console.log(
              `Transaction completed by ${details.payer.name.given_name}`
            );
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;

// sb-tqcry8133188@business.example.com
