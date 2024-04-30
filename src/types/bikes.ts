import { Url } from 'url';

export type bikesType = {
  cycle_type_slug: string;
  date_stolen: number;
  description: string;
  external_id: number;
  frame_colors: Array<string>;
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: Url;
  location_found: string;
  manufacturer_name: string;
  propulsion_type_slug: string;
  registry_name: string;
  registry_url: Url;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: Array<number>;
  stolen_location: string;
  thumb: Url;
  title: string;
  url: Url;
  year: number;
};
export type countType = {
  non: number;
  proximity: number;
  stolen: number;
};
