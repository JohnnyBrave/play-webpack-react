import path from 'path';
import rimraf from 'rimraf';

export default async () => {
  await rimraf(path.resolve(__dirname, '../public'), () => {})
}
