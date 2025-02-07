import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { customer } from './customer'
import { order } from './order'
import { review } from './review'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , category, customer, order, review],
}
