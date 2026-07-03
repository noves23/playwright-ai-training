import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'iPhone 15',
      use: {
        ...devices['iPhone 15'],
      },
    },

    {
      name: 'iPad Pro 11',
      use: {
        ...devices['iPad Pro 11'],
      },
    },
  ],
});

//not just a viewport, but also user agent, device scale factor, and touch support
const config = {
  viewport,
  userAgent,
  deviceScaleFactor,
  isMobile,
  hasTouch,
  defaultBrowserType,
  ...
}