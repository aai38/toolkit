import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomePage from '../home/home.page';
import { NewsComponent } from '../news/news.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule {}
