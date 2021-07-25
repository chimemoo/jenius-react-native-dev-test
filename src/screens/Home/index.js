/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {ThemeContext} from '../../commons/contexts/ThemeContext';
import useContacts from '../../commons/hooks/use-contacts';
import ContactItem from './components/ContactItem';
import StoryItem from './components/StoryItem';
import * as Actions from './actions';

export default function Home({navigation}) {
  const {loading, error, contacts, fetchsContacts} = useContacts();
  const {color} = useContext(ThemeContext);
  useEffect(() => {
    fetchsContacts();
  }, []);

  const showDeleteAlert = id => {
    Alert.alert('Delete', 'Delete this contact?', [
      {
        text: 'Delete',
        onPress: () =>
          Actions.DeleteContact(id)
            .then(() => fetchsContacts())
            .catch(() => {}),
      },
      {text: 'Cancel'},
    ]);
  };

  const renderContactItem = ({item}) => (
    <ContactItem
      onPress={() => navigation.push('Detail', {id: item.id})}
      onLongPress={() => showDeleteAlert(item.id)}
      data={item}
    />
  );

  const renderStoryItem = ({item}) => <StoryItem data={item} />;

  const renderHeader = () => (
    <View style={styles.headerFlatlistContainer}>
      <Text style={{...styles.headingTitle, color: color.text}}>Story</Text>
      <View style={styles.storyContainer}>
        {!loading && (
          <FlatList
            data={contacts}
            renderItem={renderStoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      <Text style={{...styles.headingTitle, color: color.text}}>Contact</Text>
    </View>
  );

  const RenderAddContactButton = () => (
    <TouchableOpacity
      onPress={() => navigation.push('Create')}
      style={{...styles.addButton, backgroundColor: color.primary}}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );

  if (error) {
    return (
      <View style={{...styles.container, justifyContent: 'center'}}>
        <Text>Something Error</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={{...styles.container, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{...styles.container, backgroundColor: color.background}}>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={() => fetchsContacts()} />}
      />
      <RenderAddContactButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerFlatlistContainer: {
    marginHorizontal: 10,
  },
  storyContainer: {
    flexDirection: 'row',
  },
  headingTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 30,
  },
});
