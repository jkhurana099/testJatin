import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { FusionChartsModule } from "angular-fusioncharts";

// Load FusionCharts
import FusionCharts from "fusioncharts/core";
// Load Charts module
import Pie3d from "fusioncharts/viz/pie3d";
// Load fusion theme
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import { TimelinesComponent } from './timelines/timelines.component';
import { ServerMonitoringComponent } from './server-monitoring/server-monitoring.component';
import { AnalyticsReportingComponent } from './analytics-reporting/analytics-reporting.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Pie3d, FusionTheme);

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sMonitoring', component: ServerMonitoringComponent },
  { path: 'timelines', component: TimelinesComponent },
   { path: 'analyticsReport', component: AnalyticsReportingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavigationComponent,
    HeaderComponent,
    DashboardComponent,
    ServerMonitoringComponent,
    TimelinesComponent,
    AnalyticsReportingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FusionChartsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
