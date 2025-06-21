import Logger from '@/lib/logger';
import { format, parseISO } from 'date-fns';

/**
 * Formats an ISO date string into a human-readable format
 * 
 * @param isoDate - The ISO date string (e.g. "2025-06-14T10:13:15Z")
 * @param formatString - Optional format string (default: 'MMMM d, yyyy')
 * @returns Formatted date string
 * 
 * @example
 * formatDate("2025-06-14T10:13:15Z") → "June 14, 2025"
 * formatDate("2025-06-14T10:13:15Z", 'MM/dd/yyyy') → "06/14/2025"
 */
export function formatDate(
  isoDate: string, 
  formatString: string = 'MMMM d, yyyy'
): string {
  try {
    return format(parseISO(isoDate), formatString);
  } catch (error) {
    Logger.error("Invalid date format:", error);
    return 'Invalid date';
  }
}

/**
 * Predefined date formats for common use cases
 */
export const DateFormats = {
  FULL: 'MMMM d, yyyy',      // June 14, 2025
  SHORT: 'MMM d, yyyy',      // Jun 14, 2025
  NUMERIC_US: 'M/d/yyyy',    // 6/14/2025
  NUMERIC_EU: 'd/M/yyyy',    // 14/6/2025
  ISO: 'yyyy-MM-dd',         // 2025-06-14
  TIME: 'h:mm a',            // 10:13 AM
  DATETIME: 'MMM d, yyyy h:mm a' // Jun 14, 2025 10:13 AM
};