import mockData from '../mock-data.json';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  content: string;
  readingTime: string;
}

export interface WeeklyPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  source: string[];
  content: string;
  sections: {
    content: string;
    tags: string[];
    category: string;
    source: string;
  }[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
}

// 获取所有博客文章
export async function getBlogPosts(): Promise<BlogPost[]> {
  return mockData.blogs.map(blog => ({
    ...blog,
    date: new Date(blog.date).toISOString()
  }));
}

// 根据slug获取单个博客文章
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const blogs = await getBlogPosts();
  return blogs.find(blog => blog.slug === slug);
}

// 获取所有周刊
export async function getWeeklyPosts(): Promise<WeeklyPost[]> {
  return mockData.weekly.map(weekly => ({
    ...weekly,
    date: new Date(weekly.date).toISOString()
  }));
}

// 根据slug获取单个周刊
export async function getWeeklyPost(slug: string): Promise<WeeklyPost | undefined> {
  const weeklies = await getWeeklyPosts();
  return weeklies.find(weekly => weekly.slug === slug);
}

// 获取最新的周刊列表
export async function getLatestWeeklyPosts(limit: number = 5): Promise<WeeklyPost[]> {
  const weeklies = await getWeeklyPosts();
  return weeklies
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// 获取所有博客分类
export async function getBlogCategories(): Promise<string[]> {
  const blogs = await getBlogPosts();
  const categories = [...new Set(blogs.map(blog => blog.category))];
  return categories.sort();
}

// 获取所有标签
export async function getAllTags(): Promise<string[]> {
  const blogs = await getBlogPosts();
  const weeklies = await getWeeklyPosts();
  
  const blogTags = blogs.flatMap(blog => blog.tags);
  const weeklyTags = weeklies.flatMap(weekly => weekly.tags);
  
  const allTags = [...new Set([...blogTags, ...weeklyTags])];
  return allTags.sort();
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return mockData.site;
}

// 根据分类获取博客文章
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const blogs = await getBlogPosts();
  return blogs.filter(blog => blog.category === category);
}

// 根据标签获取内容
export async function getContentByTag(tag: string): Promise<{blogs: BlogPost[], weeklies: WeeklyPost[]}> {
  const blogs = await getBlogPosts();
  const weeklies = await getWeeklyPosts();
  
  return {
    blogs: blogs.filter(blog => blog.tags.includes(tag)),
    weeklies: weeklies.filter(weekly => weekly.tags.includes(tag))
  };
}

// 搜索内容
export async function searchContent(query: string): Promise<{blogs: BlogPost[], weeklies: WeeklyPost[]}> {
  const blogs = await getBlogPosts();
  const weeklies = await getWeeklyPosts();
  
  const searchTerm = query.toLowerCase();
  
  return {
    blogs: blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.content.toLowerCase().includes(searchTerm) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    ),
    weeklies: weeklies.filter(weekly =>
      weekly.title.toLowerCase().includes(searchTerm) ||
      weekly.content.toLowerCase().includes(searchTerm) ||
      weekly.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  };
}
