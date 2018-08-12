export default function({ app }) {
  return {
    clientState: {
      defaults: {
        message: "Sweet Message!"
      },
      resolvers: {
        Mutation: {
          setMessage: (_, { message }, { cache }) => {
            const data = { message };
            cache.writeData({ data });
            return null;
          }
        }
      }
    }
  };
}
