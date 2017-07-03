import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CounterInputComponent } from '../counterinput/counterinput.component';
import { AppComponent } from './app.component';
import { NewComponent } from '../newcomponent/newcomponent';
 

@NgModule({
  declarations: [
    AppComponent,
    CounterInputComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
