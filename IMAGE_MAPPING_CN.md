# CareNova Lab 图片识别与网站放置清单

本版本已把本次上传的图片转成 WebP，并放入网站包的对应目录。所有用于页面展示的图片都已在代码中连接。

## 已上线显示的图片

| 上传图片 | 识别内容 | 网站位置 | 网站文件路径 |
|---|---|---|---|
| Skincare 护肤.jpg | 芦荟、透明质酸精华与神经酰胺面霜 | 首页产品分类、Product Library 分类卡、Skincare 分类页 Hero | `public/images/categories/skincare.webp` |
| Body Care 身体.jpg | 薰衣草身体霜与糖磨砂膏 | 首页产品分类、Body Care 分类页、Fragrance Body Care 页面 | `public/images/categories/body-care.webp` |
| Hair Care 洗护.jpg | 摩洛哥坚果洗发水与发膜 | 首页产品分类、Hair Care 分类页 Hero | `public/images/categories/hair-care.webp` |
| Sun Care 防晒.jpg | 防晒乳与晒后凝胶 | 首页产品分类、Sun Care 分类页 Hero | `public/images/categories/sun-care.webp` |
| Soap 香皂.jpg | 薰衣草、玫瑰与鼠尾草手工皂 | 首页产品分类、Soap 分类页 Hero | `public/images/categories/soap.webp` |
| Essential Oils 精油.jpg | 迷迭香、薰衣草与柠檬精油 | 首页产品分类、Essential Oils & Fragrance 分类页 Hero | `public/images/categories/essential-oils-fragrance.webp` |
| Home Care 家居.jpg | 洗衣液与无火香薰 | 首页产品分类、Home Care 分类页 Hero | `public/images/categories/home-care.webp` |
| A45...jpg | 实验室环境中的精华产品 | 首页 Hero、How We Work 页面 | `public/images/site/home-hero-lab-serum.webp` |
| Aa2...jpg | 洁面油、喷雾、精华与面霜组合 | Product Library 总页 Hero | `public/images/site/product-library-flatlay.webp` |
| Aed...jpg | 维生素C安瓶与配方实验场景 | Product Solutions 总页、Device Companion Skincare 页面 | `public/images/site/formula-ampoules.webp` |

## 已保存但暂未自动显示的图片

| 上传图片 | 识别内容 | 文件路径 | 暂不自动显示的原因 |
|---|---|---|---|
| 9add...png | MOLATO Whitening Soap 零售广告横幅 | `public/images/portfolio/molato-whitening-soap-banner.webp` | 图片含具体品牌、强功效宣称及零售广告文案，更适合作为确认授权后的案例页或项目作品展示，不建议直接用作通用 Soap 分类图。 |

## Cloudflare R2 迁移方式

当前图片保存在 `public/images/`，上传 GitHub 后可以直接由 Vercel 显示。

需要迁移到 Cloudflare R2 时，将 `public/images` 内的目录结构原样上传，例如：

```text
images/categories/skincare.webp
images/site/home-hero-lab-serum.webp
images/portfolio/molato-whitening-soap-banner.webp
```

然后在 Vercel 环境变量中填写：

```text
NEXT_PUBLIC_R2_BASE_URL=https://assets.carenovalab.com
```

Page Hero、首页分类卡、解决方案卡和分类页已接入 `lib/assets.ts`，设置变量后会自动改用 R2 地址。

## 图片使用提醒

- 当前部分图片带有概念品牌名称，适合用作产品方向或包装展示，不应表述为 CareNova Lab 自有在售品牌。
- 防晒、祛痘、美白、抗衰、抗菌等宣称必须根据目标市场、实际配方和检测资料确认。
- 后续替换图片时保持相同文件名，可以减少代码修改；若使用 Cloudflare 缓存，建议增加版本号或更换文件名。
