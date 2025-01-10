import React from 'react';
import PlaceForm from "../components/Places/PlaceForm";
import { insertData } from '../utils/database'

function AddPlace({ navigation }) {
    async function createPlaceHandler(place) {
        await insertData(place);
        navigation.navigate('AllPlaces');
    }

    return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;




// import PlaceForm from "../components/Places/PlaceForm";

// function AddPlace({ navigation }) {
//     function createPlaceHandler(place) {
//         navigation.navigate('AllPlaces', {
//             place: place
//         });
//     }

//     return <PlaceForm onCreatePlace={createPlaceHandler} />;
// }

// export default AddPlace;
