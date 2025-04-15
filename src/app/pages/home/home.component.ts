import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardOneComponent } from "../../components/small-card-one/small-card-one.component";
import { SmallCardTwoComponent } from "../../components/small-card-two/small-card-two.component";
import { SmallCardThreeComponent } from "../../components/small-card-three/small-card-three.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardOneComponent, SmallCardTwoComponent, SmallCardThreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
