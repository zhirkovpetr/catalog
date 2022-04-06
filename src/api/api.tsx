import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://artisant.io/api/products`,
})

export const productListAPI = {
  getProductList() {
    return instance.get<ProductListType>('')
  }
}

type ProductListType = {
  status: boolean;
  data: ProductDataType;
}

export type ProductDataType = {
  products: ProductsType[];
  creators: CreatedByType[];
  sortedProducts: ProductsType[];
}

export type ProductsType = {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: ImgType;
  other_file: OtherFileType;
  additional_photos: AdditionalPhotosType;
  created_by: CreatedByType;
  json_nft_data: JsonNftDataType;
  json_nft_link: string;
  tx_status: string;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: string;
  quantity_available: number;
}

export type JsonNftDataType = {
  attributes: AttributesType[];
  description: string;
  external_url: string;
  image: string;
  name: string;
}

type AttributesType = {
  trait_type: string;
  value: string;
}

type AdditionalPhotosType = ImgType[];

type ImgType = {
  original: string;
  compressed: string;
}

type OtherFileType = {
  original: string;
}

type CreatedByType = {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: ImgType;
}
