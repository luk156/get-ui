import ChildView = Marionette.ChildView;
/**
 * Created by matteo on 11/02/17.
 */

export interface ListOptions<TModel extends Backbone.Model> {
    collection: Backbone.Collection<TModel>;
    childView: ChildView<TModel>;
    sortable?: boolean;
}