import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Platform,
} from 'react-native';

const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
};
const colors = {
  primary: '#B4001D',
  white: '#fff',
  dark: '#333',
  darkLighten: '#777',
  light: '#eaeaea',
  red: '#dc004e',
};

const SearchableSelectbox = ({
  data,
  withSeacrh,
  label,
  selectedValue,
  onValueChange,
  errorMsg,
  selectboxPlaceHolder,
  searchPlaceholder,
  lebelStyle,
  selectboxStyle,
  selectboxTextStyle,
  errorTextStyle,
  modalHeaderTextStyle,
  searchInputStyle,
  listItemStyle,
}) => {
  const [listData, setListData] = useState([]);
  const [modal, setModal] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const listRef = useRef();

  useEffect(() => {
    setListData(data);
  }, [data]);

  useEffect(() => {
    if (modal && selectedValue) {
      listRef.current.scrollToIndex({animated: true, index: selectedIndex});
    }
  }, [modal, selectedValue, selectedIndex]);

  const handlePressItem = (itemData, itemIndex) => {
    setModal(false);
    setListData(data);
    onValueChange(itemData);
    setSelectedIndex(itemIndex);
  };

  const handleChangeText = text => {
    const results = data.filter(item =>
      item.label.toLowerCase().includes(text.toLowerCase().trim()),
    );
    setListData(results);
  };

  return (
    <>
      <View>
        {label && <Text style={[styles.label, lebelStyle]}>{label}</Text>}
        <TouchableOpacity activeOpacity={1} onPress={() => setModal(true)}>
          <View
            style={[styles.input, selectboxStyle, errorMsg && styles.inputErr]}>
            <Text
              style={[
                styles.text,
                selectboxTextStyle,
                !selectedValue?.id && {color: colors.darkLighten},
              ]}>
              {selectedValue?.label ?? selectboxPlaceHolder}
            </Text>
            <View style={styles.arrow} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.error, errorTextStyle]}>{errorMsg}</Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalHeaderText, modalHeaderTextStyle]}>
              {label}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setModal(false)}
              style={styles.modalHeaderIcon}>
              <View style={styles.modalHeaderIcon1} />
              <View style={styles.modalHeaderIcon2} />
            </TouchableOpacity>
          </View>

          {withSeacrh && (
            <TextInput
              onChangeText={text => handleChangeText(text)}
              placeholder={searchPlaceholder}
              style={[styles.input, searchInputStyle]}
            />
          )}
          <FlatList
            ref={listRef}
            data={listData}
            style={[styles.list, withSeacrh && {marginTop: 10}]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handlePressItem(item, index)}>
                  <Text
                    style={[
                      styles.itemText,
                      listItemStyle,
                      index === 0 && styles.itemTextFirst,
                      selectedValue?.id === item.id && styles.itemTextActive,
                    ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            initialNumToRender={50}
            onScrollToIndexFailed={error => {
              listRef.current.scrollToOffset({
                offset: error.averageItemLength * error.index,
                animated: true,
              });
              setTimeout(() => {
                if (data.items?.length !== 0 && listRef !== null) {
                  listRef.current.scrollToIndex({
                    index: error.index,
                    animated: true,
                  });
                }
              }, 100);
            }}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.light,
    borderRadius: 6,
    paddingHorizontal: 10,
    minHeight: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputErr: {
    borderColor: colors.red,
  },
  arrow: {
    width: 10,
    height: 10,
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
    borderLeftColor: colors.dark,
    borderLeftWidth: 2,
    transform: [{rotateZ: '-45deg'}],
  },
  text: {
    fontSize: fontSize.md,
    color: colors.dark,
  },
  error: {
    fontSize: fontSize.xs,
    color: colors.red,
    paddingHorizontal: 10,
    height: 20,
    marginTop: 2,
  },
  label: {
    fontSize: fontSize.sm,
    color: colors.darkLighten,
    paddingBottom: 4,
    paddingHorizontal: 10,
  },
  modal: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkLighten,
  },
  modalHeaderText: {
    fontSize: fontSize.lg,
    color: colors.dark,
  },
  modalHeaderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotateZ: '45deg'}],
    width: 20,
    height: 20,
  },
  modalHeaderIcon1: {
    width: 18,
    height: 18,
    borderLeftColor: colors.dark,
    borderLeftWidth: 2,
    transform: [{translateX: 8}],
    position: 'absolute',
  },
  modalHeaderIcon2: {
    width: 18,
    height: 18,
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
    transform: [{translateY: -8}],
    position: 'absolute',
  },
  //   list
  list: {},
  itemText: {
    fontSize: fontSize.md,
    textAlign: Platform.OS === 'ios' ? 'right' : 'auto',
    marginTop: 15,
    color: colors.dark,
  },
  itemTextFirst: {
    marginTop: 0,
  },
  itemTextActive: {
    color: colors.primary,
  },
});

export default SearchableSelectbox;
