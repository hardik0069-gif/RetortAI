import { useMemo } from "react";
import { getRandomTagline } from "../utils/getRandomTagline";

function useRandomTagline() {
  const tagline = useMemo(() => getRandomTagline(), []);

  return tagline;
}

export default useRandomTagline;