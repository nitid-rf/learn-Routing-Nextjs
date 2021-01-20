import Link from "next/link";
import Login from "../../components/Authentication/Login";
import { useRouter } from "next/router";

// Nested routes
// The router supports nested files. If you create a nested folder
// structure files will be automatically routed in the same way still.
// (Line 2) => ../../components/Authentication/Login.js → ../../components/Authentication/Login

// Dynamic routes
// To match a dynamic segment you can use the bracket syntax.
// This allows you to match named parameters.

// pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
// pages/[username]/settings.js → /:username/settings (/foo/settings)
// pages/post/[...all].js → /post/* (/post/2020/id/title)

// EXAMPLE => run this page PATH
// => http://localhost:3000/authentication/[id]
// => http://localhost:3000/authentication/:id
// => http://localhost:3000/authentication/1 ----- run this line

export default function login() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Login />
      <p>Display connecting ID #{id}</p>
      <p>You can change ID After Authentication Path</p>
      <p>now - http://localhost:3000/authentication/1</p>
      <p>change - http://localhost:3000/authentication/[id if you want]</p>

      <br />
      <Link href="/">
        <a>Back to Index</a>
      </Link>
    </>
  );
}
