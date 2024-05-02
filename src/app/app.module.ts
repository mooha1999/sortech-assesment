import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DealDetailsComponent } from './components/deal-details/deal-details.component';
import { DealInfoComponent } from './components/deal-info/deal-info.component';
import { ProductsPanelComponent } from './components/products-panel/products-panel.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    InputComponent,
    TextareaComponent,
    DropdownComponent,
    DealDetailsComponent,
    DealInfoComponent,
    ProductsPanelComponent,
  ],
  imports: [
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    BrowserAnimationsModule,
    InputTextModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
  ],
  providers: [DialogService, TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
