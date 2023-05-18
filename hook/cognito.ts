// import("../helper/environment");
// import handler from "../helper/handler";
import { PrismaClient } from "@prisma/client";

// module.exports.preSignUp = handler(async (event) => {
//   event.response.autoConfirmUser = true;
//   if (event.request.userAttributes.hasOwnProperty("email")) {
//     event.response.autoVerifyEmail = true;
//   }
//   if (event.request.userAttributes.hasOwnProperty("phone_number")) {
//     event.response.autoVerifyPhone = true;
//   }

//   return event;
// });

const postSignupHandler = async (event) => {
  const prisma = new PrismaClient();

  if (event?.triggerSource !== "PostConfirmation_ConfirmForgotPassword") {
    const user = await prisma.user.findUnique({
      where: {
        email: event.request.userAttributes.email,
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          sub: event.request.userAttributes.sub,
          first_name: event.request.userAttributes.given_name,
          last_name: event.request.userAttributes.family_name,
          email: event.request.userAttributes.email,
        },
      });
    }
  }

  await prisma.$disconnect();

  return event;
};

export { postSignupHandler };
