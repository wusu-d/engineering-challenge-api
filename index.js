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
    status: "pending",
    date: "13/02/2022",
    name: "David Wusu",
    type: "Deposit",
  },
  {
    id: 2,
    status: "active",
    date: "12/02/2022",
    name: "Felix Imafidon",
    type: "Deposit",
  },
  {
    id: 3,
    status: "active",
    date: "12/02/2022",
    name: "Farawe Taiwo",
    type: "Deposit",
  },
  {
    id: 4,
    status: "declined",
    date: "12/02/2022",
    name: "Timilehin Aregbe",
    type: "Withdrawal",
  },
  {
    id: 5,
    status: "active",
    date: "12/02/2022",
    name: "Razak Kolawole",
    type: "Deposit",
  },
  {
    id: 6,
    status: "pending",
    date: "12/02/2022",
    name: "Shadow Kingsley",
    type: "Withdrawal",
  },
  {
    id: 7,
    status: "declined",
    date: "12/02/2022",
    name: "Jesutofunmi Precious",
    type: "Withdrawal",
  },
  {
    id: 8,
    status: "active",
    date: "12/02/2022",
    name: "Queeneth Joy",
    type: "Deposit",
  },
  {
    id: 9,
    status: "active",
    date: "12/02/2022",
    name: "Daddy Ayo",
    type: "Withdrawal",
  },
  {
    id: 10,
    status: "pending",
    date: "13/02/2022",
    name: "Chioma Blessing",
    type: "Deposit",
  },
  {
    id: 11,
    status: "pending",
    date: "13/02/2022",
    name: "Tobi Ella",
    type: "Deposit",
  },
  {
    id: 12,
    status: "active",
    date: "12/02/2022",
    name: "Ruth Sade",
    type: "Deposit",
  },
  {
    id: 13,
    status: "active",
    date: "12/02/2022",
    name: "Kehinde Blessing",
    type: "Deposit",
  },
  {
    id: 14,
    status: "declined",
    date: "11/02/2022",
    name: "Tomi Aregbe",
    type: "Withdrawal",
  },
  {
    id: 15,
    status: "active",
    date: "10/02/2022",
    name: "Basit Daniel",
    type: "Deposit",
  },
  {
    id: 16,
    status: "pending",
    date: "12/02/2022",
    name: "Lekan Chidi",
    type: "Withdrawal",
  },
  {
    id: 17,
    status: "declined",
    date: "11/02/2022",
    name: "Victor Kunle",
    type: "Withdrawal",
  },
  {
    id: 18,
    status: "active",
    date: "12/02/2022",
    name: "Janet Joy",
    type: "Deposit",
  },
  {
    id: 19,
    status: "active",
    date: "11/02/2022",
    name: "Lati Ade",
    type: "Withdrawal",
  },
  {
    id: 20,
    status: "pending",
    date: "13/02/2022",
    name: "Ene Faith",
    type: "Deposit",
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
