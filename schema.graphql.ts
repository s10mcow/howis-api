const { gql } = require("apollo-server");

module.exports = gql`
  enum SortOrder {
    ASC
    DESC
  }

  enum PostOrderBy {
    CREATED_AT
    LIKES
  }

  type Location {
    latitude: Float!
    longitude: Float!
  }

  input LocationInput {
    latitude: Float!
    longitude: Float!
  }

  type User {
    id: ID!
    auth0UserId: String!
    username: String!
    email: String!
    phoneNumber: String
    bio: String
    posts(first: Int, after: String): PostConnection!
    followers: [User!]!
    following: [User!]!
    homeLocation: Location
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
    profileImageURL: String
  }

  type Post {
    id: ID!
    photoURL: String!
    caption: String
    author: User!
    location: Location!
    likes: [Like!]!
    comments: [Comment!]!
    tags: [String!]
    createdAt: String!
    updatedAt: String!
  }

  type Like {
    id: ID!
    user: User!
    createdAt: String!
  }

  type Comment {
    id: ID!
    content: String!
    user: User!
    post: Post!
    createdAt: String!
  }

  type Message {
    id: ID!
    content: String!
    sender: User!
    receiver: User!
    createdAt: String!
  }
  type PostEdge {
    cursor: String!
    node: Post!
  }

  type PostConnection {
    edges: [PostEdge]
    pageInfo: PageInfo!
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
  }
  type Query {
    getUser(id: ID!): User
    getPost(id: ID!): Post
    getMessages(userId: ID!): [Message!]!
    searchUsers(query: String!): [User!]!
    searchPosts(query: String!): [PostConnection!]!
    getPostsNearLocation(
      first: Int
      after: String
      latitude: Float!
      longitude: Float!
      distance: Float!
      orderBy: PostOrderBy
      order: SortOrder
    ): PostConnection!
  }

  type Mutation {
    createPost(
      photoURL: String!
      caption: String
      userId: ID!
      tags: [String!]
      location: LocationInput!
    ): Post
    updateUserHomeLocation(userId: ID!, homeLocation: LocationInput!): User
    updatePost(
      id: ID!
      photoURL: String
      caption: String
      tags: [String!]
      location: LocationInput
    ): Post
    deletePost(id: ID!): Boolean
    deleteLike(id: ID!): Boolean
    updateComment(id: ID!, content: String!): Comment
    deleteComment(id: ID!): Boolean
    createLike(userId: ID!, postId: ID!): Like
    createComment(userId: ID!, postId: ID!, content: String!): Comment
    createMessage(senderId: ID!, receiverId: ID!, content: String!): Message
    followUser(userId: ID!, followerId: ID!): User
    unfollowUser(userId: ID!, followerId: ID!): User
    createUser(
      auth0UserId: String!
      username: String!
      email: String!
      phoneNumber: String
      bio: String
      profileImageURL: String
    ): User
    updateUserProfileImage(userId: ID!, profileImageURL: String!): User
    verifyUser(id: ID!): User
    updateUserVerifiedStatus(id: ID!, verified: Boolean!): User
    updateUser(
      id: ID!
      username: String
      email: String
      phoneNumber: String
      bio: String
    ): User
  }

  type Subscription {
    postCreated(userId: ID!): Post
    postLiked(postId: ID!): Like
    commentAdded(postId: ID!): Comment
    newFollower(userId: ID!): User
    newMessage(receiverId: ID!): Message
  }
`;
