// the profile router - http://localhost:3000/blog
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
export default function Blog() {
  return <h2>My Blog.....</h2>;
}
