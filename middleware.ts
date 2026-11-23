import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const loginUrl = new URL("/login.html", request.url);
  if (!url || !key) return NextResponse.redirect(loginUrl);

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookieOptions: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" },
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(items) {
        items.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        items.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return NextResponse.redirect(loginUrl);
  const { data: admin, error: adminError } = await supabase.from("admins")
    .select("user_id").eq("user_id", user.id).maybeSingle();
  if (adminError || !admin) return NextResponse.redirect(loginUrl);
  response.headers.set("Cache-Control", "private, no-store, no-cache, max-age=0");
  return response;
}

export const config = {
  matcher: ["/dashboard.html", "/dashboard"],
};
