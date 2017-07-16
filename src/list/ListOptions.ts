import * as Marionette from 'backbone.marionette';

export default interface ListOptions<TModel extends Backbone.Model> {
    collection: Backbone.Collection<TModel>;
    childView: Marionette.View<TModel>;
    sortable?: boolean;
}