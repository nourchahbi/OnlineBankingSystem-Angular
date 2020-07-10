import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AppointmentDialogComponent} from '../appointment-dialog/appointment-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(AppointmentDialogComponent,{
      width: '400px',
      disableClose:true

    });
  }
}
