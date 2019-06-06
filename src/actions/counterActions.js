import { INCREMENT, DECREMENT } from "./types";

export function increaseCount() {
  return { type: INCREMENT };
}

export function decreaseCount() {
  return { type: DECREMENT };
}
