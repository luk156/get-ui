import {ListOptions} from "./ListOptions";
import "./css/list.css";
import * as Backbone from 'backbone';
import * as Marionette from 'backbone.marionette';
import * as _ from 'underscore';

export default class List<TModel extends Backbone.Model> extends Marionette.CollectionView<TModel, Marionette.View<TModel>> {

    options: ListOptions<TModel>;

    constructor(listOptions: ListOptions<TModel>, viewOptions?: Backbone.ViewOptions<TModel>) {

        let behaviors: any = [];

        if (listOptions.sortable){
            behaviors = [{
                  behaviorClass: SortableBehavior
                }
              ];
        }

        super($.extend(viewOptions, {
            className: "list-group list-group-get4",
            collection: listOptions.collection,
            childView: listOptions.childView,
            behaviors: behaviors
        }));

        this.options = _.defaults(listOptions, {
            sortable: false
        });

        let self = this;

        this.listenTo(this.collection, "before:fetch", () => {
            self.triggerMethod('load:start');
        });
    };


    public onRender() {
        this.triggerMethod('load:end');
    }
}

class SortableBehavior extends Marionette.Behavior {

    constructor(options?: any, view?: any) {
        super($.extend({
            events: {
                'sortupdate': 'onSortUpdate'
            }
        },options), view);

    }


    onSortUpdate(e: any, ui:any) {
        let $childElement = ui.item;
        let newIndex = $childElement.parent().children().index($childElement);
        let collection = this.view.collection;
        let model = collection.get($childElement.attr('data-model-cid'));
        // do not use silent to notify other obversers.
        collection.remove(model);
        collection.add(model, {at: newIndex});
        this.view.triggerMethod("reorder" , collection);
    }

    onRender() {

        this.$el.sortable({

        }); // options are passed to the sortable
    }

    onAddChild(view: any, childView:any) {
        childView.$el.attr('data-model-cid', childView.model.cid);
    }


}

