import { useQuery } from "@tanstack/react-query";


export const useById = ({ params }, options = {}) => {
  return useQuery({
    queryKey: ["user", params.id],
    queryFn: async () => {
      const response = await fetch(`/api/user/${params.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json();
    },
    ...options,
  });
};
