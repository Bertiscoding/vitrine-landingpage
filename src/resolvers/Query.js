async function getUserInput(parent, args, context, info) {
 const where = args.filter
   ? {
     OR: [
       { email: { contains: args.filter } },
       { message: { contains: args.filter } },
     ],
   }
   : {}

 const userinput = await context.prisma.link.findMany({
   where,
 })

 return userinput
}

module.exports = {
 getUserInput,
}
