import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './share/share.module';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {HighlightModule} from 'ngx-highlightjs';
import less from 'highlight.js/lib/languages/less';
import typescript from 'highlight.js/lib/languages/typescript';

registerLocaleData(zh);

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'less', func: less},
  ];
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    ShareModule,
    AppRoutingModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
