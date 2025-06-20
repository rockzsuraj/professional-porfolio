// src/lib/logger.ts
type LogLevel = 'error' | 'warn' | 'info' | 'debug';

interface LogOptions {
  level?: LogLevel;
  context?: string;
  timestamp?: boolean;
}

class Logger {
  private static getTimestamp(): string {
    return new Date().toISOString();
  }

  private static formatMessage(
    level: LogLevel,
    message: string,
    options?: LogOptions
  ): string {
    const timestamp = options?.timestamp !== false ? `[${this.getTimestamp()}] ` : '';
    const context = options?.context ? `[${options.context}] ` : '';
    return `${timestamp}${level.toUpperCase()} ${context}${message}`;
  }

  static error(message: string, error?: unknown, options?: LogOptions): void {
    const fullMessage = error instanceof Error 
      ? `${message} - ${error.message} ${error.stack || ''}`
      : message;
    console.error(this.formatMessage('error', fullMessage, options));
  }

  static warn(message: string, options?: LogOptions): void {
    console.warn(this.formatMessage('warn', message, options));
  }

  static info(message: string, options?: LogOptions): void {
    console.log(this.formatMessage('info', message, options));
  }

  static debug(message: string, options?: LogOptions): void {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage('debug', message, options));
    }
  }
}

export default Logger;