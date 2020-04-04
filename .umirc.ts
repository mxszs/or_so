import { defineConfig } from 'dumi';

export default defineConfig({
  hash: true,
  title: 'or_so',
  mode: 'site',
  logo: 'https://avatars2.githubusercontent.com/u/33783716?s=60&v=4',
  navs: [null, { title: 'GitHub', path: 'https://github.com/mxszs' }],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  styles: [`a[title='站长统计'] { display: none; }`],
  headScripts: [
    'https://s9.cnzz.com/z_stat.php?id=1278748780&web_id=1278748780',
  ],
});
