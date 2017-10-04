import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent }   from './helloworld.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/helloworld', pathMatch: 'full' },
  { path: 'helloworld',  component: HelloWorldComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}