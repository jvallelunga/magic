import { useMutation } from "@tanstack/react-query";

import { queryClient } from "context/QueryClientProvider";

export const useCreate = () => {
  return useMutation({
    mutationFn: async ({ body }) => {
      const response = await fetch("/api/have", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["haves"] });
      queryClient.setQueryData(["haves", data?.id], data);
    },
  });
};