# CareNova Lab 独立站部署说明

这是一套可直接上传 GitHub 并部署到 Vercel 的 Next.js 网站包。

## 1. 本地运行

```bash
npm install
npm run dev
```

打开：`http://localhost:3000`

## 2. 上传 GitHub

1. 在 GitHub 新建空仓库，例如 `carenovalab-site`。
2. 把本文件夹内的全部文件上传到仓库根目录。
3. 不要只上传外层文件夹；`package.json` 必须在仓库根目录。

也可以使用命令：

```bash
git init
git add .
git commit -m "Build CareNova Lab website"
git branch -M main
git remote add origin 你的GitHub仓库地址
git push -u origin main
```

## 3. 部署到 Vercel

1. 登录 Vercel。
2. 点击 **Add New → Project**。
3. 导入 GitHub 仓库。
4. Framework Preset 选择 **Next.js**。
5. Build Command 保持 `npm run build`。
6. 点击 Deploy。

## 4. 绑定 carenovalab.com

在 Vercel 项目中：

1. 打开 **Settings → Domains**。
2. 添加：
   - `carenovalab.com`
   - `www.carenovalab.com`
3. 按照 Vercel 显示的 DNS 记录，在 Cloudflare 中填写。
4. Namecheap 只负责域名注册。如果域名 Name Servers 已经指向 Cloudflare，DNS 记录只在 Cloudflare 修改。

建议把 `www.carenovalab.com` 设为主域名，并将裸域名重定向到 www。

## 5. Cloudflare R2 图片接入

目前网站包中的展示图位于：

```text
/public/images/
```

可以直接部署，不影响网站运行。后续使用 R2 时：

1. 在 Cloudflare R2 建立存储桶。
2. 建议绑定图片子域名：`assets.carenovalab.com`。
3. 按图片规范表上传到对应目录，例如：

```text
assets/home/hero/cnl-home-hero-product-development-desktop-1920x960.webp
```

4. 在 Vercel 添加环境变量：

```text
NEXT_PUBLIC_SITE_URL=https://www.carenovalab.com
NEXT_PUBLIC_R2_BASE_URL=https://assets.carenovalab.com
NEXT_PUBLIC_R2_HOST=assets.carenovalab.com
```

5. 后续把代码中的 `/images/xxx.svg` 替换为 R2 图片 URL，或在 `lib/assets.ts` 中集中管理。

## 6. WhatsApp 客服配置

客服信息集中在：

```text
/lib/site.ts
```

当前客服：

- Willow：+86 137 1007 9307
- Jasmine：+86 175 2034 9723

新增客服时，在 `consultants` 数组增加一条记录即可。通用报价按钮会先打开客服选择窗口。

## 7. 邮箱配置

当前通用邮箱：

```text
willowzheng668@gmail.com
```

修改位置同样在：

```text
/lib/site.ts
```

## 8. 产品库修改

产品数据集中在：

```text
/lib/products.ts
```

可修改：

- 一级分类
- 二级分类
- 英文产品名称
- 分类介绍
- 展示顺序

修改后，产品库、搜索结果和分类页面会同步更新。

## 9. 网站已完成页面

- Home
- Product Solutions
- Device Companion Skincare
- Fragrance Body Care
- Scenario-Based Personal Care
- Product Library
- 7个产品分类页
- Who We Help
- How We Work
- Insights
- 3篇Insights文章
- About
- Contact
- Start Your Project
- Privacy
- Terms
- Sitemap
- Robots

## 10. 上线前必须检查

- 所有 WhatsApp 按钮是否能正确选择 Willow 或 Jasmine。
- 手机端底部 WhatsApp 固定栏是否正常。
- 所有英文内容是否符合你的最终业务范围。
- 不要发布无法证明的工厂数量、品牌数量、日产能或国家数量。
- 合作工厂证书要明确属于 manufacturing partner。
- MOQ、周期、文件和测试要求均需按实际项目确认。
- 后续换成真实产品图片时，保持文件名和尺寸规范。

## 本次图片优化更新

本版本已导入并优化用户提供的分类与实验室图片。具体映射见：

```text
IMAGE_MAPPING_CN.md
```

图片已压缩为 WebP，主要位于：

```text
public/images/categories/
public/images/site/
public/images/portfolio/
```

直接部署 GitHub + Vercel 即可显示。后续迁移 Cloudflare R2 时，可保持同一目录结构，并设置 `NEXT_PUBLIC_R2_BASE_URL`。
