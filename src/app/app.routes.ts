import { Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { PortalWebComponent } from '@pages/portal-web/portal-web.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component'; '@'

export const routes: Routes = [
    {
        path: '',
        component: PortalWebComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent 
    }
];
