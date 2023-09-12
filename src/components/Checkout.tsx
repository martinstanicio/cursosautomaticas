"use client";

import { usePathname, useRouter } from "next/navigation";

import type { Course } from "contentlayer/generated";
import { PayPalButtons } from "@paypal/react-paypal-js";
import PayPalProvider from "@/providers/PayPal";

export default function Checkout({
  title,
  price,
}: Pick<Course, "title" | "price">) {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <PayPalProvider>
      <PayPalButtons
        className="min-h-[13rem] rounded bg-white p-4 text-neutral-900"
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
          if (order?.status === "COMPLETED") push(`${pathname}/comprado`);
        }}
      />
    </PayPalProvider>
  );
}
