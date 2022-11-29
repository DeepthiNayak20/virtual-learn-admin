import './Login.css'
import { useState } from 'react'
import OTPInput, { ResendOTP } from 'otp-input-react'

const Login = () => {
  const [OTP, setOTP] = useState('')
  return (
    <div>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
        secure
      />
      <ResendOTP onResendClick={() => console.log('Resend clicked')} />
    </div>
  )
}

export default Login
