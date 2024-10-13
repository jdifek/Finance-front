import React from "react";

type Props = {
  setActiveEmailModal: React.Dispatch<React.SetStateAction<"LoginEm" | "RegisterEm" | null>>;
  setModal: React.Dispatch<React.SetStateAction<"Login" | "Register">>
}

export const RegisterModal: React.FC<Props> = ({ setModal, setActiveEmailModal }) => {
  return (
    <>
      <h1 className="login__modal--text">
        Register <br /> in seconds
      </h1>
      <p className="login__modal--text-p">
        Use your email <br /> or other service to continue <br /> working with
        MONETA. It's free!
      </p>

      <div className="login__modal--buttons">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActiveEmailModal('RegisterEm')}
          className="login__modal--button"
        >
          <img src="Finance-front/img/email-button.svg" alt="Email login" />
          Register with email
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActiveEmailModal('RegisterEm')}
          className="login__modal--button"
        >
          <img src="Finance-front/img/telegram.svg" alt="Email login" />
          Register with Telegram
        </div>
      </div>

      <div onClick={() => setModal('Login')} className="login__modal--button-work-email">
        <img src="Finance-front/img/work-email-button.svg" alt="Work email" />
        Login
      </div>
    </>
  );
};
