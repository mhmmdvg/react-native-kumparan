import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTailwind} from 'tailwind-rn/dist';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {getAlbum, getPhoto} from '../../../redux/actions';

export default function detailUser({route, navigation}) {
  const tailwind = useTailwind();

  const dispatch = useDispatch();
  const {album, photo, user} = useSelector(state => state.reducer);

  const albums = album;
  const photos = photo;

  const userAlbum = albums.map(item => ({
    album: item,
    profile: route.params.data.profile.filter(prof => prof.id === item.userId),
    photo: photos.filter(pht => pht.albumId === item.id),
  }));

  console.log(userAlbum);

  useEffect(() => {
    dispatch(getPhoto());
    dispatch(getAlbum());
  }, []);

  const renderAlbum = ({item}) => {
    console.log(item);
    return (
      <>
        <SafeAreaView style={tailwind('flex flex-col')}>
          <View style={style.itemStyle}>
            {item.photo.map(({thumbnailUrl, id}) => (
              <Image
                key={id}
                style={style.image}
                resizeMode="contain"
                source={{uri: thumbnailUrl}}
              />
            ))}
          </View>
        </SafeAreaView>
      </>
    );
  };

  return (
    <>
      <View>
        <SafeAreaView>
          <View style={tailwind('flex flex-row items-center py-3 px-4')}>
            <TouchableOpacity
              style={tailwind('flex-1')}
              onPress={() => navigation.goBack()}>
              <Text style={tailwind('text-red-400')}>
                <Icon
                  name="chevron-back-outline"
                  type="ionicon"
                  color="#0284c7"
                />
              </Text>
            </TouchableOpacity>
            <Text style={tailwind('grow text-lg text-black font-semibold')}>
              Profile
            </Text>
          </View>
          <View style={tailwind('bg-zinc-100 mt-4 px-4')}>
            {route.params.data.profile.map(
              ({name, email, address, company, id}) => (
                <View style={tailwind('items-center')} key={id}>
                  <Text style={tailwind('font-semibold text-lg')}>{name}</Text>
                  <Text style={tailwind('text-base')}>{email}</Text>
                  <Text style={tailwind('text-base')}>
                    Company: {company.name}
                  </Text>
                  <Text style={tailwind('text-base text-center')}>
                    Address: {address.city}, {address.street}, {address.suite},{' '}
                    {address.zipcode}
                  </Text>
                </View>
              ),
            )}
          </View>

          {/* Album Photo */}
          {/* <View style={style.container}> */}
          <FlatList
            data={userAlbum}
            renderItem={renderAlbum}
            keyExtractor={item => item.album.id}
            numColumns={2}
          />
          {/* </View> */}
        </SafeAreaView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 4,
  },
  image: {
    width: 187,
    height: 187,
    marginTop: 5,
  },
});
