import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAlbum,
  getComment,
  getPost,
  getProfile,
} from '../../../redux/actions';

const Posts = props => {
  const {user, post, comment, album, photo} = useSelector(
    state => state.reducer,
  );
  const dispatch = useDispatch();

  const profiles = user;
  const posts = post;
  const comments = comment;


  const profilePosts = posts.map(item => ({
    post: item,
    comment: comments.filter(comm => comm.postId === item.id),
    profile: profiles.filter(prof => prof.id === item.userId),
  }));

  console.log(profilePosts);

  useEffect(() => {
    dispatch(getComment());
    dispatch(getProfile());
    dispatch(getPost());
    dispatch(getAlbum());
  }, []);

  const tailwind = useTailwind();

  const renderPost = ({item}) => {
    return (
      <View style={tailwind('pb-4')}>
        <View style={tailwind('px-4 py-4 bg-gray-200 mx-6 rounded-[20px]')}>
          <View style={tailwind('flex flex-row')}>
            <Image style={tailwind('rounded bg-black w-8 h-8')} />
            <View style={tailwind('px-2 flex flex-col')}>
              {item.profile.map(({name, id}) => (
                <Text key={id} style={tailwind('font-semibold')}>
                  {name}
                </Text>
              ))}
              {item.profile.map(({company, id}) => (
                <Text key={id}>{company.name}</Text>
              ))}
            </View>
          </View>
          <View style={tailwind('mt-2')}>
            <TouchableHighlight
              style={styles.touchHighlight}
              onPress={() => props.navigate('Details', {data: item})}>
              <View style={tailwind('bg-gray-200 p-1')}>
                <Text
                  style={tailwind(
                    'mb-1.5 font-bold text-sm tracking-normal leading-4',
                  )}>
                  {item.post.title}
                </Text>
                <Text key={item.post.id}>{item.post.body}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={profilePosts}
      renderItem={renderPost}
      keyExtractor={item => item.post.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },

  touchHighlight: {
    marginTop: 3,
  },
});

export default Posts;
