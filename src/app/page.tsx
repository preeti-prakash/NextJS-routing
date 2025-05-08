// the basic router - http://localhost:3000
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome Home!!!</h1>
      <Link href="/blog">Blog</Link>
      <br></br>
      <Link href="/products">Products</Link>
    </>
  );
}
