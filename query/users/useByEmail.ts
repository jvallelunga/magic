import { useQuery } from "@tanstack/react-query";


export const useByEmail = ({ params }, options = {}) => {
  return useQuery({
    queryKey: ["user", "email", params.email],
    queryFn: async () => {
      const response = await fetch(`/api/user/email/${params.email}`);
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json();
    },
    ...options,
  });
};
