import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginFormComponent } from "./login-form/login-form.component";

export const authRoutes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [{
        path: '',
        component: LoginFormComponent
    }]
}
]