import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Post: a.model({
      content: a.string(),
      likes: a.integer(),
      comments: a.integer(),
    }),

  User : a.model({
    email: a.email(),
    password: a.string()
  })  

    .authorization(allow => [allow.publicApiKey()])
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});
