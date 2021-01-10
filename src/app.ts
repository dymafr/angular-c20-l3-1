import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <h3>Réduisez ou agrandissez la fenêtre de droite pour passer en column ou row 
  </h3>
  <div fxLayout.xs="column"
     fxLayout.gt-xs="row"
     class="containerX"
     style="background-color: grey">
    <div style="background-color: blue"
         fxFlex="80"
         fxFlexOffset="5">
      Gauche / Haut
    </div>
    <div style="background-color: red"
         fxFlex="20"
         fxFlexOffset="5">
      Droite / Bas
    </div>
</div>
`,
  styles: [`
    .containerX {
      border: solid 1px #b6b6b6;
      height: 200px;
      width: 100%;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}