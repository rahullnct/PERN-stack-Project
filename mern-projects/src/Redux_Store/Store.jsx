import {configureStore} from '@reduxjs/toolkit';
import ThemeSlice from "../Slice_Pack/ThemeSlice";
import  WorkSpaceReducer from "../Slice_Pack/WorkSpaceSlice";
export const Store= configureStore({
    reducer:{
      mytheme: ThemeSlice,
      workspace: WorkSpaceReducer,
    }
});

