// App.tsx
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';

// https://gist.github.com/tuantvk/f6f1cada9d18d2d49219b4f9e8caa859
// https://echobind.com/post/react-hook-form-for-react-native
// https://www.npmjs.com/package/react-native-appearance dark_mode



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
    console.log(data);
  };


  return (
    <View style={styles.container}>

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

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.label}>on time choose:</Text>
      <Controller
        control={control}
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
        rules={{ required: true }}
      />
      </View>

      <View style={styles.button}>
        <Button
          color
          title="Reset"
          onPress={() => {
            reset({
              email: 'jane@example.com',
              password: '****',
              timeInput: ''
            })
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
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});