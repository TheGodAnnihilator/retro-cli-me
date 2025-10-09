import { CommandResult, TerminalLine } from '@/types/terminal';

const commands = {
  help: () => helpCommand(),
  '?': () => helpCommand(),
  commands: () => helpCommand(),
  
  about: () => aboutCommand(),
  skills: () => skillsCommand(),
  projects: () => projectsCommand(),
  experience: () => experienceCommand(),
  education: () => educationCommand(),
  contact: () => contactCommand(),
  
  clear: () => clearCommand(),
  cls: () => clearCommand(),
  home: () => homeCommand(),
  
  history: () => historyCommand(),
  
  themes: () => themesCommand(),
  
  // Easter eggs
  sudo: () => sudoCommand(),
  whoami: () => whoamiCommand(),
  date: () => dateCommand(),
  
  // Navigation commands
  ls: () => lsCommand(),
  pwd: () => pwdCommand(),
};

export const executeCommand = (
  input: string,
  currentTheme: string,
  setTheme: (theme: string) => void
): CommandResult => {
  const [cmd, ...args] = input.trim().toLowerCase().split(' ');
  
  // Handle theme command
  if (cmd === 'theme' && args.length > 0) {
    const newTheme = args[0];
    const validThemes = ['green', 'blue', 'amber', 'white', 'matrix'];
    
    if (validThemes.includes(newTheme)) {
      setTheme(newTheme);
      return {
        output: [
          { type: 'success', content: `Theme changed to: ${newTheme}` },
          { type: 'output', content: '' },
        ],
        theme: newTheme,
      };
    } else {
      return {
        output: [
          { type: 'error', content: `Invalid theme: ${newTheme}` },
          { type: 'output', content: `Available themes: ${validThemes.join(', ')}` },
          { type: 'output', content: '' },
        ],
      };
    }
  }
  
  // Execute command
  if (cmd in commands) {
    return commands[cmd as keyof typeof commands]();
  }
  
  // Command not found
  return {
    output: [
      { type: 'error', content: `Command not found: ${cmd}` },
      { type: 'output', content: 'Type "help" to see available commands.' },
      { type: 'output', content: '' },
    ],
  };
};

export const getAutocomplete = (input: string): string | null => {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return null;
  
  const matches = Object.keys(commands).filter(cmd => cmd.startsWith(trimmed));
  
  if (matches.length === 1) {
    return matches[0];
  }
  
  return null;
};

// Command implementations

const helpCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Available commands:' },
    { type: 'output', content: '' },
    { type: 'list', content: 'help, ?, commands     - Show this help message' },
    { type: 'list', content: 'about                 - Learn about Archit Rohatgi' },
    { type: 'list', content: 'skills                - View technical skills' },
    { type: 'list', content: 'projects              - Browse portfolio projects' },
    { type: 'list', content: 'experience            - View work history' },
    { type: 'list', content: 'education             - See educational background' },
    { type: 'list', content: 'contact               - Get contact information' },
    { type: 'list', content: 'themes                - View available color themes' },
    { type: 'list', content: 'theme <name>          - Change color theme' },
    { type: 'list', content: 'clear, cls            - Clear terminal screen' },
    { type: 'list', content: 'home                  - Return to welcome screen' },
    { type: 'list', content: 'history               - Show command history' },
    { type: 'output', content: '' },
    { type: 'comment', content: 'Navigation:' },
    { type: 'list', content: 'ls                    - List contents' },
    { type: 'list', content: 'pwd                   - Print working directory' },
    { type: 'output', content: '' },
  ],
});

const aboutCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: '╔════════════════════════════════════════════════════════════╗' },
    { type: 'output', content: '║                    ARCHIT ROHATGI                          ║' },
    { type: 'output', content: '╚════════════════════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Program:  B.Tech - Electronics and Communication' },
    { type: 'output', content: 'University: Netaji Subhash University of Technology' },
    { type: 'output', content: 'Year:     2026' },
    { type: 'output', content: 'Location: New Delhi, India' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Philosophy:' },
    { type: 'output', content: 'Aren\'t engineers creators first?' },
    { type: 'output', content: '' },
    { type: 'output', content: 'About:' },
    { type: 'output', content: 'I\'m Archit, an ECE student who likes turning vague ideas into' },
    { type: 'output', content: 'crisp, working systems. I build with a maker\'s curiosity and an' },
    { type: 'output', content: 'engineer\'s discipline - prototype fast, refine with intent, ship' },
    { type: 'output', content: 'reliably. I\'m hands-on across circuits, code, and security.' },
    { type: 'output', content: '' },
    { type: 'output', content: 'And when I\'m not debugging, I\'m questioning philosophy - it keeps' },
    { type: 'output', content: 'me honest about the why behind the what. I sometimes put those' },
    { type: 'output', content: 'experiences into words - not as a writer, just someone thinking' },
    { type: 'output', content: 'out loud.' },
    { type: 'output', content: '' },
    { type: 'output', content: 'If it solves a real problem and makes you raise an eyebrow and' },
    { type: 'output', content: 'nod, that\'s my kind of build.' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Leadership:' },
    { type: 'output', content: 'Director of Ashwamedh - The Dramatics Society of NSUT' },
    { type: 'output', content: 'Author of "Tears of Ichor"' },
    { type: 'output', content: '' },
  ],
});

const skillsCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Technical Skills:' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Programming Languages' },
    { type: 'list', content: '• Python (Advanced)  • SQL (Intermediate)' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Development Tools' },
    { type: 'list', content: '• Git/GitHub (Advanced)  • PyCharm (Advanced)' },
    { type: 'list', content: '• Visual Studio Code (Intermediate)' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Machine Learning & Data' },
    { type: 'list', content: '• OpenCV (Intermediate)  • NumPy (Intermediate)' },
    { type: 'list', content: '• Pandas (Intermediate)  • Scikit-learn (Beginner)' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Data Analysis & Visualization' },
    { type: 'list', content: '• Power BI (Beginner)  • Excel (Intermediate)' },
    { type: 'list', content: '• Data Analytics (Beginner)' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Database Management' },
    { type: 'list', content: '• SQL (Intermediate)  • MySQL  • Database Design' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Content Creation Tools' },
    { type: 'list', content: '• Canva (Intermediate)  • PowerPoint (Advanced)' },
    { type: 'list', content: '• Markdown (Advanced)' },
    { type: 'output', content: '' },
  ],
});

const projectsCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Portfolio Projects:' },
    { type: 'output', content: '' },
    { type: 'success', content: '1. Schedule Plus - Desktop Application' },
    { type: 'list', content: 'Cross-platform management app for clients, projects & time tracking' },
    { type: 'list', content: 'Tech: Python, Tkinter, MySQL' },
    { type: 'list', content: 'Features: Lazy-loading architecture, tabbed GUI interface' },
    { type: 'list', content: 'Status: Production' },
    { type: 'output', content: '' },
    { type: 'success', content: '2. MTS to MP4 Video Converter' },
    { type: 'list', content: 'Comprehensive video conversion with GUI & CLI' },
    { type: 'list', content: 'Tech: Python, FFmpeg' },
    { type: 'list', content: 'Features: Drag-and-drop, real-time progress tracking' },
    { type: 'list', content: 'Platform: Cross-platform (Windows, macOS, Linux)' },
    { type: 'output', content: '' },
    { type: 'success', content: '3. Advanced Keylogger System' },
    { type: 'list', content: 'Sophisticated monitoring system with encryption' },
    { type: 'list', content: 'Tech: Python, Fernet Cryptography' },
    { type: 'list', content: 'Features: Email reporting, screenshot capture, stealth mode' },
    { type: 'list', content: 'Status: Security Research' },
    { type: 'output', content: '' },
  ],
});

const experienceCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Work Experience & Internships:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Schedule Plus, USA (Remote)' },
    { type: 'list', content: 'Position: Python Developer Intern' },
    { type: 'list', content: 'Duration: June 2025 - August 2025' },
    { type: 'list', content: 'Tech: Python, Tkinter, MySQL' },
    { type: 'output', content: '' },
    { type: 'list', content: '• Developed cross-platform desktop app with tabbed GUI' },
    { type: 'list', content: '• Engineered lazy-loading manager classes for optimization' },
    { type: 'list', content: '• Designed intuitive interfaces using Tkinter & themed widgets' },
    { type: 'list', content: '• Integrated MySQL backend for secure data management' },
    { type: 'list', content: '• Authored comprehensive documentation for deployment' },
    { type: 'output', content: '' },
  ],
});

const educationCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Education:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Netaji Subhash University of Technology' },
    { type: 'list', content: 'Degree: B.Tech - Electronics and Communication' },
    { type: 'list', content: 'CGPA: 6.0/10.0' },
    { type: 'list', content: 'Expected Graduation: 2026' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Class XII - Ahlcon Public School, New Delhi' },
    { type: 'list', content: 'Board: CBSE' },
    { type: 'list', content: 'Percentage: 85%' },
    { type: 'list', content: 'Year: 2022' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Class X - Mayoor School, Noida' },
    { type: 'list', content: 'Board: CBSE' },
    { type: 'list', content: 'Percentage: 94%' },
    { type: 'list', content: 'Year: 2020' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Achievements & Leadership' },
    { type: 'list', content: '• Director, Ashwamedh - The Dramatics Society of NSUT' },
    { type: 'list', content: '• Author of "Tears of Ichor"' },
    { type: 'list', content: '• Directed annual production "टी.बी.डी."' },
    { type: 'list', content: '• Adapted play "Aisa Kehte Hai" by Manav Kaul' },
    { type: 'output', content: '' },
  ],
});

const contactCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Contact Information:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Email:' },
    { type: 'link', content: 'architrohatgi@gmail.com', href: 'mailto:architrohatgi@gmail.com' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Phone:' },
    { type: 'output', content: '+91 8448660938' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Social Media:' },
    { type: 'link', content: 'LinkedIn: linkedin.com/in/archit-rohatgi', href: 'https://linkedin.com/in/archit-rohatgi' },
    { type: 'link', content: 'GitHub: github.com/archit-rohatgi', href: 'https://github.com/archit-rohatgi' },
    { type: 'link', content: 'Instagram: instagram.com/arcrohatgi', href: 'https://www.instagram.com/arcrohatgi/' },
    { type: 'output', content: '' },
  ],
});

const themesCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Available Themes:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Usage: theme <name>' },
    { type: 'output', content: '' },
    { type: 'list', content: 'green   - Classic Matrix green (default)' },
    { type: 'list', content: 'blue    - Ocean blue terminal' },
    { type: 'list', content: 'amber   - Vintage amber monitor' },
    { type: 'list', content: 'white   - Classic white phosphor' },
    { type: 'list', content: 'matrix  - Matrix digital rain style' },
    { type: 'output', content: '' },
    { type: 'comment', content: 'Example: theme blue' },
    { type: 'output', content: '' },
  ],
});

const clearCommand = (): CommandResult => ({
  output: [],
  clear: true,
});

const homeCommand = (): CommandResult => ({
  output: [
    { type: 'system', content: "Welcome to Archit Rohatgi's Portfolio Terminal v1.0.0" },
    { type: 'system', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' },
  ],
  clear: true,
});

const historyCommand = (): CommandResult => {
  const history = localStorage.getItem('terminal-history');
  const commands = history ? JSON.parse(history) : [];
  
  return {
    output: [
      { type: 'output', content: 'Command History:' },
      { type: 'output', content: '' },
      ...commands.map((cmd: string, i: number) => ({
        type: 'list' as const,
        content: `${i + 1}  ${cmd}`,
      })),
      { type: 'output', content: '' },
    ],
  };
};

const lsCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'total 7' },
    { type: 'list', content: 'about.txt' },
    { type: 'list', content: 'skills.txt' },
    { type: 'list', content: 'projects/' },
    { type: 'list', content: 'experience.txt' },
    { type: 'list', content: 'education.txt' },
    { type: 'list', content: 'contact.txt' },
    { type: 'list', content: 'README.md' },
    { type: 'output', content: '' },
  ],
});

const pwdCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: '/home/archit/portfolio' },
    { type: 'output', content: '' },
  ],
});

const sudoCommand = (): CommandResult => {
  // Easter egg: Redirect to Rick Roll - use top window to avoid iframe restrictions
  setTimeout(() => {
    const targetWindow = window.top || window.parent || window;
    targetWindow.open('https://youtu.be/dQw4w9WgXcQ?si=xavurQVtjTvtIYph', '_blank');
  }, 500);
  
  return {
    output: [
      { type: 'error', content: '[sudo] password for archit: ' },
      { type: 'success', content: 'Access granted! Redirecting to secure terminal...' },
      { type: 'output', content: '' },
    ],
  };
};

const whoamiCommand = (): CommandResult => ({
  output: [
    { type: 'success', content: 'You\'re viewing Archit Rohatgi\'s portfolio - the awesome developer!' },
    { type: 'output', content: '' },
  ],
});

const dateCommand = (): CommandResult => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  
  return {
    output: [
      { type: 'output', content: `Current time in New Delhi: ${now.toLocaleString('en-US', options)} IST` },
      { type: 'output', content: '' },
    ],
  };
};
