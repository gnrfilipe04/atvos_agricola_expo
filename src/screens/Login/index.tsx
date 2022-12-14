import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import { Image, Center } from 'native-base'
import LogoImage from '../../assets/Logo.png'
import { CustomFormProps, useCustomForm } from '../../hooks/useCustomForm'
import { Form } from '../../components/Form'
import { InputBase } from '../../components/Form/inputBase'

export function Login(){
  
  const [ formData, ] = useState<CustomFormProps['customForm']>({
    inputs: [
      { 
        ...InputBase,
        name: 'email',
        testID: String(uuid.v4()),
        placeholder: 'E-mail',
      },
      { 
        ...InputBase,
        name: 'password',
        testID: String(uuid.v4()),
        placeholder: 'Senha',
        type: 'password',
      },
    ],
    inputGroup: {
      'locations': {
        [String(uuid.v4())]: [
          { 
            ...InputBase,
            name: 'local1',
            testID: String(uuid.v4()),
            placeholder: 'Nome do local',
            type: 'text',
          },
        ],
      },
    },    
  })

  const { form, inputValues, changeInputValue, } = useCustomForm({customForm: formData,})

  const sendForm = () => {
    const isEmptyFields = Object.values(inputValues).some(field => !field)
    console.log({inputValues, isEmptyFields,})
    return isEmptyFields
  }

  return (
    <Center flex={1} bg={'primary.500'}>
      <Image source={LogoImage} alt='Atvos_logo'/>
      <Form form={form} handleSubmit={sendForm} changeInputValue={changeInputValue} inputValues={inputValues}/>
    </Center>
  )
}
  
