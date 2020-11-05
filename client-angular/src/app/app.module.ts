import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PinsComponent } from './pins/pins.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormComponent } from './form/form.component';
import { ManagmentComponent } from './managment/managment.component';
import { UsersComponent } from './users/users.component';
import { TimecardComponent } from './timesheet/timecard/timecard.component';
import { UserComponent } from './overtime/user/user.component';
import { ApproverComponent } from './overtime/approver/approver.component';
import { TimekeeperComponent } from './overtime/timekeeper/timekeeper.component';
import { TabComponent } from './tab/tab.component';
import { MatErrorMessagesDirective } from './directive/materror.directive';
import { CustomBreakPointsProvider, CUSTOM_BREAKPOINTS } from './breakpoint/custom-breakpoints'
import { CustomShowHideDirective } from './breakpoint/custom-show-hide.directive'
import { CustomLayoutDirective } from './breakpoint/custom-layout.directive'
import { CustomFlexDirective } from './breakpoint/custom-flex.directive'
import { CustomLayoutGapDirective } from './breakpoint/custom-layout-gap.directive'
import { CustomStyleDirective } from './breakpoint/custom-style.directive';
import { CustomClassDirective } from './breakpoint/custom-class.directive'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    TableComponent,
    ModalComponent,
    DashboardComponent,
    PinsComponent,
    ChartsComponent,
    FormComponent,
    ManagmentComponent,
    UsersComponent,
    TimecardComponent,
    UserComponent,
    ApproverComponent,
    TimekeeperComponent,
    TabComponent,
    MatErrorMessagesDirective,
    CustomShowHideDirective, 
    CustomLayoutDirective, 
    CustomFlexDirective, 
    CustomLayoutGapDirective,
    CustomStyleDirective,
    CustomClassDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    LayoutModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }, CUSTOM_BREAKPOINTS),
    ChartsModule,
    NgxChartsModule,
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
