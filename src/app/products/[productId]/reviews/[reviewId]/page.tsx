export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      The review for product {params.productId} is {params.reviewId}
    </h1>
  );
}
