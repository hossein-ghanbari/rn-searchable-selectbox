# rn-searchable-selectbox
searchable selectbox component for react native

<SearchableSelectbox
  <br />
  data={data} 
  <br />
  withSeacrh={true}
  <br />
  label="Countries"
  <br />
  selectedValue={selected}
  <br />
  onValueChange={(selectedValue) => setSelected(selectedValue)}
  <br />
  selectboxPlaceHolder="Select"
  <br />
  searchPlaceholder="Search"
  <br />
/>
  
  props | desc
------------ | -------------
data | {type : array}
withSeacrh | {type : bool}
label | {type : string}  
selectedValue | {type : object}  
onValueChange | {desc : 'evnet when value has change'} 
errorMsg | {type : string}  
selectboxPlaceHolder | {type : string}  
searchPlaceholder | {type : string}  
(lebelStyle,selectboxStyle,selectboxTextStyle,errorTextStyle,modalHeaderTextStyle,searchInputStyle,listItemStyle) | {type : style object}  
