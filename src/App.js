import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  // Construir os números na tela input
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>`${prev === '0'?prev='':prev}${num}`);
  }
  // Limpar a tela input
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  // Criar soma
  const handleSumNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  // Criar subtração
  const handleSubtractNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  // Criar multiplicação
  const handleMultiplyNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  // Criar divisão
  const handleDivideNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
  // Função Igual
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubtractNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
       <Input value={currentNumber}/>
       <Row>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="E" onClick={() => {handleAddNumber('E')}}/>
        <Button label="%" onClick={() => {handleAddNumber('%')}}/>
        <Button label="/" onClick={() => {handleAddNumber('/')}}/>
       </Row>
       <Row>
        <Button label="7" onClick={() => {handleAddNumber('7')}}/>
        <Button label="8" onClick={() => {handleAddNumber('8')}}/>
        <Button label="9" onClick={() => {handleAddNumber('9')}}/>
        <Button label="x" onClick={() => {handleAddNumber('x')}}/>
       </Row>
       <Row>
        <Button label="4" onClick={() => {handleAddNumber('4')}}/>
        <Button label="5" onClick={() => {handleAddNumber('5')}}/>
        <Button label="6" onClick={() => {handleAddNumber('6')}}/>
        <Button label="-" onClick={handleSubtractNumbers}/>
       </Row>
       <Row>
        <Button label="1" onClick={() => {handleAddNumber('1')}}/>
        <Button label="2" onClick={() => {handleAddNumber('2')}}/>
        <Button label="3" onClick={() => {handleAddNumber('3')}}/>
        <Button label="+" onClick={handleSumNumbers}/>
       </Row>
       <Row>
        <Button label="." onClick={() => {handleAddNumber('.')}}/>
        <Button label="0" onClick={() => {handleAddNumber('0')}}/>
        <Button label="<" onClick={() => {handleAddNumber('<')}}/>
        <Button label="=" onClick={handleEquals}/>
       </Row>
       
       
      </Content>
    </Container>
  );
}

export default App;
