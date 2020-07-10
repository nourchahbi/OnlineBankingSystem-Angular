import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RegisterComponent} from './register/register.component';
import {DepositComponent} from './deposit/deposit.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {PrimaryTransactionComponent} from './primary-transaction/primary-transaction.component';
import {SavingsTransactionComponent} from './savings-transaction/savings-transaction.component';
import {TransferBetweenAccountsComponent} from './transfer-between-accounts/transfer-between-accounts.component';
import {RecipientComponent} from './recipient/recipient.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {AuthGuardService} from './auth-guard.service';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},
  {path:'admin',component:AdminDashboardComponent,canActivate: [AuthGuardService]},
  {path:'deposit',component:DepositComponent,canActivate: [AuthGuardService]},
  {path:'withdraw',component:WithdrawComponent,canActivate: [AuthGuardService]},
  {path:'recipient',component:RecipientComponent,canActivate: [AuthGuardService]},
  {path:'appointment',component:AppointmentComponent, canActivate: [AuthGuardService]},
  {path:'PrimaryTransactions',component:PrimaryTransactionComponent,canActivate: [AuthGuardService]},
  {path:'SavingsTransactions',component:SavingsTransactionComponent,canActivate: [AuthGuardService]},
  {path:'TransferBetweenAccounts',component:TransferBetweenAccountsComponent,canActivate: [AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
