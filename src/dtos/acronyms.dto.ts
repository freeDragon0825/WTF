import { IsString } from 'class-validator';

export class CreateAcronymDto {
  @IsString()
  public name: string | undefined;

  @IsString()
  public desc: string | undefined;
}
