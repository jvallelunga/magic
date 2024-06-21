import { useQuery } from "@tanstack/react-query";
import * as Needs from "../needs";
import { useSearch } from "./useSearch";


export const useMatch = ({ params }, options = {}) => {
  const { data } = useSearch({ params });

  const where = {
    scryfallId: {
      in: data?.map((have) => have.scryfallId),
    }
  }

  return Needs.useSearch({ params: { where: JSON.stringify(where) } }, { enabled: !!data});
};


