import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MydriveComponent } from './pages/mydrive/mydrive.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { SharedwithmeComponent } from './pages/sharedwithme/sharedwithme.component';
import { RecentsComponent } from './pages/recents/recents.component';
import { StarredComponent } from './pages/starred/starred.component';
import { SpamComponent } from './pages/spam/spam.component';
import { ThrashComponent } from './pages/thrash/thrash.component';
import { StorageComponent } from './pages/storage/storage.component';

export const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-mydrive', component: MydriveComponent },
  { path: 'app-devices', component: DevicesComponent },
  { path: 'app-sharedwithme', component: SharedwithmeComponent },
  { path: 'app-recents', component: RecentsComponent },
  { path: 'app-starred', component: StarredComponent },
  { path: 'app-spam', component: SpamComponent },
  { path: 'app-thrash', component: ThrashComponent },
  { path: 'app-storage', component: StorageComponent },
];
