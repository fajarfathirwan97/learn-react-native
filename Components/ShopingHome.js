import React, { Component } from "react";
import { getKey } from "../Lang";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  Modal,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Alert,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const styles = {
  seeMoreText: {
    fontSize: 24,
    textAlignVertical: 'center',
    fontWeight: '100',
    color: 'rgba(0,0,0,0.3)'
  },
  contentText: {
    fontWeight: '800',
    textAlignVertical: 'center',
    fontSize: 24
  },
  sectionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  categoryWrap: {
    minHeight: 200,
    maxHeight: 200,
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapNavBuySell: {
    minHeight: 100,
    flexDirection: 'row',
    justifyContent: 'center', alignSelf: 'center', alignItems: 'center', alignContent: 'center',
    shadowColor: '#c3c3c3',
    borderRadius: 5,
    shadowOpacity: 1,
    backgroundColor: '#f9f9f9',
    elevation: 1,
    marginBottom: 20
  },
  contentwrapNavBuySell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  logoWrapNavBuySell: {
    fontSize: 20,
    fontFamily: 'sans-seri-thinf',
    textAlignVertical: 'center',
    margin: 10
  },
  bulletPopularSearch: {
    justifyContent: 'center',
    borderColor: '#3f3f3f',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    maxHeight: Dimensions.get('screen').height * 0.05,
    padding: Dimensions.get('screen').height * 0.01,
    margin: Dimensions.get('screen').height * 0.01,
  },
  scrollContainerBulletPopularSearch: {
    maxWidth: Dimensions.get('screen').width * 2,
    minWidth: Dimensions.get('screen').width * 2,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  scrollViewPopularSearch: {
    width: Dimensions.get('screen').width,
    paddingBottom: 10,
    minHeight: Dimensions.get('screen').height * 0.2,
    maxHeight: Dimensions.get('screen').height * 0.4,
  }
}
export default class ShopingHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
      ]
    }
  }
  renderPopularSearch() {
    popularSearch = []
    for (let i = 0; i < 12; i++) {
      popularSearch.push(
        <TouchableOpacity key={i} style={styles.bulletPopularSearch}>
          <Text>Popular Search</Text>
        </TouchableOpacity>
      )
    }
    return popularSearch;
  }
  renderCategory() {
    const imageWidth = Math.round(Dimensions.get('screen').width * 0.3)
    category = []
    for (let i = 0; i < 6; i++) {
      category.push(
        <TouchableOpacity key={i} style={{ flex: 0, borderRadius: 5, margin: 2, }}>
          <View style={{ borderRadius: 5 }}>
            <ImageBackground
              style={{ flex: 0, borderRadius: 5, minWidth: imageWidth, minHeight: imageWidth, borderRadius: 5 }}
              source={{ uri: `https://via.placeholder.com/${imageWidth}x${imageWidth}` }} >

              <Text style={{
                maxHeight: imageWidth,
                fontSize: 20,
                flexWrap: 'wrap',
                padding: 10,
                fontWeight: '400',
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'flex-start',
                maxWidth: imageWidth,
                color: 'white',
                textAlignVertical: 'bottom',
              }}>CATEGORY NAME</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      )
    }
    return category
  }
  _renderItem({ item, key }) {
    return (<Image
      style={{ flex: 1, minHeight: 200, minWidth: 300, }}
      resizeMode='stretch'
      source={{ uri: item.src }} />
    )
  }
  render() {
    const imageWidth = Math.round(Dimensions.get('screen').width * 0.3)

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, }} contentContainerStyle={{ flexWrap: 'wrap', margin: 5, padding: 5, backgroundColor: 'white' }} >
        <View style={{ flex: 0, justifyContent: 'space-around', alignContent: 'space-around' }}>
          <View style={{ flex: 0, marginBottom: 10, }}>
            <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={300}
              data={this.state.datas}
              renderItem={this._renderItem}>
            </Carousel>
          </View>
          <View style={styles.wrapNavBuySell}>
            <TouchableOpacity style={styles.contentwrapNavBuySell}>
              <FontAwesome name='shopping-bag' color='#00ace3' size={30} />
              <Text style={styles.logoWrapNavBuySell}> Beli </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentwrapNavBuySell}>
              <FontAwesome name='building' color='#00ace3' size={30} />
              <Text style={styles.logoWrapNavBuySell}> Jual </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.sectionContent}>
              <Text style={styles.contentText}>Kategori Barang</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.seeMoreText}>Lihat Semua</Text>
                <FontAwesome style={{ color: 'rgba(0,0,0,0.3)', textAlignVertical: 'center' }} name='angle-right' size={30} />
              </View>
            </View>
            <View style={styles.categoryWrap}>
              {this.renderCategory()}
            </View>
            <View style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10
            }}>
              <Text style={styles.contentText}>Pencarian Populer</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.seeMoreText}>Lihat Semua</Text>
                <FontAwesome style={{ color: 'rgba(0,0,0,0.3)', textAlignVertical: 'center' }} name='angle-right' size={30} />
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainerBulletPopularSearch}
              style={styles.scrollViewPopularSearch}>
              {this.renderPopularSearch()}
            </ScrollView>
            <View style={{
              padding: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center'
            }}>
              <FontAwesome name='building' color='#fa7477' size={100} />
              <Text style={styles.contentText}>Buka Kios Sekarang, banyak lebihnya!</Text>
              <Text style={{ fontSize: 17, flexWrap: 'wrap', textAlign: 'center' }}>Nikmati transaksi dengan mudah. aman, nyaman, dan menguntungkan</Text>
              <TouchableOpacity style={{
                borderRadius: 20,
                margin: 10,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                flex: 0,
                backgroundColor: '#fa7477'
              }}>
                <Text style={[styles.contentText, { color: 'white', textAlignVertical: 'center', textAlign: 'center' }]}>Buka Kios</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}