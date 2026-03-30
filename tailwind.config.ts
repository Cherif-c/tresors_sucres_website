import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tsBurgundy: '#972240',
        tsCream: '#e7d9bd',
        tsGreen: '#045b47',
        tsDark: '#2a1320',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
