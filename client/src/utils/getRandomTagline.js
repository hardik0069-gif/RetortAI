import { TAGLINES } from "../constants/taglines";

export function getRandomTagline() {
  const index = Math.floor(Math.random() * TAGLINES.length);

  return TAGLINES[index];
}