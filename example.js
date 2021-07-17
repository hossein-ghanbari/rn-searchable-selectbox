import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchableSelectbox from './SearchableSelectbox';

const App = () => {
  const [singleSelected, setSingleSelected] = useState();
  const [multiSelected, setMultiSelected] = useState([]);

  const data = [
    {label: 'Afghanistan', id: 1},
    {label: 'Albania', id: 2},
    {label: 'Algeria', id: 3},
    {label: 'Andorra', id: 4},
    {label: 'Angola', id: 5},
    {label: 'Antigua and Barbuda', id: 6},
    {label: 'Argentina', id: 7},
    {label: 'Armenia', id: 8},
    {label: 'Australia', id: 9},
    {label: 'Austria', id: 10},
    {label: 'Azerbaijan', id: 11},
    {label: 'Bahamas', id: 12},
    {label: 'Bahrain', id: 13},
    {label: 'Bangladesh', id: 14},
    {label: 'Barbados', id: 15},
    {label: 'Belarus', id: 16},
    {label: 'Belgium', id: 17},
    {label: 'Belize', id: 18},
    {label: 'Benin', id: 19},
    {label: 'Bhutan', id: 20},
    {label: 'Bolivia', id: 21},
    {label: 'Bosnia and Herzegovina', id: 22},
    {label: 'Botswana', id: 23},
    {label: 'Brazil', id: 24},
    {label: 'Brunei', id: 25},
    {label: 'Bulgaria', id: 26},
    {label: 'Burkina Faso', id: 27},
    {label: 'Burundi', id: 28},
    {label: 'Côte dIvoire', id: 29},
    {label: 'Cabo Verde', id: 30},
  ];

  return (
    <View style={styles.container}>
      <SearchableSelectbox
        data={data}
        withSeacrh={true}
        multi={false}
        label="Countries 'single mode'"
        selectedValue={singleSelected}
        onValueChange={selectedValue => setSingleSelected(selectedValue)}
        selectboxPlaceHolder="Select"
        searchPlaceholder="Search"
      />
      <View style={styles.line} />
      <SearchableSelectbox
        data={data}
        withSeacrh={true}
        multi={true}
        label="Countries 'multi mode"
        selectedValue={multiSelected}
        onValueChange={selectedValue => setMultiSelected(selectedValue)}
        selectboxPlaceHolder="Select"
        searchPlaceholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  line: {
    marginTop: 20,
    paddingTop: 20,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
});

export default App;
