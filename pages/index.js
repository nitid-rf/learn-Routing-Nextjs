import Link from "next/link";
// Link between pages by href

export default () => {
  return (
    <div>
      <h2>This is Index page</h2>
      <Link href="/landing">
        <a>Go to Landing page</a>
      </Link>
      <hr />
      <Link href="/authentication/1">
        <a>Go to Login by id (EXAMPLE: id 1)</a>
      </Link>
      <hr />

      <Link href="/api/contacts">
        <a>Go to API Routes All Contacts</a>
      </Link>
      <p>Data Mock on mock/contacts.js</p>
      <hr />
      <Link href="/api/contacts/1">
        <a>Go to API Routes First Contacts</a>
      </Link>
      <br />
      <br />
      <p>
        credit : https://devahoy.com/blog/2020/03/getting-started-with-nextjs/
      </p>
      <p>credit : https://nextjs.org/docs/routing/introduction</p>
    </div>
  );
};
