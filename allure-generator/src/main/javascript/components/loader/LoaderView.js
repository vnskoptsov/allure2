import './styles.css';
import {View} from 'backbone.marionette';
import {options} from '../../decorators';
import template from './LoaderView.hbs';

@options({
    text: 'Loading...'
})
export default class LoaderView extends View {
    template = template;

    initialize(options) {
        this.options = options;
    }

    serializeData() {
        return this.options;
    }
}
