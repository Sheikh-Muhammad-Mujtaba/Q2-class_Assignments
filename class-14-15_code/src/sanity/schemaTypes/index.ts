import { type SchemaTypeDefinition } from 'sanity'
import { VideoPostSchema } from './videopost'
import { UserSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    VideoPostSchema,
    UserSchema
  ],
}
