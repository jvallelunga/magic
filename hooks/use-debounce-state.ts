import { useState } from "react";

import { useDebounce } from "./use-debounce";

export function useDebounceState<T>(initValue: T, delay: number): [T, T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initValue);
  const debounceValue = useDebounce<T>(value, delay);

  return [debounceValue, value, setValue];
}
