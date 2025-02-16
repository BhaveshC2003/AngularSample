import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

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
    },
    {
        title:"Create Product",
        path:"product/create",
        component: CreateProductComponent
    },
    {
        title:"Edit Product",
        path:"product/:id/edit",
        component: EditProductComponent
    }
];
