import { Question } from "@/components/data/schema";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProblemLink = (problem: Question): string => {
  return `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`;
};
