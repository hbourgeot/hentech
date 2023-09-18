import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto, SearchDocumentDto, UpdateDocumentDto } from './dto/doc.dto';
import { Document } from './entity/document.entity';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult, FindOptionsWhere } from 'typeorm';

@ApiTags('docs')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @ApiOkResponse({ type: Document })
  @Post()
  async createDocument(@Body() document: CreateDocumentDto): Promise<Document> {
    return await this.documentService.create({ ...document });
  }

  @ApiOkResponse({ type: Document })
  @ApiBadRequestResponse({ type: undefined, description: 'Bad Request' })
  @ApiNotFoundResponse({ type: undefined, description: 'Document Not Found' })
  @Get('doc/:id')
  async getDocument(@Param('id') stringId: string): Promise<Document | null> {
    const id = Number(+stringId);
    return await this.documentService.getOne(id);
  }

  @ApiOkResponse({ type: Document, isArray: true })
  @Get()
  async getDocuments(): Promise<Document[]> {
    return await this.documentService.getAll();
  }

  @ApiOkResponse({ type: Document })
  @Patch('doc/:id')
  async updateDocument(
    @Param('id') stringId: string,
    @Body() updatedDocument: UpdateDocumentDto,
  ): Promise<Document> {
    const id = Number(+stringId);
    const document = (await this.documentService.getOne(id)) as Document;
    return await this.documentService.update(
      { ...document },
      { ...updatedDocument },
    );
  }

  @ApiOkResponse({ type: Document })
  @Delete('doc/:id')
  async deleteDocument(@Param('id') stringId: string): Promise<DeleteResult> {
    const id = Number(+stringId);
    return await this.documentService.del({ id });
  }

  @Get('search')
  async searchProjects(@Query() search: SearchDocumentDto) {
    const doc: FindOptionsWhere<Document> = {
      description: search.description,
      id: search.id === undefined ? undefined : parseInt(search.id),
      sourceCode: search.sourceCode,
      specificationDocument: search.specificationDocument,
      type: search.type,
      task: {
        id: search.taskId === undefined ? undefined : parseInt(search.taskId)
      }
    };
    return await this.documentService.getAll(undefined, undefined, doc);
  }
}
