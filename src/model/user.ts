// this is the expale typegoose model

import { getModelForClass, ModelOptions, prop } from "@typegoose/typegoose";
import { Field } from "type-graphql";

@ModelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @Field()
  @prop()
  _id: string;
  @Field()
  @prop()
  username: string;
  @Field()
  @prop()
  password: string;
  @Field()
  @prop()
  email: string;
}

// this is the export typegoose model to crete the graphql schema
export default User;
// this is the export typegoose model to crete the model
export const UserModel = getModelForClass(User);
