export interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success' | 'warning' | 'link' | 'system' | 'list' | 'comment';
  content: string;
  href?: string;
}

export interface CommandResult {
  output: TerminalLine[];
  clear?: boolean;
  theme?: string;
}
