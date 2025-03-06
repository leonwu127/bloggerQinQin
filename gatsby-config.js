/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  // 设置 pathPrefix 为你的 GitHub 仓库名称
  // 这里我们假设你的仓库名称是 "bloggerQinQin"
  // 注意：如果你使用的是用户页面 (username.github.io)，则不需要设置 pathPrefix
  pathPrefix: "/bloggerQinQin",
  
  siteMetadata: {
    title: `BloggerQinQin`,
    description: `A personal blog built with Gatsby`,
    author: `QinQin`,
    siteUrl: `https://leonwu127.github.io/bloggerQinQin`, // 替换为你的 GitHub 用户名
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // 为不同的代码块添加自定义类名
              classPrefix: "language-",
              // 显示行号
              showLineNumbers: true,
              // 如果为true，则注释中的高亮显示行将被包装在div中
              noInlineHighlight: false,
              // 拷贝按钮
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // 使用的主题
              theme: "okaidia", // 其他选项: dracula, tomorrow, twilight, etc.
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
} 