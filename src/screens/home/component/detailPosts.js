import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTailwind} from 'tailwind-rn/dist';
import {getPostDetails} from '../../../redux/actions';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const DetailPosts = ({route, navigation}) => {
  console.log(route);

  const tailwind = useTailwind();

  return (
    <>
      <SafeAreaView>
        <View style={tailwind('flex flex-row items-center py-3 px-4')}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={tailwind('text-red-400')}>
              <Icon
                name="chevron-back-outline"
                type="ionicon"
                color="#0284c7"
              />
            </Text>
          </TouchableOpacity>
          {route.params.data.profile.map(({name, company, id}) => (
            <View key={id} style={tailwind('px-2')}>
              <TouchableHighlight
                key={id}
                style={styles.touchHighlight}
                onPress={() =>
                  navigation.navigate('UserDetails', {
                    data: route.params.data,
                  })
                }>
                <Text
                  key={name.id}
                  style={tailwind(
                    'text-black font-bold text-base bg-gray-100',
                  )}>
                  {name}
                </Text>
              </TouchableHighlight>
              <Text key={company.id} style={tailwind('font-medium')}>
                {company.name}
              </Text>
            </View>
          ))}
        </View>

        {/* Post Section */}
        <ScrollView>
          <View style={tailwind('my-4 px-4')}>
            <Text style={tailwind('text-lg font-bold mb-2 leading-5')}>
              {route.params.data.post.title}
            </Text>
            <Text style={tailwind('text-base')}>
              {route.params.data.post.body}
            </Text>
          </View>

          {/* Comment Section */}

          <View style={tailwind('h-full bg-gray-200 px-4 py-2 mb-16')}>
            <Text style={tailwind('font-semibold text-base')}>Comment</Text>
            {route.params.data.comment.map(({body, name, id}) => (
              <View key={id} style={tailwind('justify-center my-2')}>
                <TouchableOpacity
                  key={id}
                  style={styles.touchHighlight}
                  onPress={() =>
                    navigation.navigate('UserDetails', {
                      data: route.params.data,
                    })
                  }>
                  <View key={id} style={tailwind('py-1')}>
                    <Text
                      key={name.id}
                      style={tailwind('font-bold text-black text-base')}>
                      @{name}
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text key={body.id} style={tailwind('text-sm')}>
                  {body}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },

  touchHighlight: {
    marginTop: 3,
    borderRadius: 6,
  },
});

export default DetailPosts;
