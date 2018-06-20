import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ToDoNavComponent } from './to-do-nav/to-do-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListDetailComponent } from './to-do-add/to-do-add.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
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
