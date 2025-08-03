module.exports = {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
      '0%, 100%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
    },
    textGlow: {
      '0%': {
        textShadow: '0 0 10px #ff4d4d, 0 0 20px #ff4d4d',
      },
      '100%': {
        textShadow: '0 0 20px #ff1a1a, 0 0 40px #ff1a1a',
      },
    },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in-up': 'fadeInUp 1s ease-out',
        'slide-in': 'slideIn 1.2s ease-out',
        'gradient-x': 'gradientX 2s ease-in-out infinite',
    'text-glow': 'textGlow 1.5s ease-in-out infinite alternate',
    'fade-in': 'fadeIn 1s ease-out',
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
     fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: ["class"],
};
