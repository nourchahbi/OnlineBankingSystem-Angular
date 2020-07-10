import {Component, OnInit, ɵɵcontainerRefreshStart} from '@angular/core';
import {DialogueService} from '../shared/dialogue.service';
import {OnlineBankingSystemService} from '../online-banking-system.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  errormessage;
  recipients;
  data;
  constructor(private dialogService:DialogueService,private service:OnlineBankingSystemService,
              private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onaddAppointment(data){
    data.username=this.authService.username;
    this.service.postResourceAuth('addAppointment',data).subscribe(res=>{
      console.log(data);
      this.dialogService.openConfirmDialog().afterClosed().subscribe(resp=>{
          if(resp){
            this.service.postResourceAuth('appointmentList',data).subscribe(res=>{
              this.recipients=res;
            },error2 => {
              this.errormessage=error2.error.message;
            });
          }
        }
      )
    },error => {
      this.errormessage=error.error.message;
    });




  }

}
