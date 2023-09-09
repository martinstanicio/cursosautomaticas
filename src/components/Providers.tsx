import PayPal from "@/providers/paypal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PayPal>{children}</PayPal>;
}
