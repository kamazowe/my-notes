import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { NoteDto } from '../model';
import { GetNotesRequestDto } from './get-notes-req.dto';

export class GetNotesResponseDto {
  @ApiModelProperty()
  pageIndex: number;
  @ApiModelProperty()
  pageSize: number;
  @ApiModelProperty()
  total: number;
  @ApiModelProperty({
    type: NoteDto,
    isArray: true,
  })
  data: NoteDto[];
  @ApiModelPropertyOptional()
  query?: GetNotesRequestDto;
}
