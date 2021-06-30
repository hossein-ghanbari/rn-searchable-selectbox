# rn-searchable-selectbox
searchable selectbox component for react native

![alt text](https://repository-images.githubusercontent.com/380928572/618bc500-d990-11eb-9c39-dcd18d8a476d)

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
lebelStyle
<br />
selectboxStyle
<br />
selectboxTextStyle
<br />
errorTextStyle
<br />
modalHeaderTextStyle
<br />
searchInputStyle
<br />
listItemStyle | {type : style object}  
