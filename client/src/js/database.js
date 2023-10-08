import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    // connect to db
    const connectDB = await openDB('jate', 1);

    // create new transaction and define privileges
    const newTx = connectDB.transaction('jate', 'readwrite');

    // open the object store
    const store = tx.objectStore('jate');

    // make the PUT request
    const putRequest = store.put({id: 1, value: content});

    // get result status
    const result = await putRequest;
    console.log('data saved: ', result);
  }
  // catch errors
  catch (error) {
    console.error('putDb not implemented');
  } 
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
