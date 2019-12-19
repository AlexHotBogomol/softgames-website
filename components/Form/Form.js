import React, {useState, useEffect, useContext} from 'react';
import ModalContext from "../ModalContext";
import useForm from "react-hook-form";
import "./Form.scss";
import Select from "react-select";
import DropdownIndicator from "../DropdownIndicator";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const selectOptions = {
  components: { DropdownIndicator },
  styles: {
    option: (provided, state) => ({
      ...provided,
      color: "#333333",
      backgroundColor: state.isSelected
        ? "#EEEEEE"
        : state.isFocused
          ? "#EEEEEE"
          : "#fffff",
      border: "none",
      transition: "0.2s",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#EEEEEE"
      }
    }),
    control: provided => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      cursor: "pointer"
    })
  }
};

const options = [
  {value: "advertiser", label: "Advertiser"},
  {value: "developer", label: "Developer"},
  {value: "publisher", label: "Publisher"}
];

const Form = ({className, categorySelect, websiteInput, closeFormModal, openThankYouModal}) => {

  if(!closeFormModal){
    closeFormModal = useContext(ModalContext).closeModal
  }

  if(!openThankYouModal){
    openThankYouModal = useContext(ModalContext).openThankYouModal
  }

  const [isSend, setIsSend] = useState(false);
  const [isCaptchaAccept, setCaptchaAccept] = useState(false);

  const { register, handleSubmit, errors, formState, setValue } = useForm();

  const [value, setReactSelect] = useState({value: "advertiser", label: "Advertiser"});

  const onSelectChange = selectedOption => {
    setValue("category", selectedOption.value);
    setReactSelect(selectedOption);
  };

  useEffect(() => {
    register({ name: "category" });
  }, []);

  const formClasses = ['form', className];

  function onCaptchaChange(value) {
    if(value){
      setCaptchaAccept(true);
    }
  }


  const onSubmit = (data, e) => {
    console.log(data);
    if(isCaptchaAccept){
      axios.post('/api/contact', data)
        .then(function (response) {
          setIsSend(true);
          e.target.reset();
          closeFormModal();
          openThankYouModal();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <form className={formClasses.join(" ")} onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <label
            className={!isSend && !errors.firstName && formState.isSubmitted ? 'valid' : !isSend && errors.firstName ? 'invalid' : null}
          >
            <span className="caption">First Name*</span>
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name*"
              ref={register({
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "The name is too short"
                }
              })}
            />
          </label>
          {errors.firstName && <p className="caption form-message">{errors.firstName.message}</p>}
          <label
            className={!isSend && !errors.lastName && formState.isSubmitted ? 'valid' : !isSend && errors.lastName ? 'invalid' : null}
          >
            <span className="caption">Last Name*</span>
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name*"
              ref={register({
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "The last name is too short"
                }
              })}
            />
          </label>
          {errors.lastName && <p className="caption form-message">{errors.lastName.message}</p>}
          <label
            className={!isSend && !errors.email && formState.isSubmitted ? 'valid' : !isSend && errors.email ? 'invalid' : null}
          >
            <span className="caption">E-mail*</span>
            <input
              placeholder="Your E-mail*"
              name="email"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address"
                }
              })}
            />
          </label>
          {errors.email && <p className="caption form-message">{errors.email.message}</p>}
          {websiteInput ? (
              <label>
                <span className="caption">Website (optional)</span>
                <input
                  placeholder="Work website"
                  name="website"
                />
              </label>
          ) : null}
          <label>
            <span className="caption">Telephone (optional)</span>
            <input
              placeholder="Your telephone"
              name="telephone"
              ref={register(
                {
                  pattern: {
                    value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                    message: "Invalid telephone"
                  }
                }
              )}
            />
          </label>
          {errors.telephone && <p className="caption form-message">{errors.telephone.message}</p>}
          <button type="submit" className="btn btn--primary d-none d-md-block">SEND</button>
        </div>
        <div className="col-md-6">
          {categorySelect ?
            (<label>
              <span className="caption">Choose one option</span>
              <Select
                className="form-select"
                name="category"
                value={value}
                options={options}
                onChange={onSelectChange}
                instanceId={100}
                {...selectOptions}
              />
            </label>
            ) : null }
          <label>
            <span className="caption">Additional Background Information</span>
            <textarea
              name="message"
              placeholder="Additional Background Information"
              ref={register}
            />
          </label>
          <ReCAPTCHA
            sitekey="6Lfmm8cUAAAAAKjEuimOBR219uLhphaH61CK--dY"
            className='recaptcha'
            onChange={onCaptchaChange}
          />
          {!isSend && !isCaptchaAccept && formState.isSubmitted && <p className="caption form-message">captcha is required</p>}
          <label className="check">
            <input
              className="check-input"
              type="checkbox"
              name="agreement"
              ref={register({
                required: "You need to accept this agreement"
              })}
            />
            <span className="check-box"/>
              <a href="/privacy" className="link" target="_blank">I agree to the use of my data in accordance with the data
                protection provisions but do not agree to third party sharing.</a>
          </label>
          {errors.agreement && <p className="caption form-message">{errors.agreement.message}</p>}
          <button type="submit" className="btn btn--primary d-md-none">SEND</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
