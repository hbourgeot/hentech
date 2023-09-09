import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { VersionService } from './version.service';
// import { CreateVersionDto, UpdateVersionDto } from './dto/version.dto';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}
}
