export type CardProps = {
  item: GetCollectionData;
  contract: Contract;
  display?: string;
};
export type Contract = {
  address: string;
  chain: string;
};

export type GetCollectionData = {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: number;
  contracts: Contract[];
};
