import * as Marionette from 'backbone.marionette';
/**
 * Created by matteo on 11/02/17.
 */

export interface ListOptions<TModel extends Backbone.Model> {
    collection: Backbone.Collection<TModel>;
    childView: Marionette.View<TModel>;
    sortable?: boolean;
}