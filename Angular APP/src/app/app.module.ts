import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFilesComponent } from './viewfiles/viewfiles.component';
import { BlocklyComponent } from './blockly/blockly.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FileuploadComponent,
    ViewFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'fileupload', component: FileuploadComponent },
      { path: 'viewfiles', component: ViewFilesComponent },
      { path: 'blockly', component: BlocklyComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
