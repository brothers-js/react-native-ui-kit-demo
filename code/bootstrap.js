import React, {StyleSheet, View} from 'react-native';
import {
  UIApp,
  UIRoute,
} from 'ui-kit';

import RouteMap from './route';

class Bootstrap extends React.Component {

  static defaultProps = {};

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <UIApp>
        <UIRoute routerMap={RouteMapper}></UIRoute>
      </UIApp>
    );
  }
}

const styles = StyleSheet.create ({
});

export default Bootstrap;