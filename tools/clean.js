import path from 'path';
import rimraf from 'rimraf';
import project from '../project';

export default async () => {
  await rimraf(path.resolve(__dirname, '../', project.output), () => {})
}
