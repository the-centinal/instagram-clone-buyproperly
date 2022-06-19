// import React from 'react';
import postsdata from '../assets/data/posts';
import comments from '../assets/data/comments';




const numcomm = []

for (let i = 0; i < postsdata.length; i++) {
    for (let key in postsdata[i]) {
        let value = postsdata[i][key];
        let matching = 0;
        for (let key2 in comments) {
            if (key2 === value) {
                matching = comments[key2].length;
                break;
            }
        }
        numcomm.push({
            code: value,
            matching: matching
        });
        // console.log(matching)
        break;
    }

}
// console.log(numcomm);


const finaldata = postsdata.map((item, i) => Object.assign({}, item, numcomm[i]));
// for (let i = 0; i < numcomm.length; i++) {
//     const code2 = numcomm[i].code;
//     for (let j = 0; j < postsdata.length; j++) {
//         const element = postsdata[j].code;
//         if (code2 === element) {
//             for (let j = 0; j < postsdata.length; j++) {
//                 for (let i = 0; i < numcomm.length; i++)
//                 finaldata.push({
//                     ...postsdata[j],
//                     ...numcomm[i]
//                 })
//                 break;
//             }
//             break;





//         }
//         break


//     }
// }
console.log(finaldata);

export default finaldata;