"use client";

import type { Course } from "contentlayer/generated";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout({
  title,
  price,
}: Pick<Course, "title" | "price">) {
  return (
    <PayPalButtons
      className="min-h-[13rem] rounded bg-white p-4"
      style={{ color: "black" }}
      createOrder={(data, actions) =>
        actions.order.create({
          purchase_units: [
            {
              amount: { value: price.toString() },
              description: title,
            },
          ],
          application_context: { shipping_preference: "NO_SHIPPING" },
        })
      }
    />
  );
}
