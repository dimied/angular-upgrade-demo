import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuText = 'Menu >';

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  openLeftMenu(): void {
    if(this.drawer) {

      this.drawer.toggle().then((res) => {

        let t = res === 'open' ? '<' : '>';

        this.menuText = 'Menu '+t;
      });
    }
  }
}
