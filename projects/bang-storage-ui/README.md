#Bang-Storage-UI
一套基于ng-zorro-antd二次封装的Angular组件库。

##运行环境
* Angular `^7.0.0`
* 新版谷歌或火狐浏览器
* 安装ng-zorro-antd

##安装
**我们推荐使用 `yarn` 进行安装，**
请确保你的计算机已经安装了 `yarn`。
```bash
$ ng set --global packageManager=yarn
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng ad ng-zorro-antd | yarn add bang-storage-ui
```

##使用
在共享模块中引入 `BangStorageUiModule`，然后在需要的组件中引入共享模块即可使用。
```bash
import {BangStorageUiModule} from 'bang-storage-ui';

@NgModule({
  imports:[BangStorageUiModule]
})
export class ShareModule{
}
```
