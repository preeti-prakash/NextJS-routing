"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

// router.back() - to go back to the previous router that was in the browser's history stack
// router.forward() - move to the next URl page
// router.replace() - just set back to the "/" page
// router.push() - olace the new  URl to the history stack and move to that page
