# Trendy Pulse

A fun, animated Next.js application that shows what's trending right now based on your location.

![Trendy Pulse Screenshot](https://via.placeholder.com/800x450.png?text=Trendy+Pulse+App+Screenshot)

## Features

- 🌍 **Location-Based Trends**: Shows trending content customized to your location
- 🎭 **Party Theme**: Fun animations, confetti, and colorful UI elements
- 📱 **Responsive Design**: Works on all devices - mobile, tablet, and desktop
- 🔍 **Category Filtering**: Filter trends by categories like news, tech, entertainment, and more
- 🌐 **API-Powered**: Uses free public APIs to get trending data (with fallback mock data)

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **GSAP** for complex animations (confetti)
- **React Icons** for beautiful, scalable icons
- **React Awesome Reveal** for scroll-based reveal animations

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository (or download the ZIP)
   ```
   git clone https://github.com/your-username/trendy-pulse.git
   ```

2. Navigate to the project directory
   ```
   cd trendy-pulse
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Run the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app

## Build for Production

```
npm run build
```

Then to start the production server:

```
npm start
```

## API Usage

The application uses free public APIs to get trending data:
- **IP Geolocation API**: To detect the user's location
- **Trending Data API**: A mock API with trending topics

If APIs fail, the application falls back to mock data based on the detected location.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern party-themed websites
- Icons from React Icons and Heroicons
- Fonts from Google Fonts

---

Built with ❤️ using Next.js
