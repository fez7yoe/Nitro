// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 輸出模式：static 靜態生成、server 伺服器算繪。
  adapter: vercel({
    webAnalytics: { // 網站分析功能：true 開啟、false 關閉。
        enabled: true,
    },
    imageService: true, // 圖片處理功能：true 開啟、false 關閉。
    devImageService: "sharp", // 在開發中所使用的圖片處理服務。
  }),
});