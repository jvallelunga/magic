import { useQuery } from "@tanstack/react-query";

export const useSearch = ({ params }, options = {}) => {
  const url = "/api/have";
  const search = new URLSearchParams(params).toString();

  console.log("[DEBUG] useSearch", { url, search });
  return useQuery({
    queryKey: ["have", "search", params],
    queryFn: async () => {
      const response = await fetch(`${url}?${search}`);
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


