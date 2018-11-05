import * as knnClassifier from '@tensorflow-models/knn-classifier'
import * as tf from '@tensorflow/tfjs-node';
import * as tensorflow from '@tensorflow/tfjs';

// class Coord {
//     lat: Number
//     long: Number

//     constructor(la: number, lo: number) {
//         this.lat = la;
//         this.long = lo;
//     }

//     returnArray()
//     {
//         return [this.long, this.lat];
//     }
// }

export async function classify(x: number, y: number) {

    const classifier = knnClassifier.create();
    var points = new Array<number>();
    var points1 = new Array<number>();
    var points2 = new Array<number>();
    points.push(2, 3);
    points1.push(0,0);
    points2.push(-1,-1);
    const c = tensorflow.tensor1d(points);
    const d = tensorflow.tensor(points1);
    const a = tensorflow.tensor(points2);

    classifier.addExample(c, 1);
    classifier.addExample(d, 0);
    // classifier.addExample(d, 0);
    console.log(await classifier.predictClass(a));
    console.log('success');

    
}