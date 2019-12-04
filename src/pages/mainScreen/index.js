import { createStackNavigator } from "react-navigation";
import { LIST_VIEW, DETAIL_VIEW, NEW_RECORD, UPDATE_RECORD } from "../routes";

import ListView from "./ListView";
import DetailView from "./DetailView";
import UpdateRecord from "./UpdateRecord";
import NewRecord from "./NewRecord";

export default createStackNavigator(
  {
    [LIST_VIEW]: ListView,
    [DETAIL_VIEW]: DetailView,
    [UPDATE_RECORD]: UpdateRecord,
    [NEW_RECORD]: NewRecord
  },
  {
    headerMode: "none"
  }
);
