import { ChangeDetectorRef, Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ref?: DynamicDialogRef;
  translatePipe: TranslatePipe;
  constructor(
    public dialogService: DialogService,
    private translateService: TranslateService,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.translatePipe = new TranslatePipe(
      this.translateService,
      changeDetectorRef
    );
    translateService.onLangChange.subscribe((_) => {
      const currentLang = this.translateService.currentLang;
      document.documentElement.setAttribute(
        'dir',
        currentLang === 'ar' ? 'rtl' : 'ltr'
      );
    });

    setTimeout(() => {
      this.show();
    }, 150);
  }

  show() {
    // header should have a translated text
    this.ref = this.dialogService.open(DialogComponent, {
      header: 'إنشاء صفقة جديدة',
      width: '806px',
    });
  }
}
