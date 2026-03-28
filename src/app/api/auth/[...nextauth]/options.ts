import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../dbConfig/dbConfig";
import { compare } from "bcryptjs";

// Fallback secret for development - in production, always use NEXTAUTH_SECRET env var
const secret = process.env.NEXTAUTH_SECRET || "development-secret-key-change-in-production";

interface Credentials {
  email: any;
  password: any;
}

export const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: Credentials, req) {
        await dbConnect();
        const User = (await import("../../../../models/userModel")).default;
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user Found with Email Please Sign Up");
        }
        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        if (!checkPassword || user.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: secret,
  pages: {
    signIn: "/",
  },
};
