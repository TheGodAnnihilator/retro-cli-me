import { Terminal as TerminalIcon, User, Briefcase, FolderOpen, Mail, Home } from 'lucide-react';

export const Taskbar = () => {
  const handleCommandClick = (command: string) => {
    const executeCommand = (window as any).__executeTerminalCommand;
    if (executeCommand) {
      executeCommand(command);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-5 h-5 text-terminal-success" />
          <span className="font-mono text-sm text-terminal-text font-semibold">
            Archit Rohatgi
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleCommandClick('home')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-terminal-comment hover:text-terminal-text transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
          <button 
            onClick={() => handleCommandClick('about')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-terminal-comment hover:text-terminal-text transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">About</span>
          </button>
          <button 
            onClick={() => handleCommandClick('experience')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-terminal-comment hover:text-terminal-text transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span className="hidden sm:inline">Experience</span>
          </button>
          <button 
            onClick={() => handleCommandClick('projects')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-terminal-comment hover:text-terminal-text transition-colors"
          >
            <FolderOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Projects</span>
          </button>
          <button 
            onClick={() => handleCommandClick('contact')}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-terminal-comment hover:text-terminal-text transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};
