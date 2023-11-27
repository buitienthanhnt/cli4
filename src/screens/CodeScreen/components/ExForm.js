// App.tsx
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-native-date-picker'
import { useState, useCallback } from 'react';
// import MultiSelect from 'react-native-multiple-select';              // * https://www.npmjs.com/package/react-native-multiple-select
import SectionedMultiSelect from 'react-native-sectioned-multi-select'; // ***** https://www.npmjs.com/package/react-native-sectioned-multi-select
import Icon from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
// https://gist.github.com/tuantvk/f6f1cada9d18d2d49219b4f9e8caa859
// https://echobind.com/post/react-hook-form-for-react-native
// https://www.npmjs.com/package/react-native-appearance dark_mode

const items = [
  // this is the parent or 'item'
  {
    name: 'Fruits',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
];

class MultiSelectExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    this.props.setInForm("items", selectedItems);
  };

  render() {
    return (
      <View>
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}



export default function ExForm() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors }, } = useForm();

  const onSubmit = data => {
    // console.log(data);
    addRequest(data);
  };

  const addRequest = useCallback((data)=>{
    try {
      const newReference = database().ref('/user/request').push();
      newReference.set({
        email: data.email,
        password: data.password,
        items: data.items,
        timeInput: data.timeInput
      }).then(()=>{
        console.log('added new data');
      })
    } catch (error) {
      console.log('the request added error!!! ', error);
    }
  }, []);

  const setttingData = useCallback((data)=>{
    try {
      database().ref('/user/request').set({
      
      })
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.label}>First name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
      </View>

      <View>
        <Text style={styles.label}>Last name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.label}>on time choose:</Text>
        <Controller
          control={control}
          rules={{required: false}}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>

              <View style={{ width: 120 }}>
                <Button title={date?.toLocaleDateString() || "select date"} onPress={() => setOpen(true)} />
              </View>

              <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                  setValue('timeInput', date);
                  setOpen(false);
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>
          )}
          name="timeInput"
        />
      </View>

      <View>
        <Text style={styles.label}>multiselect</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelectExample setInForm={setValue}></MultiSelectExample>
          )}
          name="items"
          rules={{ required: false }}
        />
      </View>

      <View style={styles.button}>
        <Button
          color
          title="Reset"
          onPress={() => {
            // reset({
            //   email: 'jane@example.com',
            //   password: '****',
            //   timeInput: ''
            // })
            setttingData()
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 30,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
    padding: 8,
    backgroundColor: '#0e101c',
    gap: 10
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});