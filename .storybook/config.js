import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import {withOptions} from '@storybook/addon-options';
import {configureViewport, INITIAL_VIEWPORTS,withViewport} from '@storybook/addon-viewport';

const req = require.context('../packages', true, /.stories.js$/);

function loadStories() {
    console.log('Load Stories', req.keys())
    req.keys().forEach(filename => req(filename));
}

configureViewport({
    ...INITIAL_VIEWPORTS
})


addDecorator(
    withOptions({
        name: 'Centrifuge Axis',
        url: 'https://axis.centrifuge.io',
        sortStoriesByKind: true,
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/
    })
);


addDecorator(withViewport())

configure(loadStories, module);
