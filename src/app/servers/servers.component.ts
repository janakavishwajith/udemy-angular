import { Component, OnInit } from '@angular/core';

@Component({
  // selector: `[app-servers]`,
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = "No server Created";
  serverName = "est";

  constructor() {
    setTimeout(()=>{
      this.allowNewServers = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreationStatus = "server was created and the name is " + this.serverName;
  }

  onCreateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
