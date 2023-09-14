import "../css/signInPage.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  username: yup.string().required("Tên tài khoản không hợp lệ"),
  password: yup.string().required("Mật khẩu không hợp lệ"),
});
const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const backgroundImage = {
    background: "url(/login-background.webp) center/cover no-repeat",
    height: "100vh",
    backgroundSize: "98%",
  };
  return (
    <div style={backgroundImage}>
      <div className="container">
        <div
          className="login-container d-flex justify-content-center"
          id="login"
        >
          <div className="login-content-container">
            <div className="col-md-12 text-center mt-5">
              <img
                className="logo"
                src="/logo.png"
                alt="logo"
                width={100}
                height={97}
              />
              <h2 className="mb-4 title">
                <span className="title-feature">QUẢN LÝ NHÀ TRỌ</span>
              </h2>
            </div>
            <div className="row login-form-container">
              <div
                className="col-md-12 login-form"
                style={{ backgroundColor: "#fff" }}
              >
                <h3>Đăng nhập tài khoản</h3>
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}
                  method="POST"
                  className="needs-validation"
                  id="login-form"
                >
                  <div className="container-input">
                    <div className="form-group">
                      <input
                        style={{ borderBottom: "1px solid #ccc" }}
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Tên tài khoản *"
                        required=""
                        data-format="stringNumber"
                        {...register("username")}
                      />
                      {errors.username && (
                        <small className="text-danger m-1 p-0">{errors.username.message}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Nhập mật khẩu *"
                        required=""
                        {...register("password")}
                      />
                      {errors.password && (
                        <small className="text-danger m-1 p-0">{errors.password.message}</small>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      id="submit-login"
                      className="btnSubmit btn btn-primary"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
