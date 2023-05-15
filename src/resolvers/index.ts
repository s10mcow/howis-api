import { Resolvers } from "../types/types";

export const resolvers: Resolvers = {
  Query: {
    getUser: async (_parent, { id }, { prisma }) => {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { homeLocation: true },
      });
      if (!user) {
        throw new Error(`No user found for id: ${id}`);
      }
      return user;
    },
    getPost: async (_parent, { id }, { prisma }) => {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { author: true, location: true },
      });
      return post;
    },
    getPostsNearLocation: async (
      _,
      { first, after, latitude, longitude, distance, orderBy, order },
      { prisma }
    ) => {
      const posts = await prisma.post.findMany({
        where: {
          location: {
            latitude: {
              gte: latitude - distance,
              lte: latitude + distance,
            },
            longitude: {
              gte: longitude - distance,
              lte: longitude + distance,
            },
          },
        },
        include: { author: true, location: true },
      });

      return posts;
    },
  },

  Mutation: {
    createPost: async (
      _,
      { photoURL, caption, userId, tags, location },
      { prisma }
    ) => {
      const newPost = prisma.post.create({
        data: {
          photoURL,
          caption,
          tags: tags || undefined,
          author: { connect: { id: Number(userId) } },
          location: { create: location },
        },
        include: {
          author: true,
          location: true,
        },
      });

      return newPost;
    },
    createUser: async (_, { username, auth0UserId, email }, { prisma }) => {
      const newUser = await prisma.user.create({
        data: {
          username,
          auth0UserId,
          email,
        },
      });

      return newUser;
    },
    updateUserHomeLocation: async (_, { userId, homeLocation }, { prisma }) => {
      const updatedUser = await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          homeLocation: {
            update: {
              latitude: homeLocation.latitude,
              longitude: homeLocation.longitude,
            },
          },
        },
      });

      return updatedUser;
    },
    updatePost: async (
      _,
      { id, photoURL, caption, tags, location },
      { prisma }
    ) => {
      const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: {
          photoURL: photoURL || undefined,
          caption,
          tags: tags || undefined,
          location: {
            update: {
              latitude: location?.latitude,
              longitude: location?.longitude,
            },
          },
        },
        include: {
          author: true,
          location: true,
        },
      });

      return updatedPost;
    },
    deletePost: async (_, { id }, { prisma }) => {
      const deletedPost = await prisma.post.delete({
        where: { id: Number(id) },
      });

      return Boolean(deletedPost);
    },
    updateUserProfileImage: async (
      _,
      { userId, profileImageURL },
      { prisma }
    ) => {
      const updatedUser = await prisma.user.update({
        where: { id: Number(userId) },
        data: { profileImageURL },
      });

      return updatedUser;
    },
    verifyUser: async (_, { id }, { prisma }) => {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });

      if (!user) {
        throw new Error(`No user found for id: ${id}`);
      }

      return user;
    },
    updateUser: async (_, { id, username, email }, { prisma }) => {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          username: username || undefined,
          email: email || undefined,
        },
      });

      return updatedUser;
    },
    updateUserVerifiedStatus: async (_, { id, verified }, { prisma }) => {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { verified },
      });

      return updatedUser;
    },
  },
};

export default resolvers;
