import { Routes } from '@angular/router';
import { FmsComponent } from './fms/fms.component';
import { AutherizationComponent } from './autherization/autherization.component';

export const routes: Routes = [
    {path:'details',component:AutherizationComponent},
    {path:'',component:FmsComponent}
];
