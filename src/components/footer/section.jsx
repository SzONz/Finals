import './footer.css'
import { Facebook, Youtube, Twitch, Github, ArrowUp } from 'lucide-react';

function Footer(){

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <section className="footer">
            <div className="upper">
                <img src="./images/logo.png" alt="" />
                <div className="f-icons">
                    <Youtube />
                    <Facebook />
                    <Twitch />
                    <Github />
                </div>
            </div>

            <div className="lower">
                <ul>
                    <li>About</li>
                    <li>Private Policies</li>
                    <li>Refunds</li>
                    <li>Support</li>
                    <li>Gift Cards</li>
                </ul>
            </div>

            <div className="copyright">
                <p>© 2026 GearWork. All rights reserved.</p>

                <button className='bto' onClick={backToTop}>
                    Back to top <ArrowUp/>
                </button>

            </div>
        </section>
    )
}

export default Footer;