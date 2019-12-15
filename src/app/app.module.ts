import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GotAdsComponent } from './components/got-ads/got-ads.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdRenderComponent } from './components/ad-render/ad-render.component';
import { MapComponent } from './components/map/map.component';
import { FilterAdsPipe } from './pipes/filter-ads.pipe';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    GotAdsComponent,
    AdRenderComponent,
    MapComponent,
    FilterAdsPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
