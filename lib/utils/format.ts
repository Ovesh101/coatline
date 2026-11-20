/**
 * Formatting utilities used across features. Pure functions, no side effects.
 */

/** Short month + year — "Sep 2024". Locale: en-IN. */
export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

/** Full readable date — "12 September 2024". */
export function formatFullDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Indian number formatting with grouping — 120000 → "1,20,000". */
export function formatIndianNumber(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}
