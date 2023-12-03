import { createStore} from "redux"; 
import DiReducer from "./reducer/DiReducer";

const store = createStore(DiReducer);

export default store;