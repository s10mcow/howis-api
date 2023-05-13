// import { Resolvers } from "../src/generated/graphql";

// export const resolvers: Resolvers = {
//   Query: {
//     getUser: async (_parent, { id }, { prisma }) => {
//       const user = await prisma.user.findUnique({
//         where: { id },
//         include: {
//           posts: true,
//         },
//       });
//       return user;
//     },
//     // getUser: async (_, { id }, { prisma }) => {
//     //   return await prisma.user.findUnique({
//     //     where: {
//     //       id,
//     //     },
//     //   });
//     // },
//     // getPost: (_, { id }, { prisma }) => {
//     //   // Implement logic to fetch post by ID
//     //   return prisma.post.findUnique(id);
//     // },
//     // getMessages: (_, { userId }, { prisma }) => {
//     //   return prisma.message.findMany({
//     //     where: {
//     //       OR: [
//     //         {
//     //           senderId: userId,
//     //         },
//     //         {
//     //           receiverId: userId,
//     //         },
//     //       ],
//     //     },
//     //   });
//     //   // Implement logic to fetch messages for a user
//     // },
//     // searchUsers: (_, { query }, { prisma }) => {
//     //   // Implement logic to search users by query
//     // },
//     // searchPosts: (_, { query }, { prisma }) => {
//     //   // Implement logic to search posts by query
//     // },
//     // getPostsNearLocation: (
//     //   _,
//     //   { first, after, latitude, longitude, distance, orderBy, order }
//     // ) => {
//     //   // Implement logic to fetch posts near a location with pagination and sorting
//     // },
//   },
//   Mutation: {
//     createPost: (_, args, { prisma }) => {
//       // Implement logic to create a new post
//       return prisma.post.create({ ...args });
//     },
//     // updateUserHomeLocation: (_, { userId, homeLocation }, { prisma }) => {
//     //   // Implement logic to update a user's home location
//     // },
//     // updatePost: (_, { id, photoURL, caption, tags, location }, { prisma }) => {
//     //   // Implement logic to update a post
//     // },
//     // deletePost: (_, { id }, { prisma }) => {
//     //   // Implement logic to delete a post
//     // },
//     // deleteLike: (_, { id }, { prisma }) => {
//     //   // Implement logic to delete a like
//     // },
//     // updateComment: (_, { id, content }, { prisma }) => {
//     //   // Implement logic to update a comment
//     // },
//     // deleteComment: (_, { id }, { prisma }) => {
//     //   // Implement logic to delete a comment
//     // },
//     // createLike: (_, { userId, postId }, { prisma }) => {
//     //   // Implement logic to create a like
//     // },
//     // createComment: (_, { userId, postId, content }, { prisma }) => {
//     //   // Implement logic to create a comment
//     // },
//     // createMessage: (_, { senderId, receiverId, content }, { prisma }) => {
//     //   // Implement logic to create a message
//     // },
//     // followUser: (_, { userId, followerId }, { prisma }) => {
//     //   // Implement logic to follow a user
//     // },
//     // unfollowUser: (_, { userId, followerId }, { prisma }) => {
//     //   // Implement logic to unfollow a user
//     // },
//     // createUser: (_, args, { prisma }) => {
//     //   // Implement logic to create a user
//     //   return prisma.user.create({ data: args });
//     // },
//     // updateUserProfileImage: (_, { userId, profileImageURL }, { prisma }) => {
//     //   // Implement logic to update a user's profile image
//     // },
//     // verifyUser: (_, { id }, { prisma }) => {
//     //   // Implement logic to verify a user
//     // },
//     // updateUserVerifiedStatus: (_, { id, verified }, { prisma }) => {
//     //   // Implement logic to update a user's verified status
//     // },
//     // updateUser: (_, { id, username, email, phoneNumber, bio }, { prisma }) => {
//     //   // Implement logic to update a user's information
//     // },
//   },
//   // Subscription: {
//   //   postCreated: {
//   //     subscribe: (_, { userId }, { pubsub }) => {
//   //       // Implement logic to subscribe to postCreated events for a specific user
//   //     },
//   //   },
//   //   postLiked: {
//   //     subscribe: (_, { postId }, { pubsub }) => {
//   //       // Implement logic to subscribe to postLiked events for a specific post
//   //     },
//   //   },
//   //   commentAdded: {
//   //     subscribe: (_, { postId }, { pubsub }) => {
//   //       // Implement logic to subscribe to commentAdded events for a specific post
//   //     },
//   //   },
//   //   newFollower: {
//   //     subscribe: (_, { userId }, { pubsub }) => {
//   //       //implement logic to subscribe to newFollower events for a specific user
//   //     },
//   //   },
//   //   newMessage: {
//   //     subscribe: (_, { receiverId }, { pubsub }) => {
//   //       // Implement logic to subscribe to newMessage events for a specific receiver
//   //     },
//   //   },
//   // },
// };

// export default resolvers;
