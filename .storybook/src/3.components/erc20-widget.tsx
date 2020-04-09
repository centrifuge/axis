import React, {useState} from "react";
import {storiesOf} from "@storybook/react";

import {AxisTheme} from "../../../packages/theme";
import {Erc20Widget} from "../../../packages/erc20-widget/src";

import {Box} from "grommet/es6";


storiesOf("Components | ERC20 Widget", module)
  .add("Default", () => {
    const Comp = (props) => {
      const tokens = {
        '0x6b175474e89094c44da98b954eedeac495271d0f':{
          symbol: "DAI",
          logo: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/dai.png",
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          decimals: 12
        },
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':{
          symbol: "USDC",
          logo: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/usdc.png",
          address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          decimals: 12
        }
      } 
      const token = {
        '0x6b175474e89094c44da98b954eedeac495271d0f':{
          symbol: "DAI",
          logo: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/dai.png",
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          decimals: 12
        },}
      return (
        <AxisTheme>
          <Box>
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget fieldLabel="Enter amount" tokenData={token} />
            </Box>   
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget tokenData={token} balance="5000000"/>
            </Box>   
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget tokenData={token} limit="5000000"/>
            </Box>   
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget fieldLabel="Token Balance (select)" tokenData={tokens} />
            </Box>          
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget tokenData={tokens} search={true} />
            </Box>          
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget fieldLabel="Account Balance" value="5672345432830.28175721724" tokenData={token} precision={3} />
            </Box>
            <Box gap={'medium'} pad={'medium'}>
              <Erc20Widget fieldLabel="Your Balance" value="567234541232432830.28175721724" tokenData={token} precision={3} account="0x79405dEc6e272eFe6510b5Da6F739bE294cc88B4"/>
            </Box>
          </Box>
        </AxisTheme>
      );
    }
    return <Comp/>;
  })