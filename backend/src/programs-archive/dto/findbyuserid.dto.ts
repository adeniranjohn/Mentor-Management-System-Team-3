import { IsNumber, Min } from "class-validator";
import { Type } from "class-transformer";

export class FindByUserIdDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page = 1;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  perPage = 10;
}
