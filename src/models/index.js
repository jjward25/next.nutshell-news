// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SectionModel, CategoryModel, PostModel, SubheaderModel, BulletModel } = initSchema(schema);

export {
  SectionModel,
  CategoryModel,
  PostModel,
  SubheaderModel,
  BulletModel
};