"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { getEnv } from "@/lib/env";

export interface Props {
  children: React.ReactNode;
}

export default function PayPalProvider({ children }: Props) {
  const NEXT_PUBLIC_PAYPAL_CLIENT_ID = getEnv("NEXT_PUBLIC_PAYPAL_CLIENT_ID");

  return (
    <PayPalScriptProvider options={{ clientId: NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      {children}
    </PayPalScriptProvider>
  );
}
