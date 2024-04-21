import { Button, message } from 'antd'
import { useLoginMutation } from './app/api/auth'
import { Field, Form, Formik } from 'formik'
import { setCredentials } from './app/data/auth'
import { useNavigate } from 'react-router-dom'
import { loginValidationSchema } from './constants/validation.schema'
import { useAppDispatch } from './app/data/store'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [login] = useLoginMutation()

  return (
    <div className="bg-[#FAFAFB] min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-[500px] w-full items-center rounded-lg shadow-xl pt-10 relative z-50">
        <div className="py-2 mx-auto text-base ">
          <div className="flex flex-col items-center justify-center py-2">
            <img src="/miro.png" className="w-[86.941px] h-[40px]" />{' '}
            <p className="w-full px-8 py-4 text-2xl font-semibold text-center">
              Welcome to Vendor Management
            </p>
          </div>

          <div className="p-12 pt-0 ">
            <Formik
              initialValues={{ emailOrPhonenumber: '', password: '' }}
              validationSchema={loginValidationSchema}
              onSubmit={async (values, {}) => {
                try {
                  const res = await login(values).unwrap()
                  console.log(res)
                  dispatch(setCredentials({ ...res }))
                  navigate('/activities')
                } catch (err: any) {
                  // Handle error
                  // {statusCode: 401, message: "Wrong credentials", error: "Unauthorized"}
                  // console.log(err.data.message)
                  message.error(
                    err.data.message || 'An error occured while trying to login'
                  )
                }
              }}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form>
                  <div className="form_group bg-white">
                    <label htmlFor="email" className="text-base text-gray-500">
                      Email Or Phone Number
                    </label>
                    <Field
                      type="text"
                      name="emailOrPhonenumber"
                      placeholder="Enter Email or Phone number"
                      className="outline-none border-2 border-gray-100 bg-white rounded-lg my-2 px-4 py-2 w-full text-[14px] hover:border-[#0A96CC] focus:border-[#0A96CC] duration-300"
                    />
                    {touched.emailOrPhonenumber &&
                      errors.emailOrPhonenumber && (
                        <small className="text-red-500">
                          {errors.emailOrPhonenumber}
                        </small>
                      )}
                  </div>

                  <div className="mt-2 form_group bg-white">
                    <label
                      htmlFor="password"
                      className="text-base text-gray-500"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="outline-none border-2 border-gray-100 bg-white rounded-lg my-2 px-4 py-2 w-full text-[14px]  hover:border-[#0A96CC] focus:border-[#0A96CC] duration-300"
                    />
                    {touched.password && errors.password && (
                      <small className="text-red-500">{errors.password}</small>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-[16px] bg-white">
                    <div className="flex items-center gap-2 checkbox">
                      <input type="checkbox" name="" id="" className="" />
                      <p className="text-sm mt-[1px]">Remember me</p>
                    </div>

                    <a
                      href="/login"
                      className="text-sm text-[#0A96CC] font-semibold hover:text-black"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className="bg-[#0A96CC] hover:bg-[#0877A3] rounded-md my-2 mt-7 p-4 py-6 flex items-center justify-center "
                    loading={isSubmitting}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* 
        <div className="flex justify-center px-8 py-6 text-xs bg-gray-200 rounded-b-lg">
          Not a Member?&nbsp;
          <a href="/login" className="text-blue-500">
            Sign Up
          </a>
        </div> */}
      </div>
      <img src="/miro-bg.png" className="absolute z-0 -left-28 h-[400px]" />
    </div>
  )
}
