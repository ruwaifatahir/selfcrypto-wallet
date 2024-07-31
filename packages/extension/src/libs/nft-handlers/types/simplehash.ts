import { NFTType } from "@/types/nft";

export interface SHNFTType {
  nft_id: string;
  chain: string;
  token_id: string;
  contract_address: string;
  name: string;
  description: string;
  image_url: string;
  video_url: string | null;
  audio_url: string | null;
  previews: {
    image_small_url: string;
    image_medium_url: string;
    image_large_url: string;
  };
  external_url: string;
  collection: {
    name: string;
    description: string;
    image_url: string;
    external_url: string;
    collection_id: string;
    spam_score: number;
  };
  contract: {
    name: string;
    type: NFTType;
  };
}
export interface SHOrdinalsNFTType extends SHNFTType {
  extra_metadata: {
    ordinal_details: {
      location: string;
      protocol_name: string;
    };
  };
}
export interface SHResponse {
  next: string;
  previous: string;
  nfts: SHNFTType[];
}

export interface SHOrdinalsResponse {
  next: string;
  previous: string;
  nfts: SHOrdinalsNFTType[];
}
