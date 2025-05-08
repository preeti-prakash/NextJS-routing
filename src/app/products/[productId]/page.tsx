import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
// Dynamic metadata function  configuration
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details of the product: {params.productId}</h1>;
}
