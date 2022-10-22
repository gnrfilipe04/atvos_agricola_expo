import { Button, Icon, IInputProps, Input, Pressable } from 'native-base'
import React, { useState } from 'react'
import { CustomFormProps } from '../../hooks/useCustomForm'
import { MaterialIcons } from '@expo/vector-icons'

interface FormProps {
  form: CustomFormProps['customForm']
  inputValues: Record<string, string>
  changeInputValue(input: IInputProps, value: string): void
  handleSubmit: () => void
}

export function Form({ form, handleSubmit, changeInputValue, inputValues,}: FormProps){
  const [ show, setShow, ] = useState(false)

  return (
    <>
      {form?.inputs?.map(input => (
        <Input 
          key={input.testID} 
          {...input}
          value={inputValues[String(input.testID)]}
          onChangeText={(text) => {
            changeInputValue(input, text)
          }} 
          secureTextEntry={ input.type === 'password' ? show ? false : true : false} 
          InputRightElement={ input.type === 'password' 
            ? <Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />} size={5} mr="2" color="muted.400" />
            </Pressable> 
            : <></>}/>
      ))}
      <Button onPress={handleSubmit}>Adicionar input</Button>

    </>
  )
}
