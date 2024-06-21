import { useQuery } from "@tanstack/react-query";


// https://api.scryfall.com/cards/search?q={keyphrase}
export const useSearch = ({ params }, options = {}) => {
  const url = "https://api.scryfall.com/cards/search";
  const search = new URLSearchParams(params).toString();

  return useQuery({
    queryKey: ["cards", "search", params],
    queryFn: async () => {
      const response = await fetch(`${url}?${search}`);
      console.log("[DEBUG] repsonse", response);
      if (!response.ok) {
        if (response.status === 404) {
          return { total_cards: 0 };
        }
        throw new Error('Network response was not ok')
      }
      return response.json();
    },
    ...options,
  });
};



