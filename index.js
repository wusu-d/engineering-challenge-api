const express = require("express");
var cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const app = express();
app.use(cors());

const transactions = [
  {
    id: 1,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 2,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 3,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 4,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 5,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 6,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 7,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 8,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
  {
    id: 9,
    status: "active",
    date: "12/02/2022",
    name: "Bitcoin",
    type: "Debit",
  },
];

const TranscationType = new GraphQLObjectType({
  name: "Transaction",
  description: "This represents a transaction",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    status: { type: GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    type: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "query",
  description: "Root Query",
  fields: () => ({
    transactions: {
      type: new GraphQLList(TranscationType),
      description: "List of all transactions",
      resolve: () => transactions,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Server Running"));
