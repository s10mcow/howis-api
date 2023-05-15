import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from '../server';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deletePost?: Maybe<Scalars['Boolean']>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
  updateUserHomeLocation?: Maybe<User>;
  updateUserProfileImage?: Maybe<User>;
  updateUserVerifiedStatus?: Maybe<User>;
  verifyUser?: Maybe<User>;
};


export type MutationCreatePostArgs = {
  caption?: InputMaybe<Scalars['String']>;
  location: LocationInput;
  photoURL: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  auth0UserId: Scalars['String'];
  bio?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  profileImageURL?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePostArgs = {
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: InputMaybe<LocationInput>;
  photoURL?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateUserArgs = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserHomeLocationArgs = {
  homeLocation: LocationInput;
  userId: Scalars['ID'];
};


export type MutationUpdateUserProfileImageArgs = {
  profileImageURL: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdateUserVerifiedStatusArgs = {
  id: Scalars['ID'];
  verified: Scalars['Boolean'];
};


export type MutationVerifyUserArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  location: Location;
  photoURL: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['Date'];
};

export enum PostOrderBy {
  CreatedAt = 'CREATED_AT'
}

export type Query = {
  __typename?: 'Query';
  getPost?: Maybe<Post>;
  getPostsNearLocation: Array<Post>;
  getUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
  searchPosts: Array<Post>;
  searchUsers: Array<User>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostsNearLocationArgs = {
  after?: InputMaybe<Scalars['String']>;
  distance: Scalars['Float'];
  first?: InputMaybe<Scalars['Int']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  order?: InputMaybe<SortOrder>;
  orderBy?: InputMaybe<PostOrderBy>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchPostsArgs = {
  query: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  query: Scalars['String'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  auth0UserId: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  homeLocation?: Maybe<Location>;
  id: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  profileImageURL?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  username: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostOrderBy: PostOrderBy;
  Query: ResolverTypeWrapper<{}>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Location: Location;
  LocationInput: LocationInput;
  Mutation: {};
  Post: Post;
  Query: {};
  String: Scalars['String'];
  User: User;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LocationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'location' | 'photoURL' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'auth0UserId' | 'email' | 'username'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
  updateUserHomeLocation?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserHomeLocationArgs, 'homeLocation' | 'userId'>>;
  updateUserProfileImage?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserProfileImageArgs, 'profileImageURL' | 'userId'>>;
  updateUserVerifiedStatus?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserVerifiedStatusArgs, 'id' | 'verified'>>;
  verifyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationVerifyUserArgs, 'id'>>;
}>;

export type PostResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  photoURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getPostsNearLocation?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostsNearLocationArgs, 'distance' | 'latitude' | 'longitude'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerySearchPostsArgs, 'query'>>;
  searchUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  auth0UserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homeLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>;
  profileImageURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

