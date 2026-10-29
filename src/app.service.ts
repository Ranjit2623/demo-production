import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getStatus() {
    return {
      service: 'production-service',
      zone: 'production',
      port: Number(this.config.get<string>('PORT', '3001')),
      database: this.config.get<string>('DB_DATABASE', 'production_db'),
      status: 'healthy',
      timestamp: new Date().toISOString(),
    };
  }
}
