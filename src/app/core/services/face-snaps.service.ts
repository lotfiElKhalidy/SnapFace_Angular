import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient) {}

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceById(faceSnapId: number, snapType: 'snap' | 'unsnap') : Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ?  1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        )
    }

    addFaceSnap(fromValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
            map(sortedFaceSnap => sortedFaceSnap[sortedFaceSnap.length - 1]),
            map(previousFaceSnap => ({
                ...fromValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFaceSnap.id + 1
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
        )
    }
}