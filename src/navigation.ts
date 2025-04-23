import { getPermalink, getBlogPermalink } from './utils/permalinks';

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
      text: 'Reviews',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('gaming', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('gaming', 'tag'),
      //   },
      // ],
    },
    {
      text: 'Search',
      icon: 'tabler:search',  // Add icon property
      href: getPermalink(''), 
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Links 1',
      links: [
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
      ],
    },
    {
      title: 'Links 2',
      links: [
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
      ],
    },
    {
      title: 'Links 3',
      links: [
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
        { text: 'LINK NAME', href: '#' },
      ],
    },
    // {
    //   title: 'Links 4',
    //   links: [
    //     { text: 'LINK NAME', href: '#' },
    //     { text: 'LINK NAME', href: '#' },
    //     { text: 'LINK NAME', href: '#' },
    //   ],
    // },
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
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="~/assets/images/kittycode-icon.png" alt="logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.kittycodecreative.com/" target="_blank"> KittyCode Creative</a> with ❤️
  `,
};
