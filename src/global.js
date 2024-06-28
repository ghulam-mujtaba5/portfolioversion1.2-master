import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0;
      line-height: normal;
    }

    :root {
      /* fonts */
      --section-title: 'Plus Jakarta Sans', Inter;
      --font-inconsolata: Inconsolata, 'Open Sans', Poppins;

      /* font sizes */
      --section-title-size: 9px;
      --content-xs-size: 7px;
      --label-sm-size: 8px;
      --font-size-9xl: 28px;
      --font-size-5xl: 24px;
      --font-size-13xl: 32px;
      --font-size-5xl-8: 24.8px;
      --font-size-sm: 14px;
      --font-size-base: 16px;
      --font-size-lg: 18px;
      --font-size-12xl-8: 31.8px;

      /* Colors */
      --light-background: #fff;
      --light-text-primary: #334155;
      --color-aliceblue-100: #f1f8ff;
      --light-label-background: #f1f5f9;
      --light-border: #e2e8f0;
      --light-text-secondary: #64748b;
      --light-progress: rgba(100, 116, 139, 0.24);
      --color-blueviolet-100: #7c3aed;
      --light-link-underline: rgba(119, 51, 255, 0.18);
      --color-lightgray: #cbd5e1;
      --color-ghostwhite: #f6f3ff;
      --color-dodgerblue: #0a66c2;
      --color-gray-100: #222;
      --color-gray-200: rgba(255, 255, 255, 0.2);
      --color-whitesmoke: #f2f2f2;
      --color-orangered: #f24e1e;
      --color-seashell: #fff4f1;
      --color-lightsteelblue: #9cb3e1;
      --white: #fff;
      --color-steelblue: #6a86c4;
      --color-darkslateblue: #42446e;
      --dark-content: #666;
      --color-black: #000;
      --color-lavender: #d9e1f0;

      /* Gaps */
      --gap-3xs: 10px;
      --gap-0: 0px;

      /* Paddings */
      --padding-11xs: 2px;
      --padding-10xs: 3px;
      --padding-12xs: 1px;
      --padding-10xs-5: 2.5px;
      --padding-9xs: 4px;
      --padding-5xs: 8px;

      /* Border radiuses */
      --br-10xs: 3px;
      --br-5xs: 8px;
      --br-11xs-5: 1.5px;
      --br-3xs: 10px;
      --br-8xs: 5px;
      --br-7xl: 26px;
      --br-xl: 20px;
    }
  `;
}
