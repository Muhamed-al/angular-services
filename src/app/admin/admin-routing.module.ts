import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
