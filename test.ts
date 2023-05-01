import { config } from 'dotenv'
config();

import { connect } from '@planetscale/database'

const a = process.env.DATABASE_HOST;

const dbConfig = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
}

const collectionSelect = 'select * from Collection';
const itemSelect = 'select * from Item';
const joinSelect = 'select * from Collection left join Item on Collection.id = Item.collectionId';
const specificSelect = `
SELECT
  Collection.id AS collection_id,
  Collection.name AS collection_name,
  Item.id AS item_id,
  Item.name AS item_name
FROM
  Collection
LEFT JOIN
  Item ON Collection.id = Item.collectionId;
`
const starSelect = `
SELECT
  Collection.*,
  Item.*
FROM
  Collection
LEFT JOIN
  Item ON Collection.id = Item.collectionId;
`
const conn = connect(dbConfig)
const results = conn.execute(specificSelect).then((res) => {
  console.log(res)
});
