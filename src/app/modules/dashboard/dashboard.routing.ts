import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./pages/home/home.component";

export const dashboardRoutes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'home',
            component: HomeComponent
        }, {
            path: 'users',
            component: HomeComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
    ]
}
]