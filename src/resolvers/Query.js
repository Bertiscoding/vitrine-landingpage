async function getUserInput(parent, args, context, info) {
 const userinput = await context.prisma.user.findFirst({where: { id: parseInt(args.id) }})
 return userinput
}

async function getAllUserInput(parent, args, context, info) {
  const userinput = await context.prisma.user.findMany()
  return userinput
 }

module.exports = {
 getUserInput,
 getAllUserInput,
}
