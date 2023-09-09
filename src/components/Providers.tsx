import PayPal from "@/providers/PayPal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PayPal>{children}</PayPal>;
}
