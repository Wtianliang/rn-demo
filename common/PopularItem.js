import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';


class PopularItem extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const favoriteButton = (
      <Icon
        type="font-awesome"
        name="star"
        size={26}
        iconStyle={{padding: 6}}
        onPress={() => {

        }}
        underlayColor={'transparent'}
      />
    )
    const { item } = this.props;
    if (!item || !item.owner) return null;
    return (
      <TouchableOpacity
        onPress={this.props.onSelect}
      >
        <View style={styles.cell_container}>
          <Text style={styles.title}>
            {item.full_name}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text>Author:</Text>
              <Image
                style={{height: 22, width: 22}}
                source={{uri: item.owner.avatar_url}}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Star:</Text>
              <Text>{item.stargazers_count}</Text>
            </View>
            {favoriteButton}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cell_container: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 3,
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: '#212121'
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    color: '#757575'
  }
});
export default PopularItem