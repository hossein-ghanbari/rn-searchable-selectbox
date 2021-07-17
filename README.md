# rn-searchable-selectbox

searchable selectbox component for react native

<br />
example in github (https://github.com/hossein-ghanbari/rn-searchable-selectbox)
<br />
<br />

![alt text](https://repository-images.githubusercontent.com/380928572/71db6cc3-3bda-41c5-8ca1-36e4122f9269)

<SearchableSelectbox
<br />
data={data}
<br />
withSeacrh={true or false}
<br />
mutil={true or false}
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

| props                | desc                                              |
| -------------------- | ------------------------------------------------- |
| data                 | {type : array}                                    |
| withSeacrh           | {type : bool}                                     |
| mutil                | {type : bool}                                     |
| label                | {type : string}                                   |
| selectedValue        | {type :if multi = true => array ; else => object} |
| onValueChange        | {desc : 'evnet when value has change'}            |
| errorMsg             | {type : string}                                   |
| selectboxPlaceHolder | {type : string}                                   |
| searchPlaceholder    | {type : string}                                   |

<br />
<br />

(lebelStyle
<br />selectboxStyle
<br />selectboxTextStyle
<br />errorTextStyle
<br />modalHeaderTextStyle
<br />searchInputStyle
<br />listItemStyle
<br />multiBadgeStyle
<br />multiBadgeTextStyle
<br />multiBadgeIconStyle )
<br />
{type : style object}
