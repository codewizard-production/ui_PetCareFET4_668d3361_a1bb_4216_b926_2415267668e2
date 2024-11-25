import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
TrainingCreate, TrainingEdit, TrainingView, 
TrainingTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/PetCareFET4/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Trainings/view/:id" element={<TrainingView {...props} title={'View Training'} />} />
                        <Route path="Trainings/edit/:id" element={<TrainingEdit {...props} title={'Edit Training'} />} />
                        <Route path="Trainings/create" element={<TrainingCreate {...props} title={'Create Training'} />} />

                <Route path="/products1/tiles" element={<TrainingTiles {...props} title={'Tiles'} />} />
        </Routes>
    )

};

export default Component;
