import { addParameters, configure } from '@storybook/react'

const req = require.context('./src', true, /.tsx$/)

function loadStories() {
  console.log('Load Stories', req.keys())
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    theme: {
      brandTitle: 'Centrifuge Axis',
      brandUrl: 'https://axis.centrifuge.io',
      storybookPreviewBackground: 'red',
      brandImage: 'https://centrifuge.io/static/centrifuge-wordmark-dc6013383eb23cacc311a28aa17419fb.svg',
    },
  },
})

configure(loadStories, module)
