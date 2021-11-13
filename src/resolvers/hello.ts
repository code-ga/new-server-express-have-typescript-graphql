import { Query, Resolver } from "type-graphql";
// hello resolver
@Resolver()
export  class HelloResolver {
    @Query(() => String)
    hello() {
        return "Hello World!";
    }
}