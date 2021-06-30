# rn-searchable-selectbox
searchable selectbox component for react native

<SearchableSelectbox
  data={data} 
  withSeacrh={true}
  label="Countries"
  selectedValue={selected}
  onValueChange={(selectedValue) => setSelected(selectedValue)}
  selectboxPlaceHolder="Select"
  searchPlaceholder="Search"
/>

--- props ---

data : {type : array}
withSeacrh : {type : bool}
label : {type : string}
selectedValue : {type : object}
onValueChange : {desc : 'evnet when value has change'}
errorMsg : {type : string}
selectboxPlaceHolder : {type : string}
searchPlaceholder : {type : string}

(lebelStyle,selectboxStyle,selectboxTextStyle,errorTextStyle,modalHeaderTextStyle,searchInputStyle,listItemStyle) : {type : style object}
