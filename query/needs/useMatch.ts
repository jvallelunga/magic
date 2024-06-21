import { useQuery } from "@tanstack/react-query";
import * as Haves from "../haves";
import { useSearch } from "./useSearch";


export const useMatch = ({ params }, options = {}) => {
  const { data } = useSearch({ params });

  const where = {
    scryfallId: {
      in: data?.map((need) => need.scryfallId),
    }
  }

  return Haves.useSearch({ params: { where: JSON.stringify(where) } }, { enabled: !!data});
};


