// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)



 /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'JavaScript教程',
      items: [
        'javascript/intro',
        'javascript/basic-syntax',
        'javascript/dom',
      ],
    },
  ],
  pythonSidebar: [
    'intro',
    {
      type: 'category',
      label: 'python教程',
      items: [
        'python/intro',
        'python/basic-syntax',
      ],
    },
  ],
};

module.exports = sidebars;