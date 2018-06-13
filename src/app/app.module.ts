import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoNavComponent } from './to-do-nav/to-do-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListDetailComponent } from './to-do-list-detail/to-do-list-detail.component';

const appRoutes: Routes = [
  { path: 'todos', component: ToDoListComponent },
  { path: 'add', component: ToDoListDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoNavComponent,
    ToDoListComponent,
    ToDoListDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
