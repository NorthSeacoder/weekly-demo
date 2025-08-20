import { SITE } from '~/config';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));

const createPath = (...params: string[]) => {
    const paths = params
        .map((el) => trimSlash(el))
        .filter((el) => !!el)
        .join('/');
    return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

// 简化的permalink生成函数
export const getCanonical = (path = ''): string | URL => {
    const url = String(new URL(path, SITE.site));
    if (SITE.trailingSlash == false && path && url.endsWith('/')) {
        return url.slice(0, -1);
    } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
        return url + '/';
    }
    return url;
};

// 简化的资源路径生成
export const getAsset = (path: string): string => {
    return BASE_PATHNAME + trimSlash(path);
};

// 简化的permalink生成
export const getPermalink = (slug = '', type = 'page'): string => {
    if (
        slug.startsWith('https://') ||
        slug.startsWith('http://') ||
        slug.startsWith('://') ||
        slug.startsWith('#') ||
        slug.startsWith('javascript:')
    ) {
        return slug;
    }

    let permalink: string;

    switch (type) {
        case 'blog':
            permalink = createPath('/blog', slug);
            break;
        case 'weekly':
            permalink = createPath('/weekly', slug);
            break;
        case 'category':
            permalink = createPath('/blog/category', slug);
            break;
        case 'tag':
            permalink = createPath('/blog/tag', slug);
            break;
        case 'page':
        default:
            permalink = createPath(slug);
            break;
    }

    return definitivePermalink(permalink);
};

// 简化的首页链接
export const getHomePermalink = (): string => getPermalink('/');

// 简化的博客链接
export const getBlogPermalink = (): string => getPermalink('/blog');

// 简化的周刊链接
export const getWeeklyPermalink = (): string => getPermalink('/weekly');

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
