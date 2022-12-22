import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>; 

  constructor(private faceSnapsService: FaceSnapService) {

  }

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}