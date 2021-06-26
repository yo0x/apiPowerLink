import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-verifyer',
  templateUrl: './verifyer.component.html',
  styleUrls: ['./verifyer.component.css']
})
export class VerifyerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code: string = "";

  @Input() accept: boolean = false;
  @Output() afterFunc: EventEmitter<void> = new EventEmitter<void>();

  onSub(): void {
    // it 69420 in hex :P
    this.accept = this.code === "0x10f2c";
    this.afterFunc.emit();
  }
}
