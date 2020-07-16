import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import { AxisTheme } from '../../../packages/theme'
import { Spinner } from '../../../packages/spinner'

storiesOf('Components | Spinner', module)
  .add('default', () => {
    class SpinnerContaier extends Component {
      render() {
        return (
          <AxisTheme>
            <Spinner />
          </AxisTheme>
        )
      }
    }

    return <SpinnerContaier />
  })

  .add('with message', () => {
    class SpinnerContaier extends Component {
      render() {
        return (
          <AxisTheme>
            <Spinner message={'Loading'} />
          </AxisTheme>
        )
      }
    }

    return <SpinnerContaier />
  })
  .add('another color', () => {
    class SpinnerContaier extends Component {
      render() {
        return (
          <AxisTheme>
            <Spinner color={'red'} message={'Loading'} />
          </AxisTheme>
        )
      }
    }

    return <SpinnerContaier />
  })
  .add('with Box props', () => {
    class SpinnerContaier extends Component {
      render() {
        return (
          <AxisTheme>
            <Spinner width={'xlarge'} background={'light-4'} height={'xlarge'} message={'Loading'} />
          </AxisTheme>
        )
      }
    }

    return <SpinnerContaier />
  })
