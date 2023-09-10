import { Module } from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';
import { versionProviders } from './version.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VersionController],
  providers: [VersionService, ...versionProviders],
})
export class VersionModule {}
