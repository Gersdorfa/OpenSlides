import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectorListComponent } from './components/projector-list/projector-list.component';
import { ProjectorDetailComponent } from './components/projector-detail/projector-detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: ProjectorListComponent
    },
    {
        path: 'detail/:id',
        component: ProjectorDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectorRoutingModule {}
