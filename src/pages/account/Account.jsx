import { useEffect } from "react"
import './Account.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faDoorClosed, faBook } from "@fortawesome/free-solid-svg-icons"

export const Account = () => {
    useEffect(() => {
      document.title="My Account | Meem's Cakes"
    }, [])
    
  return (
    <>
    <section className="account">
      <div className="Aleft">
          <ul className="accnt-Tag">
            <li><a href=""><FontAwesomeIcon icon={faBook} className="angle" />Orders</a></li>
            <li><a href=""><FontAwesomeIcon icon={faUser} className="angle" />Account Details</a></li>
            <li><a href=""><FontAwesomeIcon icon={faDoorClosed} className="angle" />Logout</a></li>
          </ul>
      </div>
      <div className="Aright">

      </div>
    </section>
    </>
  )
}
