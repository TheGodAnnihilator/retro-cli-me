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
    { type: 'list', content: 'about                 - Learn about Mark Gatere' },
    { type: 'list', content: 'skills                - View technical skills' },
    { type: 'list', content: 'projects              - Browse portfolio projects' },
    { type: 'list', content: 'experience            - View work history' },
    { type: 'list', content: 'education             - See educational background' },
    { type: 'list', content: 'contact               - Get contact information' },
    { type: 'list', content: 'themes                - View available color themes' },
    { type: 'list', content: 'theme <name>          - Change color theme' },
    { type: 'list', content: 'clear, cls            - Clear terminal screen' },
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
    { type: 'output', content: '║                      MARK GATERE                           ║' },
    { type: 'output', content: '╚════════════════════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Title:    Software Engineer || AI/ML' },
    { type: 'output', content: 'Location: Nairobi, Kenya' },
    { type: 'output', content: 'Company:  Microsoft' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Bio:' },
    { type: 'output', content: 'Full Stack Software and AI Engineer specializing in' },
    { type: 'output', content: 'JavaScript/TypeScript, Azure, AWS, and Artificial' },
    { type: 'output', content: 'Intelligence development.' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Passionate about building innovative solutions that' },
    { type: 'output', content: 'make a difference. From payment systems processing' },
    { type: 'output', content: '1000+ daily transactions to AI-powered applications' },
    { type: 'output', content: 'serving hundreds of users.' },
    { type: 'output', content: '' },
  ],
});

const skillsCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Technical Skills:' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Programming Languages' },
    { type: 'list', content: '• JavaScript/TypeScript  • Python  • SQL  • Rust' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Frameworks & Libraries' },
    { type: 'list', content: '• React.js  • Next.js  • Node.js  • TensorFlow' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Cloud Platforms' },
    { type: 'list', content: '• Microsoft Azure  • AWS  • Firebase' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Developer Tools' },
    { type: 'list', content: '• Git/GitHub  • Docker  • VS Code  • Linux' },
    { type: 'output', content: '' },
    { type: 'success', content: '→ Databases' },
    { type: 'list', content: '• MySQL  • PostgreSQL  • MongoDB' },
    { type: 'output', content: '' },
  ],
});

const projectsCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Portfolio Projects:' },
    { type: 'output', content: '' },
    { type: 'success', content: '1. Charge24 Africa' },
    { type: 'list', content: 'Payment portal with Next.js integrating 100+ dispensers' },
    { type: 'list', content: 'Tech: Next.js, Payment APIs, Real-time tracking' },
    { type: 'list', content: 'Metrics: 500-1,000+ daily transactions' },
    { type: 'list', content: 'Status: Production' },
    { type: 'output', content: '' },
    { type: 'success', content: '2. Lishebora' },
    { type: 'list', content: 'AI-powered meal planning solution' },
    { type: 'list', content: 'Tech: AI/ML, React, Backend APIs' },
    { type: 'list', content: 'Users: 300+' },
    { type: 'list', content: 'Status: Active' },
    { type: 'output', content: '' },
    { type: 'success', content: '3. SiGna AI' },
    { type: 'list', content: 'Sign language interpreter project' },
    { type: 'list', content: 'Tech: AI/ML, Computer Vision' },
    { type: 'list', content: 'Achievement: $1000 winner at Mt Kenya Innovation Week' },
    { type: 'list', content: 'Status: Award Winner' },
    { type: 'output', content: '' },
    { type: 'success', content: '4. Gatere Maps' },
    { type: 'list', content: 'Google Maps clone with interactive features' },
    { type: 'list', content: 'Tech: React.js, Maps API, Tailwind CSS' },
    { type: 'link', content: '→ GitHub: github.com/gateremark/google_maps_clone', href: 'https://github.com/gateremark/google_maps_clone' },
    { type: 'link', content: '→ Demo: gateremaps.vercel.app', href: 'https://gateremaps.vercel.app/' },
    { type: 'list', content: 'Status: Open Source' },
    { type: 'output', content: '' },
  ],
});

const experienceCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Work Experience:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Microsoft' },
    { type: 'list', content: 'Position: Garage and Ecosystem Intern' },
    { type: 'list', content: 'Duration: August 2024 - Present' },
    { type: 'list', content: 'Location: Nairobi, Kenya' },
    { type: 'list', content: 'Develop and implement AI integrated solutions improving' },
    { type: 'list', content: 'efficiency and user experience' },
    { type: 'output', content: '' },
    { type: 'success', content: 'FarCas Consult' },
    { type: 'list', content: 'Position: Software Engineer' },
    { type: 'list', content: 'Duration: June 2024 - February 2025' },
    { type: 'list', content: 'Location: Nairobi, Kenya' },
    { type: 'list', content: 'Led development of payment systems and admin dashboards' },
    { type: 'list', content: 'for multiple clients including Charge24 Africa' },
    { type: 'output', content: '' },
  ],
});

const educationCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Education:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Dedan Kimathi University of Technology' },
    { type: 'list', content: 'Degree: BSc. Information Technology' },
    { type: 'list', content: 'Focus: Machine Learning and Web Development' },
    { type: 'list', content: 'Year: 2021-2025' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Achievements & Leadership' },
    { type: 'list', content: '• Microsoft Learn Student Ambassador' },
    { type: 'list', content: '• Ex-Google Developer Student Clubs Lead' },
    { type: 'list', content: '• Technical Writer - Hashnode, Dev.to' },
    { type: 'output', content: '' },
  ],
});

const contactCommand = (): CommandResult => ({
  output: [
    { type: 'output', content: 'Contact Information:' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Email:' },
    { type: 'link', content: 'contact@gateremark.me', href: 'mailto:contact@gateremark.me' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Social Media:' },
    { type: 'link', content: 'GitHub: github.com/gateremark', href: 'https://github.com/gateremark' },
    { type: 'link', content: 'LinkedIn: linkedin.com/in/gateremark', href: 'https://linkedin.com/in/gateremark' },
    { type: 'link', content: 'Twitter: twitter.com/gatere_mark', href: 'https://twitter.com/gatere_mark' },
    { type: 'output', content: '' },
    { type: 'success', content: 'Portfolio & Blog:' },
    { type: 'link', content: 'Website: gateremark.me', href: 'https://gateremark.me' },
    { type: 'link', content: 'Blog: gateremark.hashnode.dev', href: 'https://gateremark.hashnode.dev' },
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
    { type: 'output', content: '/home/mark/portfolio' },
    { type: 'output', content: '' },
  ],
});

const sudoCommand = (): CommandResult => ({
  output: [
    { type: 'error', content: '[sudo] password for mark: ' },
    { type: 'error', content: 'Nice try! But this isn\'t a real terminal 😄' },
    { type: 'output', content: '' },
  ],
});

const whoamiCommand = (): CommandResult => ({
  output: [
    { type: 'success', content: 'You\'re viewing Mark Gatere\'s portfolio - the awesome developer!' },
    { type: 'output', content: '' },
  ],
});

const dateCommand = (): CommandResult => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Africa/Nairobi',
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
      { type: 'output', content: `Current time in Nairobi: ${now.toLocaleString('en-US', options)} EAT` },
      { type: 'output', content: '' },
    ],
  };
};
