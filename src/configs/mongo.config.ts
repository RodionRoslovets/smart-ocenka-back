import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoUrl(configService),
    ...getMongoOptions(),
  };
};

const getMongoUrl = (configService: ConfigService) => {
  return `mongodb://${configService.get('MONGO_NAME')}:${configService.get('MONGO_PASS')}@${configService.get('MONGO_HOST')}:${configService.get('MONGO_PORT')}/${configService.get('MONGO_AUTH_DB')}`;
};

const getMongoOptions = () => {
  return {};
};
