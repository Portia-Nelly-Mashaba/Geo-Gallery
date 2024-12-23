import * as SQLite from "expo-sqlite";

// Initialize and create database and table
async function init() {
  const db = await SQLite.openDatabaseAsync('gallery.db');

  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );
    `);
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}
export { init};




// import * as SQLite from "expo-sqlite";



// const database = SQLite.openDatabase("gallery.db");

// export function init() {
//   const promise = new Promise((resolve, reject) => {
//     database.transaction((tx) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS gallery (
//                 id INTEGER PRIMARY KEY NOT NULL,
//                 title TEXT NOT NULL,
//                 imageUri TEXT NOT NULL,
//                 address TEXT NOT NULL,
//                 lat REAL NOT NULL,
//                 lng REAL NOT NULL
//             )`,
//         [],
//         () => {
//           resolve();
//         },
//         (_, error) => {
//           reject(error);
//         }
//       );
//     });
//   });

//   return promise;
// }
