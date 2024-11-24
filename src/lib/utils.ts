import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function os() {
  if (typeof window === "undefined") return null;
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (/(macintosh|macintel|macppc|mac68k|macos)/i.test(userAgent))
    return "macos";
  else if (/(iphone|ipad|ipod)/i.test(userAgent)) return "ios";
  else if (/(win32|win64|windows|wince)/i.test(userAgent)) return "windows";
  else if (/(android)/i.test(userAgent)) return "android";
  else if (/(linux)/i.test(userAgent)) return "linux";

  return null;
}
