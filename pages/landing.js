import Link from "next/link";
import Landing from "../components/Landing";

// ROUTING (https://nextjs.org/docs/routing/introduction#linking-between-pages)

// Index routes
// The router will automatically route files named index to the root of the directory.
// (Line 14) => pages/index.js → /
// (Line 2) => components/Landing/index.js → components/Landing

// Nested routes
// EXAMPLE on pages/authentication/login.js

// Linking between pages
// use => <Link href="{value}" />
// ex1 (Line23 - landing.js) => pages/index.js → "/"
// ex2 (Line8 - index.js)    => pages/landing.js → "/landing"

export default function landing() {
  return (
    <>
      <Landing />
      <Link href="/">
        <a>Back to Index</a>
      </Link>
    </>
  );
}
