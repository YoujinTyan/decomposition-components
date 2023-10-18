import Button from "./Button";
import InputForForm from "./InputForForm";


export default function FormToCall() {
  return (
    <div className='form-div'>
      <h3>Оставить завяку</h3>
      <form className='form'>
        <InputForForm placeholder={'Введите ваше имя'} />
        <InputForForm placeholder={'Введите ваше имя'} />
        <Button />
      </form>
    </div>
  );
}