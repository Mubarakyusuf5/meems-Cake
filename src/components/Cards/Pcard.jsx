import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Pcard.css'
import { Link } from 'react-router-dom'
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export const Pcard = () => {
  return (
    <>
    <div className="Pcard">
         <div className="overlay">
    <ul>
        <li><Link to="" data-tooltip="Favorite"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart" data-tooltip="Add to Cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
        <li><Link to="/" data-tooltip="View Product"><FontAwesomeIcon icon={faSearch} /></Link></li>
    </ul>
</div>
        <img src="/images/meem2.jpeg" alt="" />
        <div className="con">
        <h3 className="name">Red Velvet Cake (10 inche)</h3>
        <p className="price">$30</p>
        </div>
    </div>
    <div className="Pcard">
    <div className="overlay">
    <ul>
        <li><Link to="" data-tooltip="Favorite"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart" data-tooltip="Add to Cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
        <li><Link to="/" data-tooltip="View Product"><FontAwesomeIcon icon={faSearch} /></Link></li>
    </ul>
</div>

        <img src="/images/meem1.jpeg" alt="" />
        <div className="con">
        <h3 className="name">Red Velvet Cake (10 inche)</h3>
        <p className="price">$30</p>
        </div>

    </div>
    <div className="Pcard">
         <div className="overlay">
    <ul>
        <li><Link to="" data-tooltip="Favorite"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart" data-tooltip="Add to Cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
        <li><Link to="/" data-tooltip="View Product"><FontAwesomeIcon icon={faSearch} /></Link></li>
    </ul>
</div>
        <img src="/images/meem3.jpeg" alt="" />
        <div className="con">
        <h3 className="name">Red Velvet Cake (10 inche)</h3>
        <p className="price">$30</p>
        </div>

    </div>
    <div className="Pcard">
         <div className="overlay">
    <ul>
        <li><Link to="" data-tooltip="Favorite"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart" data-tooltip="Add to Cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
        <li><Link to="/" data-tooltip="View Product"><FontAwesomeIcon icon={faSearch} /></Link></li>
    </ul>
</div>
        <img src="/images/meem5.jpeg" alt="" />
        <div className="con">
        <h3 className="name">Red Velvet Cake (10 inche)</h3>
        <p className="price">$30</p>
        </div>

    </div>
    <div className="Pcard">
         <div className="overlay">
    <ul>
        <li><Link to="" data-tooltip="Favorite"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart" data-tooltip="Add to Cart"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
        <li><Link to="/" data-tooltip="View Product"><FontAwesomeIcon icon={faSearch} /></Link></li>
    </ul>
</div>
        <img src="/images/meem6.jpeg" alt="" />
        <div className="con">
        <h3 className="name">Red Velvet Cake (10 inche)</h3>
        <p className="price">$30</p>
        </div>

    </div>
    </>
  )
}
