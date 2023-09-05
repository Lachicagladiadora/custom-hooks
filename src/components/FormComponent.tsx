import { SetStateAction, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFormInput = (initialValue: any) => {
  const  [value, setValue] = useState(initialValue)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const onChange=(e: { target: { value: any } })=>setValue(e.target.value)
  const inputProps = {
    value: value, 
    onChange : onChange,
  }
  return inputProps
}


export const FormComponent = () => {
  // first form
  const [firstName, setFirstName] = useState('Petter')
  const [lastName, setLastName] = useState('Parker')

  const onChangeFirstName=(e: { target: { value: SetStateAction<string> } })=> setFirstName(e.target.value)
  const onChangeLastName=(e: { target: { value: SetStateAction<string> } })=> setLastName(e.target.value)

  // second form
  const firstNameProps = useFormInput('Clark')
  const lastNameProps = useFormInput('Kent')

  return(
    <div
    style={{
      border:'solid 2px orange',
      borderRadius: '10px',
      padding: '10px',
      margin: '20px',
      textTransform: 'capitalize',
      fontWeight:'bold',
      display: 'flex',
      gap: '5px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <p>FormComponent: other example of custom hooks</p>
      <ol>
      <li>component with repetitive logic</li>
          <div style={{
            border:'solid 2px yellow',
            borderRadius: '10px',
            padding: '10px',
            margin: '20px',
            textTransform: 'capitalize',
            display: 'flex',
            gap: '5px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <label>first name: <input type="text" value={firstName} onChange={onChangeFirstName}/></label>
            <label>last name: <input type="text" value={lastName} onChange={onChangeLastName}/></label>
            <p>good morning, {firstName} {lastName}</p>
          </div>
      <li>component with extract repetitive logic</li>
      <div style={{
            border:'solid 2px yellowgreen',
            borderRadius: '10px',
            padding: '10px',
            margin: '20px',
            textTransform: 'capitalize',
            display: 'flex',
            gap: '5px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <label>first name: <input {...firstNameProps}/></label>
            <label>last name: <input {...lastNameProps}/></label>
            <p>good morning, {firstNameProps.value} {lastNameProps.value}</p>
          </div>
      </ol>
    </div>
  )
}