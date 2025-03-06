# 部署到 GitHub Pages 的步骤

本文档详细介绍了如何将你的 Gatsby 博客部署到 GitHub Pages。

## 准备工作

1. 确保你已经有一个 GitHub 账号
2. 确保你已经创建了一个 GitHub 仓库用于存放博客代码
3. 确保你已经将博客代码推送到该仓库

## 部署步骤

### 1. 安装依赖

首先确保你已经安装了所有必要的依赖：

```bash
npm install
```

### 2. 配置部署设置

打开 `gatsby-config.js` 文件，确保 `pathPrefix` 设置正确：

```js
module.exports = {
  pathPrefix: "/你的仓库名称",
  // ...其他配置
}
```

如果你使用的是 `username.github.io` 作为仓库名称，则不需要设置 `pathPrefix`。

### 3. 更新站点 URL

同样在 `gatsby-config.js` 文件中，确保 `siteUrl` 设置正确：

```js
siteMetadata: {
  // ...其他元数据
  siteUrl: `https://你的用户名.github.io/你的仓库名称`,
},
```

### 4. 部署到 GitHub Pages

运行以下命令进行部署：

```bash
npm run deploy
```

这个命令会执行以下操作：
1. 构建你的 Gatsby 站点（包括 pathPrefix）
2. 将构建结果推送到你 GitHub 仓库的 `gh-pages` 分支

### 5. 设置 GitHub Pages

完成部署后，前往 GitHub 仓库设置：

1. 进入你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Pages"
4. 在 "Source" 部分，选择 "gh-pages" 分支，然后点击 "Save"

### 6. 访问你的网站

几分钟后，你的网站将可以通过以下地址访问：

```
https://你的用户名.github.io/你的仓库名称
```

## 使用自定义域名（可选）

如果你想使用自己的域名而不是 GitHub Pages 提供的域名，可以按照以下步骤操作：

1. 在 GitHub 仓库的 "Settings" > "Pages" 中，在 "Custom domain" 字段中输入你的域名
2. 在你的域名提供商处，添加 DNS 记录：
   - 如果要使用 apex 域名（如 `example.com`），添加 A 记录指向 GitHub Pages 的 IP 地址
   - 如果要使用子域名（如 `blog.example.com`），添加 CNAME 记录指向 `你的用户名.github.io`
3. 在你的项目根目录创建一个名为 `static` 的文件夹（如果没有的话）
4. 在 `static` 文件夹中创建一个名为 `CNAME` 的文件，文件内容为你的自定义域名

## 故障排除

如果你遇到部署问题，可以尝试以下解决方案：

1. 确保你的仓库设置了正确的权限
2. 检查 `pathPrefix` 设置是否与你的仓库名称匹配
3. 尝试删除 `.cache` 和 `public` 文件夹，然后重新部署：
   ```bash
   npm run clean
   npm run deploy
   ```
4. 检查 GitHub Actions 和 Pages 部署日志是否有错误信息 