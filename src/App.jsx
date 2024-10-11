
function App() {

  return (
    <div>

      <div className="Home" style={{width: '100%', height: '100%', position: 'relative', background: 'white', margin:0}}>
        <img className="Bgimage" style={{width: 'auto', height: 'auto', left: 0, top: 0, position: 'absolute'}} src="./public/bg.png" />
        <div className="Bgmask" style={{width: 393, height: 852, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.43)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
        <div className="ShopSpectacles" style={{width: 143, height: 33, left: 47, top: 649, position: 'absolute', color: 'rgba(204, 204, 204, 0.80)', fontSize: 15, fontFamily: 'Helvetica', fontWeight: '400', wordWrap: 'break-word'}}>
          SHOP SPECTACLES
        </div>
        <div className="ShopSunglasses" style={{width: 139, height: 20, left: 207, top: 649, position: 'absolute', color: '#CCCCCC', fontSize: 15, fontFamily: 'Helvetica', fontWeight: '400', wordWrap: 'break-word'}}>
          SHOP SUNGLASSES
        </div>
        <div className="Nazar2024" style={{width: 314, height: 14, left: 39, top: 593, position: 'absolute', color: '#E5E5E5', fontSize: 40, fontFamily: 'HelveticaNeue', fontWeight: '400', wordWrap: 'break-word'}}>
          NAZAR 2024
        </div>
        <div className="Winter" style={{width: 204, height: 42, left: 170, top: 593, position: 'absolute'}}><span style={{color: 'black', fontSize: 48, fontFamily: 'a Another Tag', fontWeight: '400', wordWrap: 'break-word'}}> </span>
          <span style={{color: '#3F9FFF', fontSize: 48, fontFamily: 'a Another Tag', fontWeight: '400', wordWrap: 'break-word'}}>WINTER </span>
        </div>
        <div className="ShopContactLenses" style={{width: 218, height: 33, left: 108, top: 669, position: 'absolute', color: 'rgba(204, 204, 204, 0.80)', fontSize: 15, fontFamily: 'Helvetica', fontWeight: '400', wordWrap: 'break-word'}}>
          SHOP CONTACT LENSES
        </div>
        <div className="Header" style={{width: 352, height: 49, left: 21, top: 44, position: 'absolute'}}>
        <img className="Cartbutton" style={{width: 23, height: 23, left: 329, top: 13, position: 'absolute'}} src="./public/cartButton.png" />
        <img className="Searchbutton" style={{width: 24, height: 24, left: 300, top: 12, position: 'absolute'}} src="./public/searchButton.png" />
        <div className="Menubutton" style={{width: 24, height: 24, left: 0, top: 12, position: 'absolute'}} src="./public/menuButton.png"></div>
        <img className="Logo" style={{width: 56, height: 49, left: 150, top: 0, position: 'absolute'}} src="./public/logo.png" />
        </div>
      </div>

    </div>
  )
}

export default App
