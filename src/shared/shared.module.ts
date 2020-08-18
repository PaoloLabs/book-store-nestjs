import { Module } from '@nestjs/common';
import { MapperService } from './mapper.service';

@Module({
  providers: [MapperService],
  imports: [MapperService],
})
export class SharedModule {}
