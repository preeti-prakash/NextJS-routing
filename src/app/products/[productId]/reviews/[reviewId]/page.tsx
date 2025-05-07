import { notFound } from "next/navigation";
export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      The review for product {params.productId} is {params.reviewId}
    </h1>
  );
}
