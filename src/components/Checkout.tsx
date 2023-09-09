"use client";

import type { Course } from "contentlayer/generated";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function Checkout({
  title,
  price,
}: Pick<Course, "title" | "price">) {
  const [isPurchased, setIsPurchased] = useState(false);

  const CheckoutButtons = (
    <PayPalButtons
      style={{ color: "black" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: { value: price.toString() },
              description: title,
            },
          ],
          application_context: { shipping_preference: "NO_SHIPPING" },
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        if (order?.status === "COMPLETED") {
          setIsPurchased(true);
        }
      }}
    />
  );

  const CheckoutSuccess = (
    <>
      <p>Su compra ha sido realizada con éxito.</p>
      <p>
        Nos comunicaremos con usted mediante email para informarle sobre el
        curso en la brevedad.
      </p>
    </>
  );

  return (
    <div className="min-h-[13rem] rounded bg-white p-4 text-neutral-900">
      {!isPurchased ? CheckoutButtons : CheckoutSuccess}
    </div>
  );
}
