import React from "react";
import { Field, reduxForm } from "redux-form";
import Btn from "../../Btn/Btn";
import { InputText, InputPhone, InputMessage } from "../Inputs/Inputs";
// import { PreloaderForm } from "../PreloaderForm/PreloaderForm";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import {
  requiredInput,
  correctInputLengthName,
  correctInputPhone,
  requiredInputPhone
} from "../validate";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import "./ContactForm.sass";

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="ContactForm">
      {/* {wait ? <PreloaderForm /> : null} */}
      <Field
        name="receiverName"
        label="Кто будет получать заказ?"
        component={InputText}
        validate={[requiredInput, correctInputLengthName]}
        classis="name"
        placeholder="Имя"
      />
      <Field
        name="phone"
        label="Телефон"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={[requiredInput, correctInputPhone, requiredInputPhone]}
        classis="phone"
      />
      <Field
        name="phone2"
        label="Телефон 2"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={correctInputPhone}
        classis="phone"
      />
      <Field
        name="street"
        label="Адрес доставки"
        component={InputText}
        validate={[requiredInput]}
        classis="street"
        placeholder="Улица"
      />
      <Field
        name="house"
        component={InputText}
        validate={[requiredInput]}
        classis="home"
        placeholder="Дом"
      />
      <Field
        name="apartment"
        component={InputText}
        validate={[requiredInput]}
        classis="apartment"
        placeholder="Номер квартиры"
      />
      <Field
        name="comment"
        label="Коментарий к заказу"
        component={InputMessage}
        classis="message"
        placeholder="..."
      />
      <div className="ContactFormBtns" onClick={ScrollTop}>
        <Btn
          type="btn"
          submit={true}
          title="Подтвердить заказ"
          size="medium"
          onClick={handleSubmit}
        />
        <LogoutBtn />
      </div>
    </form>
  );
};

ContactForm = reduxForm({
  form: "ContactForm"
})(ContactForm);

export default ContactForm;
