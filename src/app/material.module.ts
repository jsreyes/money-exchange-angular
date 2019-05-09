import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCheckboxModule,
  MatMenuModule,
  MatGridListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRippleModule,
  ErrorStateMatcher, ShowOnDirtyErrorStateMatcher,
  MatPaginatorIntl,
  MatDatepickerIntl,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatExpansionModule,
  MatSlideToggleModule
} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatCheckboxModule,
  MatGridListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRippleModule,
  MatExpansionModule,
  MatMenuModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
  ]
})

export class MaterialModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('es'); // DD/MM/YYYY
  }
}
