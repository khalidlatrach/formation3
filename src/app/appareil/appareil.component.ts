import { Component, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {
constructor(private appareilService: AppareilService){}


@Input() appareilName: string | null= null;
@Input() appareilStatus: string | null= null;
@Input() indexOfAppareil: number=0;

getStatus(){
  return  this.appareilStatus;
}

getColor(){
  if (this.appareilStatus==='éteint')
  {
    return 'red';
}else if(this.appareilStatus==='allumé')  {
  return 'green';
}
return;
}

onSwitchOffOne() {
  this.appareilService.onEteindreOne(this.indexOfAppareil);
}
onSwitchOnOne(){
  this.appareilService.onAllumeOne(this.indexOfAppareil);
}

}
