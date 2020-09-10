const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/space");
const app = express();

// app.use("/graphql", graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server is started on: " + port));
