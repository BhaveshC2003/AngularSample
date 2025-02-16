import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        title:"Login",
        path:"login",
        component: LoginComponent
    },
    {
        title:"Sign Up",
        path:"signup",
        component: SignupComponent
    },
    {
        title:"Dashboard",
        path:"dashboard",
        component: DashboardComponent
    }
];
