import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

// Initialize and create database and table
async function init() {
  const db = await SQLite.openDatabaseAsync("gallery.db", {
    useNewConnection: true
  });

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
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Insert data into the gallery table
async function insertData(place) {
  const db = await SQLite.openDatabaseAsync("gallery.db", {
    useNewConnection: true
  });

  // Extract lat and lng from the location object
  const { lat, lng } = place.location;
  const data = {
    title: place.title,
    imageUri: place.imageUri,
    address: place.address,
    lat,
    lng
  };

  // Log the values to ensure they are not null
  console.log("Inserting data:", data);

  if (data.title == null || data.imageUri == null || data.address == null || data.lat == null || data.lng == null) {
    console.error("One or more values are null:", data);
    return;
  }

  try {
    const result = await db.runAsync(
      `INSERT INTO gallery (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [data.title, data.imageUri, data.address, data.lat, data.lng]
    );
    console.log("Data inserted successfully:", result);
    console.log("Insert ID:", result.lastInsertRowId); // Log the insert ID
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

// Fetch data from the gallery table and convert to Place objects
async function fetchPlaces() {
  const db = await SQLite.openDatabaseAsync("gallery.db", {
    useNewConnection: true
  });

  try {
    const result = await db.getAllAsync('SELECT * FROM gallery');
    console.log("Fetched places:", result);

    const places = [];
    for (const dp of result) { // Ensure correct iteration over result
      places.push(
        new Place(dp.title, dp.imageUri, {
          address: dp.address,
          lat: dp.lat,
          lng: dp.lng,
        }, dp.id)
      );
    }

    console.log("Places array:", places);
    return places;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch details of a specific place by ID
async function fetchPlaceDetails(id) {
  const db = await SQLite.openDatabaseAsync("gallery.db", {
    useNewConnection: true
  });

  try {
    const result = await db.getAllAsync(
      'SELECT * FROM gallery WHERE id = ?',
      [id]
    );
    console.log("Fetched place details:", result);

    const dbPlace = result[0];
    if (dbPlace) {
      const place = new Place(
        dbPlace.title,
        dbPlace.imageUri,
        {
          address: dbPlace.address,
          lat: dbPlace.lat,
          lng: dbPlace.lng
        },
        dbPlace.id
      );
      console.log("Place details object:", place);
      return place;
    } else {
      console.log("No place found with the given ID.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching place details:", error);
  }
}

export { init, insertData, fetchPlaces, fetchPlaceDetails };









// import * as SQLite from "expo-sqlite";

// // Initialize and create database and table
// async function init() {
//   const db = await SQLite.openDatabaseAsync("gallery.db");

//   try {
//     await db.execAsync(`
//       CREATE TABLE IF NOT EXISTS gallery (
//         id INTEGER PRIMARY KEY NOT NULL,
//         title TEXT NOT NULL,
//         imageUri TEXT NOT NULL,
//         address TEXT NOT NULL,
//         lat REAL NOT NULL,
//         lng REAL NOT NULL
//       );
//     `);
//     console.log("Table created successfully.");
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// }

// // Insert data into the gallery table
// async function insertData(place) {
//   const db = await SQLite.openDatabaseAsync("gallery.db");
//   try {
//     const result = await db.runAsync(
//       `INSERT INTO gallery (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
//       [place.title, place.imageUri, place.address, place.lat, place.lng]
//     );
//     console.log("Data inserted successfully:", result);
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   }
// }
// export { init, insertData };

