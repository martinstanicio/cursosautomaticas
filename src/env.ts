const env = {
  NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
} as const;

export function getEnv(variable: keyof typeof env) {
  const value = env[variable];

  if (typeof value !== "string") {
    throw new Error(`Missing ${variable} env variable`);
  }

  return value;
}
