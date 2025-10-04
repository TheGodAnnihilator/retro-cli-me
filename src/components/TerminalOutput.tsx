import { TerminalLine } from '@/types/terminal';

interface TerminalOutputProps {
  lines: TerminalLine[];
}

export const TerminalOutput = ({ lines }: TerminalOutputProps) => {
  return (
    <div className="space-y-1">
      {lines.map((line, index) => (
        <div key={index} className={getLineClass(line.type)}>
          {line.type === 'command' ? (
            <div className="text-terminal-prompt terminal-glow">{line.content}</div>
          ) : line.type === 'error' ? (
            <div className="text-terminal-error">{line.content}</div>
          ) : line.type === 'link' ? (
            <a 
              href={line.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-link hover:underline terminal-glow"
            >
              {line.content}
            </a>
          ) : line.type === 'list' ? (
            <div className="ml-4">{line.content}</div>
          ) : (
            <div>{line.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const getLineClass = (type: TerminalLine['type']): string => {
  const baseClass = 'terminal-glow';
  
  switch (type) {
    case 'command':
      return `${baseClass} text-terminal-prompt`;
    case 'error':
      return `${baseClass} text-terminal-error`;
    case 'success':
      return `${baseClass} text-terminal-success`;
    case 'warning':
      return `${baseClass} text-terminal-warning`;
    case 'link':
      return `${baseClass} text-terminal-link`;
    case 'comment':
      return `${baseClass} text-terminal-comment`;
    default:
      return baseClass;
  }
};
