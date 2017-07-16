
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import * as _ from 'underscore';

import List from "./list/List";
import ListOptions from "./list/ListOptions";

export default class GetUi {
    List(options: ListOptions<Backbone.Model>) {
        return new List(options);
    }
}

