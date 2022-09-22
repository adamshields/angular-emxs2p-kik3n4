import { DefaultFormValidatorComponent } from './default.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './common/shared.module';





@NgModule({
    imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule, HttpModule, JsonpModule, BrowserModule],
declarations: [DefaultFormValidatorComponent],
bootstrap: [DefaultFormValidatorComponent]
})
export class AppModule { }