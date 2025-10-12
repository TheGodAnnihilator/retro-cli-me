# 🖥️ Retro CLI Me

A nostalgic terminal-style personal portfolio website that brings the classic command-line interface to the modern web. Built with cutting-edge technologies while maintaining that retro computing aesthetic.

## ✨ Features

- **🎨 Retro Terminal Design**: Authentic command-line interface with vintage computer aesthetics
- **⚡ Modern Tech Stack**: Built with Vite, TypeScript, React, and Tailwind CSS
- **🎯 Interactive Commands**: Navigate through portfolio sections using familiar CLI commands
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices
- **🌙 Retro Color Scheme**: Classic green-on-black terminal styling with CRT effects
- **⚙️ Component Library**: Powered by shadcn-ui for consistent, accessible UI components

## 🚀 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Platform**: Lovable (for rapid development and deployment)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheGodAnnihilator/retro-cli-me.git
   cd retro-cli-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎮 Usage

Once the website loads, you'll be greeted with a retro terminal interface. Here are some common commands you can try:

```bash
help          # Display available commands
ls            # List directory contents
cd <section>  # Navigate to different portfolio sections
about         # Learn more about the developer
projects      # View project portfolio
skills        # Display technical skills
contact       # Get contact information
clear         # Clear the terminal screen
```

## 🏗️ Project Structure

```
retro-cli-me/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions and configurations
│   ├── types/         # TypeScript type definitions
│   └── App.tsx        # Main application component
├── public/            # Static assets
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the appearance by:
- Modifying the `tailwind.config.js` file
- Updating component styles in the respective component files
- Adjusting the color scheme and fonts in your CSS variables

### Commands
Add new terminal commands by:
1. Creating command handlers in the appropriate component
2. Adding command descriptions to the help system
3. Implementing the command logic and responses

### Content
Update your personal information by editing:
- Portfolio sections in the components
- Contact information
- Project details and links

## 🚀 Deployment

### Using Lovable Platform
This project is configured to work with Lovable:
1. Push your changes to the main branch
2. Changes will be automatically deployed via Lovable

### Manual Deployment
To deploy to other platforms:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform of choice (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ About the Developer

This portfolio showcases the work of a passionate developer who loves combining retro aesthetics with modern web technologies. The terminal interface reflects a deep appreciation for command-line tools and vintage computing culture.

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/TheGodAnnihilator/retro-cli-me/issues) page
2. Create a new issue if your problem isn't already documented
3. Provide as much detail as possible to help with troubleshooting

## ⭐ Acknowledgments

- Inspired by classic terminal interfaces and vintage computing
- Built with modern React ecosystem tools
- Special thanks to the open-source community for the amazing libraries used

---

**Made with ❤️ and a love for retro computing aesthetics**

*Experience the nostalgia of command-line interfaces with the power of modern web development.*
