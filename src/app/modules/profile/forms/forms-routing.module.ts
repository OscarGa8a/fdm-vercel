import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFiscalComponent } from './form-fiscal/form-fiscal.component';
import { FormBancarioComponent } from './form-bancario/form-bancario.component';
import { DesignGuard } from '@shared/guards/design.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fiscales',
        component: FormFiscalComponent,
        canActivate: [DesignGuard],
        data: {
          title: 'Datos fiscales',
          breadcrumb: 'Fiscales',
          rol: 'design'
        }
      },
      {
        path: 'bancarios',
        component: FormBancarioComponent,
        data: {
          title: 'Datos bancarios',
          breadcrumb: 'Bancarios',
          rol: 'design'
        },
        canActivate: [DesignGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
