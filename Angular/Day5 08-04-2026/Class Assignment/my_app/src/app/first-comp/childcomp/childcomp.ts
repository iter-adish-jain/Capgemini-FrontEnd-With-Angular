import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  imports: [],
  templateUrl: './childcomp.html',
  styleUrl: './childcomp.css',
})
export class Childcomp {
  @Input() namegiven:String = '';
}
