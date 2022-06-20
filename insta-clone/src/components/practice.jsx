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

// console.log(finaldata);

const fullfinaldata = []

for (let i = 0; i < finaldata.length; i++) {
    for (let key in finaldata[i]) {
        let value = finaldata[i][key];
        let matching = 0;
        for (let key2 in comments) {
            if (key2 === value) {
                matching = comments[key2];

                break;
            }
        }
        // console.log(matching);
        fullfinaldata.push({
            baate :matching});
        break;
    }
    
}

const lastfullfinaldata = finaldata.map((item, i) => Object.assign({}, item, fullfinaldata[i]));
console.log(lastfullfinaldata);


export default lastfullfinaldata;