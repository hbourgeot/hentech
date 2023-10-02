import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VersionService } from './version.service';
import { CreateVersionDto, UpdateVersionDto } from './dto/version.dto';
import { Version } from './entity/version.entity';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiTags('version')
@Controller('api/version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @ApiOkResponse({ type: Version })
  @Post()
  async createVersion(@Body() version: CreateVersionDto): Promise<Version> {
    return await this.versionService.create({ ...version });
  }

  @ApiOkResponse({ type: Version })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Version Not Found' })
  @Get(':id')
  async getVersion(@Param('id') stringId: string): Promise<Version | null> {
    const id = Number(+stringId);
    return await this.versionService.getOne(id);
  }

  @ApiOkResponse({ type: Version, isArray: true })
  @Get()
  async getVersions(): Promise<Version[]> {
    return await this.versionService.getAll();
  }

  @ApiOkResponse({ type: Version })
  @Patch(':id')
  async updateVersion(
    @Param('id') stringId: string,
    @Body() updatedVersion: UpdateVersionDto,
  ): Promise<Version> {
    const id = Number(+stringId);
    const version = (await this.versionService.getOne(id)) as Version;
    return await this.versionService.update(
      { ...version },
      { ...updatedVersion },
    );
  }

  @ApiOkResponse({ type: Version })
  @Delete(':id')
  async deleteVersion(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.versionService.del({ id });
  }
}
