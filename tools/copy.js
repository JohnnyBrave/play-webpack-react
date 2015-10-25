//
// import ncp from 'ncp';
//
// export default async () => {
//   return new Promise((resolve, reject) => {
//     ncp('assets', 'public', { filter: function(fn) {
//       console.log(fn);
//       return /.*\.(png|jpg|jpeg)$/.test(fn);
//     } }, err => err ? reject(err) : resolve());
//   });
// }
