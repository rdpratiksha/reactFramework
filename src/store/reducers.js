import sampleReducer from "./sampleReducer/reducer";
import getUserData from "../pages/services/reducer";
import createUser from "../pages/services/reducer";

export default {
    ...sampleReducer,
    ...getUserData,
    ...createUser
}