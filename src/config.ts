import { getSiteConfig } from './utils/mock-data';

const siteConfig = getSiteConfig();

export const SITE = {
  name: siteConfig.name,
  site: siteConfig.url,
  base: '/',
  trailingSlash: false,
  
  title: siteConfig.name,
  description: siteConfig.description,
  defaultImage: '/og.jpg',
  
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  
  language: 'zh-CN',
  textDirection: 'ltr',
  
  dateFormatter: new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const APP_BLOG = {
  isEnabled: true,
  postsPerPage: 6,
  
  blog: {
    isEnabled: true,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
    categoryPathname: 'category', // set empty to change from /category/some-category to /some-category
    tagPathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
  
  weekly: {
    isEnabled: true,
    pathname: 'weekly', // weekly main path
  },
  
  category: {
    isEnabled: true,
    pathname: 'category', // category main path /category/some-category, you can change this to "group" (/group/some-category)
  },
  
  tag: {
    isEnabled: true,
    pathname: 'tag', // tag main path /tag/some-tag, you can change this to "topics" (/topics/some-tag)
  },
};

export const UI = {
  theme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const ANALYTICS = {
  isEnabled: false,
  googleAnalyticsId: '', // or "G-XXXXXXXXXX"
};

export const BLOG = APP_BLOG.blog;
export const WEEKLY = APP_BLOG.weekly;
export const CATEGORY = APP_BLOG.category;
export const TAG = APP_BLOG.tag;
