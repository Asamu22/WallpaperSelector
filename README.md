<div align="center">
  <img src="public/icon.png" alt="Wallpaper Studio Logo" width="120" height="120">
  
  # 🎨 Wallpaper Studio
  
  **A beautiful Electron desktop application for browsing and managing stunning wallpapers**
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Electron](https://img.shields.io/badge/Electron-28.0.0-47848F?logo=electron)](https://www.electronjs.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
  
  [Download App](https://drive.google.com/file/d/1Y94zgo3SPhkVju_6cVQhqZGBcW6Kq7qk/view?usp=drive_link) • [Demo Video](https://drive.google.com/file/d/16UHi6cIg9o9V2F0y3wWxdzShrerW475J/view?usp=drive_link) • [Figma Design](https://www.figma.com/design/WnHFPfZ7uW2vxy4sHqtb12/MOBILE-WALLPAPER-SELECTOR?node-id=0-1&p=f&t=2uDO3enoMFIThi2n-0) • [Documentation](#-documentation)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Download](#-download)
- [Demo](#-demo)
- [Design](#-design)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Building](#-building)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

Wallpaper Studio is a modern, cross-platform desktop application built with Electron that allows users to browse, preview, and manage beautiful wallpapers across multiple categories. With a clean and intuitive interface, users can easily discover new wallpapers, save their favorites, and customize their desktop experience.

---

## ✨ Features

### 🖼️ **Wallpaper Management**
- Browse wallpapers across 6 curated categories (Nature, Abstract, Urban, Space, Minimalist, Animals)
- High-quality wallpaper previews with smooth transitions
- Grid and list view modes for flexible browsing
- Detailed wallpaper information with tags and descriptions

### ❤️ **Favorites System**
- Save your favorite wallpapers for quick access
- Beautiful favorites gallery with vertical card layout
- One-click add/remove from favorites
- Persistent favorites across app sessions

### ⚙️ **Settings & Customization**
- Image quality settings (Low, Medium, High, Ultra)
- Notification preferences
- Device connection management
- Phone mockup preview for mobile wallpapers
- Toast notifications for user feedback

### 🎨 **Modern UI/UX**
- Clean, minimal design with gradient accents
- Smooth animations and transitions
- Responsive layout
- Hover effects and interactive elements
- Custom scrollbars and styling

---

## 📥 Download

### Windows
Download the latest release for Windows:

**[⬇️ Download Wallpaper Studio 1.0.0 for Windows (.exe)](https://github.com/Asamu22/WallpaperSelector/releases/latest)**

> **Note:** The app is approximately 70 MB. Windows may show a security warning for unsigned apps - click "More info" and "Run anyway" to proceed.

### System Requirements
- **OS:** Windows 10 or later
- **RAM:** 4 GB minimum
- **Storage:** 100 MB free space
- **Internet:** Required for loading wallpaper images

---

## 🎬 Demo

### Video Demo
Watch the full walkthrough of Wallpaper Studio:

**[▶️ View Demo Video](https://drive.google.com/file/d/16UHi6cIg9o9V2F0y3wWxdzShrerW475J/view?usp=drive_link)**

### Live Preview
Experience the web version:

**[🌐 Live Demo](YOUR_DEPLOYED_WEB_VERSION_LINK_HERE)**

*Optional - Deploy to Vercel/Netlify and add the link here*

---

## 🎨 Design

### Figma Design File
View the complete design system and UI mockups:

**[🎨 Figma Design - Mobile Wallpaper Selector](https://www.figma.com/design/WnHFPfZ7uW2vxy4sHqtb12/MOBILE-WALLPAPER-SELECTOR?node-id=0-1&p=f&t=2uDO3enoMFIThi2n-0)**

### Design System
- **Primary Colors:** 
  - Orange: `#FBB03B`, `#FFA821`
  - Red: `#EC0C43`
- **Neutral Colors:**
  - Dark: `#1A1A1A`
  - Gray: `#666666`
  - Light Gray: `#F5F5F5`
- **Typography:**
  - Headings: Clash Display (60px, 20px)
  - Body: Inter (16px)
  - Captions: Inter (12px, 14px)
- **Spacing:** Consistent 4px grid system
- **Border Radius:** 12px, 14px, 40px (rounded buttons)

---

## 📸 Screenshots

### Home Page
*Browse wallpapers by category with beautiful card layouts*

### Category View
*Explore wallpapers in grid or list view with detailed previews*

### Favorites
*Access your saved wallpapers in a dedicated gallery*

### Settings
*Customize your experience with various options*

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Navigation and routing
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **React Hot Toast 2.6.0** - Toast notifications

### Desktop Framework
- **Electron 28.0.0** - Cross-platform desktop apps
- **Electron Builder 24.9.1** - Package and build

### Build Tools
- **Vite 5.0.8** - Fast build tool and dev server
- **PostCSS 8.4.32** - CSS processing
- **Autoprefixer 10.4.16** - CSS vendor prefixing

### Development Tools
- **Concurrently 8.2.2** - Run multiple commands
- **Wait-on 7.2.0** - Wait for resources
- **Cross-env 7.0.3** - Cross-platform environment variables

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asamu22/WallpaperSelector.git
   cd WallpaperSelector
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages including React, Electron, Vite, and Tailwind CSS.

### Running the App

#### Web Development Mode
Run the app in your browser for quick development:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

#### Electron Development Mode
Run the app as an Electron desktop application:

```bash
npm run electron:dev
```

This will:
- Start the Vite dev server
- Launch the Electron app
- Enable hot module replacement (HMR)
- Open DevTools automatically

#### Production Preview
Preview the production build:

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
wallpaper-studio/
├── electron/                 # Electron main process
│   └── main.js              # Electron entry point
├── public/                   # Static assets
│   └── icon.png             # App icon
├── src/
│   ├── assets/              # Images and static files
│   │   └── images/          # Category images
│   ├── components/          # Reusable React components
│   │   ├── ActiveWallpaperCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── EmptyFavorites.jsx
│   │   ├── Navbar.jsx
│   │   └── SetWallpaperModal.jsx
│   ├── config/              # Configuration files
│   │   └── designSystem.js  # Design tokens
│   ├── context/             # React Context API
│   │   └── WallpaperContext.jsx
│   ├── data/                # Static data
│   │   ├── categories.js    # Category definitions
│   │   └── wallpapers.js    # Wallpaper data
│   ├── pages/               # Page components
│   │   ├── Browse.jsx       # Browse all wallpapers
│   │   ├── CategoryWallpapers.jsx
│   │   ├── Favourites.jsx   # Saved wallpapers
│   │   ├── Home.jsx         # Landing page
│   │   └── Settings.jsx     # App settings
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore rules
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

---

## 🔨 Building

### Build for Production

#### Build Web Version
Create an optimized production build:

```bash
npm run build
```

Output will be in the `dist/` folder.

#### Build Electron App (Windows)
Create a Windows executable:

```bash
npm run electron:build
```

This will:
1. Build the React app with Vite
2. Package it with Electron
3. Create a portable `.exe` file in the `release/` folder

The build process takes 1-2 minutes and produces:
- `Wallpaper Studio 1.0.0.exe` - Portable executable (~70 MB)
- `win-unpacked/` - Unpacked application files

#### Build Configuration
The build settings are configured in `package.json`:
- **App ID:** `com.wallpaperstudio.app`
- **Product Name:** Wallpaper Studio
- **Target:** Portable executable (no installer)
- **Output Directory:** `release/`

### Troubleshooting Build Issues

**Issue: "Cannot create symbolic link" error**
- **Solution:** Enable Windows Developer Mode
  1. Go to Settings → Update & Security → For Developers
  2. Turn on "Developer Mode"
  3. Restart your terminal and try again

**Issue: Build fails with code signing errors**
- **Solution:** The app is configured to skip code signing for local builds

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Unsplash** - For providing beautiful free wallpaper images
- **Figma Community** - For design inspiration
- **Electron** - For making cross-platform desktop apps possible
- **React & Vite** - For the amazing development experience

---

## 📞 Contact & Links

- **GitHub Repository:** [https://github.com/Asamu22/WallpaperSelector](https://github.com/Asamu22/WallpaperSelector)
- **Issues:** [Report a bug or request a feature](https://github.com/Asamu22/WallpaperSelector/issues)
- **Figma Design:** [View Design File](https://www.figma.com/design/WnHFPfZ7uW2vxy4sHqtb12/MOBILE-WALLPAPER-SELECTOR?node-id=0-1&p=f&t=2uDO3enoMFIThi2n-0)
- **App Description Video:** [View Video](https://drive.google.com/file/d/16UHi6cIg9o9V2F0y3wWxdzShrerW475J/view)
- **Download App** [Download](https://drive.google.com/file/d/1Y94zgo3SPhkVju_6cVQhqZGBcW6Kq7qk/view?usp=drive_link)

---

<div align="center">
  <p>Made with ❤️ by Asamu22</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
