import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { DocumentService } from './document.service';
// import { CreateDocumentDto, UpdateDocumentDto } from './dto/document.dto';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
}
