import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ViewpointService } from '../../../../shared/services/viewpoint/viewpoint.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatListModule, MatExpansionModule, MatDividerModule, MatGridListModule, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {
  isWeb: boolean = true;
  navList: any = [{
    title: 'Home',
    icon: 'dashboard',
    route: '/dashboard/home'
  }, {
    title: 'Users',
    icon: 'people',
    route: '/dashboard/users'
  }, {
    title: 'Settings',
    icon: 'settings',
    route: '/dashboard/settings'
  }];
  panelOpenState = false;
  constructor(public viewpoint: ViewpointService) { }
  ngOnInit() {
    this.viewpoint.isMobile.subscribe(isMobile => {
      this.isWeb = !isMobile;
    })
  }

}

