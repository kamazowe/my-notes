import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class NoteDto {
  @ApiModelProperty({
    example: 'default name',
    description: 'przykladowy tytul'})
  public title: string;

  @ApiModelProperty({example: 'default data'})
  public data: string;
  public description: string;
  @ApiModelProperty({example: 'default data'})
  public content: string;

  public id: number;
  @ApiModelPropertyOptional()
  public imagePath?: string;


  // fixme konstruktor do poprawy elvis mark tcs 3.7
  constructor(options: Partial<NoteDto> = {}) {
    this.title = options.title || null;
    this.data = options.data || null;
    this.description = options.description || null;
    this.content = options.content || null;
    this.id = options.id || null;
    this.imagePath = options.imagePath || null;
  }
}
