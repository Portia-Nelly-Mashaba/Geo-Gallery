# Geo Gallery App

## Description
The Geo Gallery app is a mobile application that allows users to create and view a gallery of images with associated locations. Users can save images with details like title, address, and geographic coordinates (latitude and longitude) and view these details on a map.

## Features
- Add new places with an image, title, address, and geographic coordinates.
- View a list of saved places.
- View detailed information about each place.
- Display the location of a place on a map.

## Technologies Used
- React Native
- Expo
- SQLite (via expo-sqlite)
- react-native-maps

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Portia-Nelly-Mashaba/Geo-Gallery.git
   cd geo-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   expo start
   ```

4. Open the app on your device using the Expo Go app or an emulator.

## Usage
1. **Add a new place**:
   - Click on the 'Add Place' button.
   - Fill in the title, image, and address fields.
   - Tap on the map to select the location.
   - Save the place.

2. **View a list of places**:
   - The main screen displays a list of saved places with their images and titles.

3. **View place details**:
   - Click on a place from the list to view detailed information.
   - The detailed view shows the image, title, address, and geographic coordinates of the place.
   - Click on 'View on Map' to see the location on the map.

4. **Map interactions**:
   - You can interact with the map to select and view locations.
   - The selected location is marked with a pin.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or create a pull request.

