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

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Posts', href: '#' },
      ],
    },
    {
      title: 'Posts',
      links: [
        { text: 'recent post', href: '#' },
        { text: 'recent post', href: '#' },
        { text: 'recent post', href: '#' },
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
