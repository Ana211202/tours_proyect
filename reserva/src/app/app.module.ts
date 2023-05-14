import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { SearchComponent } from './components/search/search.component';

  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VideoPipe } from './components/pipes/video.pipe';





@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    ReservasComponent,
    SearchComponent,
    VideoPipe,
    
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
