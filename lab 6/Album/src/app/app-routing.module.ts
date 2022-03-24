import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [{path:'home', component:HomeComponent}, {path:'albums', component:AlbumsComponent},
{path:"about", component:AboutComponent},
{path:'albums/:id', component:AlbumDetailComponent},
{path:'albums/:id/photos', component:PhotosComponent},
{path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
