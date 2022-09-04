export const getURL =
  process.env.NODE_ENV === "production"
    ? "https://cek-bbm.vercel.app"
    : "http://localhost:3000";
