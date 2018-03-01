import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Message from './components/Message';

var ItemList = React.createClass({
    render: function() {
        console.log(this.props);

        var items = this.props.data["items"].map(function(itemData) {
            var component = Components[itemData['itemClass']];
            return React.createElement(component, {
                data: itemData,
                key: itemData['id']
            });
        });
        console.log(items);
        return (
            <div className="list">
                <div>And I am an ItemList</div>
                <div>{items}</div>
            </div>
        );
    }
});


render(<div><App name="york" /><Message name='You' /></div>, document.getElementById('root'));

