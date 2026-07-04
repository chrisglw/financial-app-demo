import './PhoneFrame.css'

function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="phone-frame-notch" />
      <div className="phone-frame-screen">{children}</div>
    </div>
  )
}

export default PhoneFrame
