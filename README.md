# BloggerQinQin

A simple and elegant blog built with Gatsby. This project initially served as a starter template for creating a personal blog. The blog content and related files have now been archived under the `blog.old` directory as the focus shifts to building a personal profile website.

## 🚀 Project Structure

```
/
├── blog.old/
│   └── content/
│       └── blog/
│           └── hello-world/
│               └── index.md
├── src/
│   ├── components/
│   │   └── layout.js
│   └── pages/
│       └── index.js
├── gatsby-config.js
├── blog.old/
│   ├── about.js
│   ├── blogPost.js
│   └── gatsby-node.js
└── package.json
```

## 🧐 What's inside?

- **blog.old/content/blog**: Archived Markdown blog posts.
- **src/components**: React components used across the site.
- **src/pages**: React components that automatically become pages with URLs.
- **gatsby-config.js**: Defines the site metadata and Gatsby plugins configuration.
- **blog.old/gatsby-node.js**: Previous Gatsby Node API customization for the blog.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Install Node.js and npm if not already installed on your system
2. Install Gatsby CLI globally:
   ```shell
   npm install -g gatsby-cli
   ```
3. Install project dependencies:
   ```shell
   npm install
   ```

### Development

To start the development server:

```shell
npm run develop
```

The site will be available at http://localhost:8000

### Build

To build the production version:

```shell
npm run build
```

To serve the production build locally:

```shell
npm run serve
```

## 🧠 Learning Gatsby

Looking for more guidance? Here are some resources:

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/)
- [Gatsby Recipes](https://www.gatsbyjs.com/docs/recipes/)

## 📝 Adding Content

To add a new blog post (archived in `blog.old/content/blog`):

1. Create a new directory under `blog.old/content/blog` with a name related to your post
2. Create an `index.md` file inside this directory
3. Add the frontmatter at the top of the file:
   ```
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   description: "A brief description of your post"
   ---
   ```
4. Write your post content below the frontmatter using Markdown syntax

## 🎨 Customization

You can customize various aspects of the blog:

- Site metadata in `gatsby-config.js`
- Site layout in `src/components/layout.js`
- Page templates in `blog.old/blogPost.js`
- Archived pages such as `blog.old/about.js`

