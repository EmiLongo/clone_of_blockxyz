import logo from '@imgs/blockLogo.svg'
import '@styles/footer.css'
export const Footer = () => {
  return (
    <footer>
        <div className="secondary_nav">
            <img src={logo} alt="Block Logo" width= "200" />
            <ul>
                <li><a href="https://squareup.com/">Square</a></li>
                <li><a href="https://cash.app/">Cash App</a></li>
                <li><a href="https://spiral.xyz/">Spiral</a></li>
                <li><a href="https://tidal.com/">Tidal</a></li>
                <li><a href="https://www.tbd.website/">TBD</a></li>
            </ul>
        </div>
        <div className="legal">
            <p>© 2024 Block, Inc. BLOCK and the Block Logo are trademarks of Block, Inc. <span><a href="https://block.xyz/legal">Legal</a></span></p>
        </div>
    </footer>
  )
}
