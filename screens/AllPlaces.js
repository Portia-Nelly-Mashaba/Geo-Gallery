import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../utils/database';

function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadedPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }
        if (isFocused) {
            loadedPlaces();
            // setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
        }
    }, [isFocused]);

    return (
        <View style={{ flex: 1 }}>
            <PlacesList places={loadedPlaces} />
        </View>
    );
}

export default AllPlaces;




// import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';
// import PlacesList from '../components/Places/PlacesList';
// import { useIsFocused } from '@react-navigation/native';

// function AllPlaces({ route }) {
//   const [loadedPlaces, setLoadedPlaces] = useState([]);
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (isFocused && route.params && route.params.place) {
//       setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
//     }
//   }, [isFocused, route]);

//   return (
//     <View style={{ flex: 1 }}>
//       <PlacesList places={loadedPlaces} />
//     </View>
//   );
// }

// export default AllPlaces;








// // import { View } from 'react-native';
// // import React, { useEffect, useState } from 'react';
// // import PlacesList from '../components/Places/PlacesList';
// // import { useIsFocused } from '@react-navigation/native';

// // function AllPlaces({ route }) { // Ensure route is destructured correctly
// //     const [loadedPlaces, setLoadedPlaces] = useState([]);
// //     const isFocused = useIsFocused();

// //     useEffect(() => {
// //         if (isFocused && route.params?.place) { // Ensure route.params and place exist
// //             setLoadedPlaces((curPlaces) => {
// //                 // Avoid duplicate entries
// //                 const isDuplicate = curPlaces.some(
// //                     (place) => place.id === route.params.place.id
// //                 );
// //                 if (!isDuplicate) {
// //                     return [...curPlaces, route.params.place];
// //                 }
// //                 return curPlaces;
// //             });
// //         }
// //     }, [isFocused, route.params]); // Add route.params to dependency array

// //     return (
// //         <View style={{ flex: 1 }}>
// //             <PlacesList places={loadedPlaces} />
// //         </View>
// //     );
// // }

// // export default AllPlaces;
