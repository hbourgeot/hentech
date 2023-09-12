import { DataSource } from 'typeorm';
import { Version } from './entity/version.entity';

export const versionProviders = [
  {
    provide: 'VERSION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Version),
    inject: ['DATA_SOURCE'],
  },
];
