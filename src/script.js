const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  const newUserInput = await prisma.link.create({
    data: {
      email: 'helene.schmidt@conny.legal',
      message: 'Lorem ipsum sit amet consectetur, adipisicing elit.'
    }
  })
  const getAllUserInput = await prisma.link.findMany()
  console.log(getAllUserInput);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
