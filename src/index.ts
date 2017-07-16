import * as Backbone from "backbone";

import List from "./list/List";
import {ListOptions} from "./list/ListOptions";

export function list(options: ListOptions<Backbone.Model>) {
        return new List(options);
    };

