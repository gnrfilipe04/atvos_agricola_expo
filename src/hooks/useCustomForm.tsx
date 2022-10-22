import { IInputProps } from 'native-base/lib/typescript/components/primitives/Input/types'
import { useEffect, useState } from 'react'
import uuid from 'react-native-uuid'

export interface CustomInputProps extends IInputProps {
  name: string
}

export interface CustomFormProps {
  customForm: {
    inputs: CustomInputProps[]
    inputGroup?: Record<string, Record<string,CustomInputProps[]>>
  }
}

export function useCustomForm({ customForm, }: CustomFormProps){
  const [ form, setForm, ] = useState({} as CustomFormProps['customForm'])
  const [ inputValues, setInputValues, ] = useState<Record<string, string>>({}) 

  function addInput(input: CustomInputProps){
    setForm({...form, inputs: [ ...form.inputs, {...input, testID: String(uuid.v4()),}, ],})
  }

  function removeAllInputs(){
    setForm({...form, inputs: [],})
  }

  function handleInputValues(customForm: CustomFormProps['customForm']){
    const inputsWithOnChange = customForm.inputs.map(input => ({...input, onChangeText(text: string) {
      setInputValues({...inputValues, [String(input.testID)]: text,})
    },}))

    setForm({...customForm, inputs: inputsWithOnChange,})

  }

  function changeInputValue(input: IInputProps, value: string){
    setInputValues({...inputValues, [input.name]: value,})
  }

  function initInputValues(){
    const initialInputValues = customForm.inputs.reduce((acc, input) => ({...acc, [input.name]: input.value || '',}), {})
    const initialInputGroupValues = customForm?.inputGroup && Object.entries(customForm?.inputGroup)
      .reduce((acc, item) => {
        

        return item
      }, {})  

    console.log({initialInputGroupValues,})
    setInputValues({...initialInputValues, ...customForm?.inputGroup,})
  }

  useEffect(() => {
    initInputValues()
  }, [])

  useEffect(() => {
    handleInputValues(customForm)
  }, [ customForm.inputs, ])

  return {
    addInput,
    removeAllInputs,
    form,
    setForm,
    inputValues,
    changeInputValue,
  }
}
