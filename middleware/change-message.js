import gql from "graphql-tag";

const SET_MESSAGE = gql`
  mutation SetMessage($message: String!) {
    setMessage(message: $message) @client
  }
`;

export default async function({ app }) {
  const client = app.apolloProvider.defaultClient;

  console.log("Trying to change!");

  return client.mutate({
    mutation: SET_MESSAGE,
    variables: { message: "Changed?" }
  });
}
