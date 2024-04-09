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
    title: 'Dashboard',
    icon: 'dashboard',
    type: 'parent',
    links: [{
      title: 'Home',
      icon: 'home',
      route: '/dashboard/home',
      type: 'link',
    }, {
      title: 'Users',
      icon: 'people',
      route: '/dashboard/users',
      type: 'link',
    }, {
      title: 'Settings',
      icon: 'settings',
      route: '/dashboard/settings',
      type: 'link',
    }],

  }, {
    title: 'Authentication',
    icon: 'lock',
    type: 'parent',
    links: [{
      title: 'Login',
      icon: 'login',
      route: '/login',
      type: 'link',
    }, {
      title: 'Register',
      icon: 'person-add',
      route: '/auth/register',
      type: 'link',
    }, {
      title: 'Forgot Password',
      icon: 'lock_open',
      route: '/auth/forgot-password',
      type: 'link',
    }],
  }];
  panelOpenState = false;
  constructor(public viewpoint: ViewpointService) { }
  ngOnInit() {
    this.viewpoint.isMobile.subscribe(isMobile => {
      this.isWeb = !isMobile;
    })
  }

}

