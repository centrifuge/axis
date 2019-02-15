import React from 'react';
import {storiesOf} from '@storybook/react';
import {AxisTheme} from "../../../packages/theme/src/AxisTheme";
import {Button} from "grommet";


storiesOf('Axis Theme | Grommet Superset / Button', module)
    .add('Secondary', () => {
        return <AxisTheme>
            <Button secondary label="Secondary Button"/>
        </AxisTheme>
    })





