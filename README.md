# BloggerQinQin

Originally this repository hosted a Gatsby blog. That blog has been moved into the `blog.old` directory for reference. The current project is a personal profile website that highlights my experience, education and skills.

## 🚀 Project Structure

```
/
├── blog.old/          # archived blog implementation
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── styles/
├── static/
├── gatsby-config.js
└── package.json
```

## 🧐 What's inside?

- **blog.old/content/blog**: Archived Markdown blog posts.
- **src/components**: React components that build the profile UI.
- **src/pages**: Gatsby pages for the profile website.
- **src/data**: Structured data used to render profile content.
- **gatsby-config.js**: Site metadata and Gatsby plugin configuration.
- **blog.old/gatsby-node.js**: Build customization for the archived blog.

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

## 📝 Editing Profile Content

Profile details are defined in the files inside `src/data`. Update these JSON-like modules to change your experience, education, interests and skills.

The previous blog workflow still exists under `blog.old/content/blog` if you want to add or edit Markdown posts.

## 🎨 Customization

You can customize various aspects of the profile site:

- Site metadata in `gatsby-config.js`
- Layout components in `src/components/`
- Data files in `src/data/`
- Archived blog templates in `blog.old/`

