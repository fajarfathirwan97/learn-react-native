/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
  ScrollView
} from 'react-native';
import Acordion from "./Components/Acordion";

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      category: [
        {
          title: 'Kolot',
          key: 'key',
          content: 'Content',
          child: [
            {
              title: 'budak kolot 1',
              key: 'key',
              content: 'budak',
              child: [
                {
                  title: 'Incu',
                  key: 'key',
                  content: 'Content2',
                  child: [
                    {
                      title: 'Buyut',
                      key: 'key',
                      content: 'Content2',
                      child: []
                    }, {
                      title: 'Buyut2',
                      key: 'key',
                      content: 'Content2',
                      child: []
                    }
                  ]
                }, {
                  title: 'Incu',
                  key: 'key',
                  content: 'Content2',
                  child: [
                    {
                      title: 'Buyut',
                      key: 'key',
                      content: 'Content2',
                      child: []
                    }
                  ]
                }

              ]
            },
            {
              title: 'budak kolot 1',
              key: 'key',
              content: 'budak',
              child: []
            }
          ]
        },
        {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        },
        {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        }, {
          title: 'Kolot2',
          key: 'key',
          content: 'Content2',
          child: []
        },
        {
          title: 'Kolot3',
          key: 'key',
          content: 'Content3',
          child: []
        }
      ]
    }
  }
  renderChild(item) {
    var childArr = []
    item.child.forEach((child, key) => {
      if (child.child.length > 0) {
        childArr.push(
          <Acordion title={child.title} onPress={() => { }} visible={true} rightTitle="+">
            {child.child.length > 0 ? this.renderChild(child) : child.content}
          </Acordion>
        )
      } else {
        childArr.push(
          <Acordion title={child.title} outputRangeMax={0} visible={false} onPress={() => { this.setState({ ...this.state, category_id: child.key }) }} rightTitle="o">
            <Text>{child.content}</Text>
          </Acordion>
        )
      }
    })
    return childArr
  }
  render() {
    acordion = []
    this.state.category.forEach((item, key) => {
      acordion.push(
        <Acordion title={item.title} visible={item.child.length > 0}
          onPress={() => { item.child.length === 0 ? this.setState({ ...this.state, category_id: item.key }) : '' }}
          rightTitle={item.child.length > 0 ? "+" : "o"}>
          {item.child.length > 0 ? this.renderChild(item) : <Text>item.content</Text>}
        </Acordion>
      )
    })
    return (
      <ScrollView style={{ flex: 1, }}>
        {acordion}
      </ScrollView>
    );
  }
}

