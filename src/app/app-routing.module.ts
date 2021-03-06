import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { AuthorsComponent } from './pages/entities/authors/authors.component';
import { PublishersComponent } from './pages/entities/publishers/publishers.component';
import { BooksComponent } from './pages/entities/books/books.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './pages/dashboard/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'publishers', component: PublishersComponent },
  { path: 'books', component: BooksComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'Admin' }},
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
