
export default async () => {
  await require('./clean')();
  await require('./bundle')();
}
