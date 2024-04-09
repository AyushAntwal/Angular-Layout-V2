import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewpointService } from '../../shared/services/viewpoint/viewpoint.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    SideNavComponent,
    ToolbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  isWeb: boolean = true;

  constructor(public viewpoint: ViewpointService) { }

  ngOnInit() {
    this.viewpoint.isMobile.subscribe(isMobile => {
      this.isWeb = !isMobile;
    })
  }
}
