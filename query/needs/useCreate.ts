import { useMutation } from "@tanstack/react-query";

import { queryClient } from "context/QueryClientProvider";

export const useCreate = () => {
  return useMutation({
    mutationFn: async ({ body }) => {
      const response = await fetch("/api/need", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["needs"] });
      queryClient.setQueryData(["needs", data?.id], data);
    },
  });
};