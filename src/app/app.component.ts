import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardOneComponent } from "./components/small-card-one/small-card-one.component";
import { SmallCardTwoComponent } from "./components/small-card-two/small-card-two.component";
import { SmallCardThreeComponent } from "./components/small-card-three/small-card-three.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmallCardOneComponent, SmallCardTwoComponent, SmallCardThreeComponent, BigCardComponent, MenuTitleComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Blog';
}
