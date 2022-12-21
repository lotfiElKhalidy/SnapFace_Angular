import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,    
            title: 'Archibald',
            description: `Cute, isn't it ?`,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/640px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Toulouse'
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmm, sehr lecker !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Clermont'
        },
        {
            id: 4,
            title: 'Un papillon',
            description: `Cute, isn't it ?`,
            imageUrl: 'https://images.pexels.com/photos/4069642/pexels-photo-4069642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            createdDate: new Date(),
            snaps: 0,
            location: 'La nature'
        },
        {
            id: 5,
            title: 'Une appareil photo',
            description: 'Canon',
            imageUrl: 'https://images.pexels.com/photos/7789073/pexels-photo-7789073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            createdDate: new Date(),
            snaps: 0,
            location: 'Un studio'
        },
        {
            id: 6,
            title: `Logo d'Apple`,
            description: 'Mmmm, sehr lecker !',
            imageUrl: 'https://images.pexels.com/photos/5800229/pexels-photo-5800229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            createdDate: new Date(),
            snaps: 0,
            location: 'NYC'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
        
        if (!faceSnap) {
            throw new Error('FaceSnap not found !');
        } else {
            return faceSnap;
        }
    }

    snapFaceById(faceSnapId: number, snapType: 'snap' | 'unsnap') : void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(fromValue: { title: string, description: string, imageUrl: string, location?: string }): void {
        const faceSnap: FaceSnap = {
            ...fromValue,
            createdDate: new Date(),
            snaps: 0,
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }
}