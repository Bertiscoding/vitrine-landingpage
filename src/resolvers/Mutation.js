async function createUserInput(parent, args, context, info) {
 const newUserInput = await context.prisma.user.create({
   data: {
     email: args.email,
     message: args.message,
   }
 })
 context.pubsub.publish("NEW_USER_INPUT", newUserInput)
 return newUserInput
}

module.exports = {
  createUserInput,
}
