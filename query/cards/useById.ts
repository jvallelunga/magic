import { useQuery } from "@tanstack/react-query";


// https://api.scryfall.com/cards/search?q={keyphrase}
export const useById = ({ params }, options = {}) => {
  const url = `https://api.scryfall.com/cards/${params.id}`;

  return useQuery({
    queryKey: ["cards", params.id],
    queryFn: async () => {
      const response = await fetch(url);
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



