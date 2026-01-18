import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // if logged in, allow
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
