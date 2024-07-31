import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
type ThrottleFunction = (...args: any[]) => void;

export function throttle<T extends ThrottleFunction>(
  func: T,
  limit: number
): T {
  let lastCall = 0;

  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  } as T;
}
