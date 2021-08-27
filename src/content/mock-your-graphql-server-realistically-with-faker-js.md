---
title: Mock your GraphQL server realistically with faker.js
date: 2019-08-07
---

Sometimes your GraphQL server need to use an API that isn't implemented yet or that is unavailable temporarly. Mocking seems the right thing to do in this case but it's hard to maintain good mock data so we end up with "Lorem ipsum" everywhere in our apps.

## faker.js

[faker.js](https://github.com/marak/Faker.js/) is a library that let you generate fake data in node or in the browser. It embarks a lot of methods to generate data for common use cases like:

- names
- addresses
- phones
- images
- companies
- ...

Even for... Lorem ipsum!

## Other tools

We will use [Koa](https://koajs.com/#introduction) to create the server. It is "a new web framework designed by the team behind Express". In practice, it has a different middleware implementation and embarks less things than express. If you want more information a [comparaison](https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md) is available on Koa's repository.

For GraphQL implementation we will use [Apollo Server](https://www.apollographql.com/docs/apollo-server/). It seems to be the most popular server implementation of GraphQL and it fits well with Koa since an [apollo-server-koa](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-koa) package exists and have been implemented by the Apollo Server team.

Finally we will use the well-known [cross-env](https://github.com/kentcdodds/cross-env) package to set environnement variables regardless of the platform you are using.

## Setting up the server

First of all, we create a folder with the following structure:

```
.
├── package.json
└── src
    └── index.js
```

For this article we will be using `yarn` but you can use `npm` as well. Init package.json with the `init` command:

```sh
yarn init
```

Install the following dependencies:

```sh
yarn add apollo-server-koa cross-env faker graphql koa
```

Add a `start` script that execute our `src/index.js` file:

```json
{
  "scripts": {
    "start": "node src/index.js"
  }
}
```

In the `src/index.js` file we instantiate a new Koa application:

```js
const Koa = require('koa');

const app = new Koa();

app.listen({port: 4000}, () =>
  console.log(`🚀 Server ready at http://localhost:4000`),
);
```

Run your `start` script. You should see the `console.log` message present in the above example in the console output.

## Create the GraphQL endpoint

It is time to implement our GraphQL endpoint. Let's say we are in the situation where an API isn't implemented yet. This API is supposed to expose a list of persons with their firstname and lastname. We will define a schema and make it accessible on a `/graphql` endpoint with `apollo-server-koa`.

Import `ApolloServer` and `gql` from `apollo-server-koa`:

```js
const {ApolloServer, gql} = require('apollo-server-koa');
```

We define a query that returns a list of person and the type Person itself:

```js
const typeDefs = gql`
  type Person {
    lastname: String
    firstname: String
  }

  type Query {
    persons: [Person]
  }
`;
```

Since the API doesn't exist yet we throw an error to inform user that he can't use this query:

```js
const resolvers = {
  Query: {
    persons: () => {
      throw Error('Not yet implemented');
    },
  },
};
```

We instantiate an Apollo server with the our type definitions and the resolver for our query:

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
```

Finally, apply the GraphQL middleware previously created to the Koa application:

```js
server.applyMiddleware({app});
```

If you start your server right now with the command `yarn start` and open the url `http://localhost:4000/graphql` in your browser. You should see the nice interface of [GraphQL IDE](https://github.com/prisma/graphql-playground).

![GraphQL IDE](https://raw.githubusercontent.com/frinyvonnick/graphql-faker-mocks/master/assets/GraphQLIDE.png)

If you type a query to retrieve the list of persons with their data:

```
{
  persons {
    firstname,
    lastname
  }
}
```

It should result in getting the following error:

```
{
  "errors": [
		{
			"message": "Not yet implemented",
		}
	]
}
```

## Mock it with faker.js

This error isn't the expected result. We want random realistic data when our server is mocked. To achieve it we need to override the default resolver that throw an error by another that generate fake data.

For this purpose we will set the `NODE_ENV` environnement variable to `mock` to determine which behavior our Apollo server should follow. We will achieve that by adding a `mock` script in our `package.json` that set the `NODE_ENV` variable using `cross-env` and calling the `start` script:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "mock": "cross-env-shell NODE_ENV=mock yarn start"
  }
}
```

Apollo server has a `mocks` property in its options that take either a Boolean or a object with mocked resolvers. To begin we will set it to `true` if `NODE_ENV` is equal to `mock`:

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: process.env.NODE_ENV === 'mock' ? true : false,
});
```

At this step if you re-execute your query in the GraphQL IDE you end up with a first result:

```json
{
  "data": {
    "persons": [
      {
        "firstname": "Hello World",
        "lastname": "Hello World"
      },
      {
        "firstname": "Hello World",
        "lastname": "Hello World"
      }
    ]
  }
}
```

That's nice but it isn't really realistic. To add faker we need to implement our own mocked resolver and pass it to Apollo server. In mocked resolvers the Query property has to be a function that return an object with the resolvers definition. In our resolver for `persons` query we return an array of two person.

`faker.js` methods are organized in namespace. We will use the `name` namespace that contains methods such as:

- firstName
- lastName
- jobTitle
- title
- ...

You guess it, we will use `firstName` and `lastName` methods to generate random data for our two persons:

```js
const mockResolvers = {
  Query: () => ({
    persons: () => [
      {
        firstname: name.firstName(),
        lastname: name.lastName(),
      },
      {
        firstname: name.firstName(),
        lastname: name.lastName(),
      },
    ],
  }),
};

// ...

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: process.env.NODE_ENV === 'mock' ? mockResolvers : false,
});
```

Execute your query in the GraphQL IDE you now have nice datas like:

```json
{
  "data": {
    "persons": [
      {
        "firstname": "Mélissa",
        "lastname": "Mathieu"
      },
      {
        "firstname": "Camille",
        "lastname": "Richard"
      }
    ]
  }
}
```

## Bonus

Here is a method I use to generate random sized arrays for my mocked resolvers:

```js
const randomArray = (min, max, callback) => {
  const size = random.number({min, max});
  return Array.from({length: size}, callback);
};
```

We could refactor the previous resolver using this method like this:

```js
const mockResolvers = {
  Query: () => ({
    persons: () =>
      randomArray(2, 6, () => ({
        firstname: name.firstName(),
        lastname: name.lastName(),
      })),
  }),
};
```

I made a [repository](https://github.com/frinyvonnick/graphql-faker-mocks) with all the sources presented in this article. Feedback is appreciated 🙏 Please tweet me if you have any questions [@YvonnickFrin](https://twitter.com/YvonnickFrin)!
