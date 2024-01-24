import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [],
  secret: process.env.AUTH_SECRET_KEY,
});

export { handler as GET, handler as POST };
