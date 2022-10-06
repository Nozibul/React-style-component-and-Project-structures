// React Styling Options , Styled Component and Project Structures

import styled from 'styled-components'


const fontSize={
    sm:'0.16rem',
    md:'1rem',
    lg:'1.5rem'
}

const BaseButton = styled.button`
  outline: none;
  text-transform: uppercase;
  font-size:0.9rem;
  border: 1px solid green;
  letter-spacing:2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: ${({size})=> fontSize[size] ?? '1rem'}
` ;

 const PrimaryButton = styled(BaseButton)`
   color: white;
   background: green;
   border-radius:1.5rem ;
 `

const App = () => {
  return (
    <>
      <h1>Style Component React</h1>
      <BaseButton size='lg'>i am button</BaseButton> <br /> <br />
      <PrimaryButton size='sm'>Primary Button</PrimaryButton>
    </>
  )
}

export default App
