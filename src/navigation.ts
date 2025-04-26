import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { fetchPosts } from './utils/blog';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Posts',
      href: getBlogPermalink(),
    },
    {
      text: 'Search',
      icon: 'tabler:search',  // Add icon property
      href: getPermalink('/search'), 
    },
  ],
};

// Async function to get footer data with dynamic posts
export async function getFooterData() {
  // Fetch all posts
  const allPosts = await fetchPosts();
  
  // Get the 3 most recent posts
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
    .slice(0, 3);
  
  return {
    links: [
      {
        title: 'Site',
        links: [
          { text: 'Home', href: getPermalink('/') },
          { text: 'About', href: getPermalink('/about') },
          { text: 'Posts', href: getBlogPermalink() },
        ],
      },
      {
        title: 'Posts',
        links: recentPosts.map(post => ({
          text: post.title,
          href: getPermalink(post.permalink, 'post')
        })),
      },
    ],
    secondaryLinks: [
      { text: 'Terms', href: getPermalink('/terms') },
      { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'Steam', icon: 'tabler:brand-steam', href: '#' },
    ],
    footNote: `
      <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.kittycodecreative.com/images/kittycode_logo.svg" alt="Logo" loading="lazy"></img>
      Made by <a class="text-orange-500 hover:text-orange-700" href="https://www.kittycodecreative.com/" target="_blank"> KittyCode Creative</a>
    `,
  };
}

// For compatibility with existing code, provide a default export
// This allows code that uses footerData directly to still work,
// though it won't have dynamic content
export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Posts', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Posts',
      links: [
        { text: 'Loading recent posts...', href: getBlogPermalink() },
        { text: 'See all posts', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Steam', icon: 'tabler:brand-steam', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.kittycodecreative.com/images/kittycode_logo.svg" alt="Logo" loading="lazy"></img>
    Made by <a class="text-orange-500 hover:text-orange-700" href="https://www.kittycodecreative.com/" target="_blank"> KittyCode Creative</a>
  `,
};