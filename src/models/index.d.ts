import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

type SectionModelMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type CategoryModelMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type PostModelMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type SubheaderModelMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type BulletModelMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class SectionModel {
  readonly id: string;
  readonly SectionName?: string;
  readonly CategoryModels?: (CategoryModel | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SectionModel, SectionModelMetaData>);
  static copyOf(
    source: SectionModel,
    mutator: (
      draft: MutableModel<SectionModel, SectionModelMetaData>
    ) => MutableModel<SectionModel, SectionModelMetaData> | void
  ): SectionModel;
}

export declare class CategoryModel {
  readonly id: string;
  readonly CategoryName?: string;
  readonly CategoryPriority?: number;
  readonly PostModels?: (PostModel | null)[];
  readonly sectionmodelID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CategoryModel, CategoryModelMetaData>);
  static copyOf(
    source: CategoryModel,
    mutator: (
      draft: MutableModel<CategoryModel, CategoryModelMetaData>
    ) => MutableModel<CategoryModel, CategoryModelMetaData> | void
  ): CategoryModel;
}

export declare class PostModel {
  readonly id: string;
  readonly PostName?: string;
  readonly PostPriority?: number;
  readonly PostDate?: string;
  readonly PostUpdate?: string;
  readonly SubheaderModels?: (SubheaderModel | null)[];
  readonly categorymodelID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostModel, PostModelMetaData>);
  static copyOf(
    source: PostModel,
    mutator: (
      draft: MutableModel<PostModel, PostModelMetaData>
    ) => MutableModel<PostModel, PostModelMetaData> | void
  ): PostModel;
}

export declare class SubheaderModel {
  readonly id: string;
  readonly SubheaderName?: string;
  readonly SubheaderPriority?: number;
  readonly BulletModels?: (BulletModel | null)[];
  readonly postmodelID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubheaderModel, SubheaderModelMetaData>);
  static copyOf(
    source: SubheaderModel,
    mutator: (
      draft: MutableModel<SubheaderModel, SubheaderModelMetaData>
    ) => MutableModel<SubheaderModel, SubheaderModelMetaData> | void
  ): SubheaderModel;
}

export declare class BulletModel {
  readonly id: string;
  readonly BulletText?: string;
  readonly BulletPriority?: number;
  readonly BulletLink?: string;
  readonly BulletCite?: string;
  readonly BulletPostDate?: string;
  readonly BulletUpdate?: string;
  readonly subheadermodelID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BulletModel, BulletModelMetaData>);
  static copyOf(
    source: BulletModel,
    mutator: (
      draft: MutableModel<BulletModel, BulletModelMetaData>
    ) => MutableModel<BulletModel, BulletModelMetaData> | void
  ): BulletModel;
}
