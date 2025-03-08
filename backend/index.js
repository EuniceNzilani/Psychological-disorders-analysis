const { MongoClient } = require('mongodb');
const uri = 'YOUR_MONGODB_URI';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('your-database-name');
    const collection = database.collection('your-collection-name');
    // Perform database operations
  } finally {
    await client.close();
  }
}
run().catch(console.dir);