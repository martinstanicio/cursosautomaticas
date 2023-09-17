"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { getEnv } from "@/env";

export default function PayPalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PayPalScriptProvider
      options={{ clientId: getEnv("NEXT_PUBLIC_PAYPAL_CLIENT_ID") }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
