# BangStorageUI <img src='https://img.shields.io/badge/npm-7.11.0-brightgreen.svg'>
A set of Angular component library based on [ng-zorro-antd](https://ng.ant.design/docs/introduce/en) secondary packaging.<br>

## Runtime environment
* Angular `^7.0.0`;
* The newest version of Google Chrome or Fire Fox; 新版谷歌或火狐浏览器；
* Installed ng-zorro-antd. 安装ng-zorro-antd。

## Install
**We recommend using yarn for installation,**
Please ensure your computer is already installed with `yarn`。If you don't know how to install `yarn`, look at [here](https://github.com/LaamGinghong/Tips-to-use-yarn).
```bash
$ ng set --global packageManager=yarn
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng ad ng-zorro-antd | yarn add bang-storage-ui
```
## Using
import `BangStorageUiModule` in ShareModule, and import the shareModule in the required component.
```bash
import {BangStorageUiModule} from 'bang-storage-ui';

@NgModule({
  imports:[BangStorageUiModule]
})
export class ShareModule{
}
```
