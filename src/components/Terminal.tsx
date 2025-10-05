import { useState, useEffect, useRef } from 'react';
import { TerminalOutput } from './TerminalOutput';
import { executeCommand, getAutocomplete } from '@/lib/commands';
import { TerminalLine } from '@/types/terminal';

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: 'Welcome to Archit Rohatgi\'s Portfolio Terminal v1.0.0',
    },
    {
      type: 'system',
      content: 'Type "help" to see available commands.',
    },
    {
      type: 'system',
      content: '',
    },
  ]);
  const [theme, setTheme] = useState('green');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('terminal-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom on new output
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    // Focus input when clicking anywhere on terminal
    const handleClick = () => {
      inputRef.current?.focus();
    };
    terminalRef.current?.addEventListener('click', handleClick);
    return () => terminalRef.current?.removeEventListener('click', handleClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const command = input.trim();
    
    // Add command to output
    const newOutput: TerminalLine[] = [
      ...output,
      {
        type: 'command',
        content: `archit@portfolio:~$ ${command}`,
      },
    ];

    // Execute command
    const result = executeCommand(command, theme, setTheme);
    
    // Handle theme change
    if (result.theme) {
      document.documentElement.setAttribute('data-theme', result.theme);
      localStorage.setItem('terminal-theme', result.theme);
    }
    
    // Handle clear command
    if (result.clear) {
      setOutput([]);
      setInput('');
      return;
    }

    // Add result to output
    setOutput([...newOutput, ...result.output]);

    // Update history
    const newHistory = [...history, command];
    setHistory(newHistory);
    setHistoryIndex(-1);
    localStorage.setItem('terminal-history', JSON.stringify(newHistory.slice(-100)));

    // Clear input
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow up - previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
    
    // Arrow down - next command
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
    
    // Tab - autocomplete
    if (e.key === 'Tab') {
      e.preventDefault();
      const autocomplete = getAutocomplete(input);
      if (autocomplete) {
        setInput(autocomplete);
      }
    }
    
    // Ctrl+L - clear screen
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setOutput([]);
    }
    
    // Ctrl+C - clear input
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setInput('');
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="min-h-screen bg-terminal-bg text-terminal-text p-4 md:p-8 relative scan-lines"
    >
      <div className="max-w-6xl mx-auto">
        {/* Terminal window */}
        <div className="border border-terminal-border rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="bg-terminal-bg border-b border-terminal-border px-4 py-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-warning"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
            </div>
            <div className="flex-1 text-center text-sm text-terminal-comment">
              archit@portfolio: ~
            </div>
          </div>

          {/* Terminal output */}
          <div 
            ref={outputRef}
            className="bg-terminal-bg p-4 min-h-[500px] max-h-[600px] overflow-y-auto font-mono text-sm md:text-base"
          >
            <TerminalOutput lines={output} />

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-terminal-prompt terminal-glow mr-2">archit@portfolio:~$</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent outline-none text-terminal-text terminal-glow caret-transparent"
                  autoFocus
                  spellCheck={false}
                />
                <span className="terminal-cursor text-terminal-text absolute top-0 pointer-events-none" style={{ left: `${input.length * 0.6}em` }}>█</span>
              </div>
            </form>
          </div>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="mt-4 text-xs text-terminal-comment text-center space-x-4">
          <span>Tab: autocomplete</span>
          <span>↑↓: history</span>
          <span>Ctrl+L: clear</span>
          <span>Ctrl+C: cancel</span>
        </div>
      </div>
    </div>
  );
};
