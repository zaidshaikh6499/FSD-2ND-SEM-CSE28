import amazonLogo from './assets/amazon_logo.png';
import heroImg from "./assets/hero.jpg";

export default function Amazon() {
  const linkStyle = { display: 'block', fontSize: '0.85rem', marginTop: '15px', color: '#DDDDDD' };

  return (
    <>
      <style>{`
        * { margin: 0; font-family: arial; box-sizing: border-box; }
        .nav-search:hover { border: 2px solid orange; }
        @keyframes mySlideChange {
          25% { background-image: url("${heroImg}"); }
          50% { background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_1500._CB582457311_.jpg"); }
          75% { background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815_1._CB551384116_.jpg"); }
          100% { background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/Shampoos__conditioners_pc._CB796616147_.png"); }
        }
      `}</style>

      <header>
        <div style={{ height: '60px', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div style={{ height: '60px', width: '130px', marginBottom: '2.5px' }}>
            <div style={{ backgroundImage: `url(${amazonLogo})`, backgroundSize: 'cover', height: '50px', width: '120px' }}></div>
          </div>

          <div style={{ border: '1.5px solid transparent' }}>
            <p style={{ color: '#CCCCCC', fontSize: '0.85rem', marginLeft: '15px' }}>Deliver to</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fa-solid fa-location-dot"></i>
              <p style={{ color: '#FFFFFF', fontSize: '1rem' }}>India</p>
            </div>
          </div>

          <div className="nav-search" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '620px', height: '60px', borderRadius: '3.6px' }}>
            <select style={{ backgroundColor: '#f3f3f3', width: '50px', height: '35px', textAlign: 'center', borderTopLeftRadius: '3.6px', borderBottomLeftRadius: '3.6px', border: 'none' }}>
              <option>All</option>
            </select>
            <input placeholder="Search Amazon.in " style={{ width: '100%', fontSize: '1rem', border: 'none', height: '35px' }} />
            <div style={{ width: '45px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', backgroundColor: '#febd69', borderTopRightRadius: '3.6px', borderBottomRightRadius: '3.6px', color: 'black' }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div style={{ border: '1.5px solid transparent' }}>
            <p><span style={{ fontSize: '0.75rem', color: '#FFFFFF' }}>Hello, Sign in</span></p>
            <p style={{ fontSize: '0.875rem', fontWeight: 850 }}>Account &amp; Lists</p>
          </div>

          <div style={{ border: '1.5px solid transparent' }}>
            <p><span style={{ fontSize: '0.75rem', color: '#FFFFFF' }}>Returns</span></p>
            <p style={{ fontSize: '0.875rem', fontWeight: 850 }}>&amp; Orders</p>
          </div>

          <div style={{ border: '1.5px solid transparent', fontSize: '0.85rem', fontWeight: 850 }}>
            <i className="fa-solid fa-cart-shopping" style={{ fontSize: '30px' }}></i>
            {' '}Cart
          </div>
        </div>

        <div style={{ height: '39px', backgroundColor: '#222f3d', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div style={{ color: '#FFFFFF' }}>
            <i className="fa-solid fa-bars"></i>
            {' '}ALL
          </div>
          <div style={{ width: '90%', fontSize: '0.85rem' }}>
            {['Fresh', 'MX Player', 'Sell', 'Bestsellers', "Today's Deals", 'Mobiles', 'New Releases', 'Customer Service', 'Electronics', 'Prime', 'Home & Kitchen', 'Fashion', 'Amazon Pay', 'Books', 'Computers', 'Home Improvement'].map((item, i) => (
              <span key={i} style={{ display: 'inline', color: 'white', marginLeft: '10px', fontSize: '.89rem' }}>{item}</span>
            ))}
          </div>
        </div>
      </header>

      <div style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', animation: '30s linear 10s infinite running mySlideChange' }}>
        <div style={{ backgroundColor: 'white', color: 'black', fontSize: '1rem', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%', margin: '25px' }}>
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a style={{ color: '#007185' }}>Click Here to go amazon.in</a></p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#e2e7e6' }}>
        <div style={{ border: '2.5px solid transparent', boxShadow: '2.5px 5px 2.6px grey', height: '550px', width: '23%', backgroundColor: 'white', padding: '5px 0px 5px', marginTop: '2px' }}>
          <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <h2>Starting &#8377;149 | Headphones</h2>
            <div>
              <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', marginTop: '1rem' }}></div>
              <p>Starting &#8377;249 | boAt</p>
            </div>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex' }}></div>
            <p>Starting &#8377;349 | boult</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex' }}></div>
            <p>Starting &#8377;399 | Noise</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex' }}></div>
            <p>Starting &#8377;499 | Zebronics</p>
          </div>
          <p style={{ color: '#2162a1', fontSize: '0.875rem', paddingTop: '7.5px', paddingLeft: '10px' }}><a>See all offers</a></p>
        </div>

        <div style={{ border: '2.5px solid transparent', boxShadow: '2.5px 5px 2.6px grey', width: '23%', height: '550px', backgroundColor: '#FFFFFF', padding: '5px 0px 5px', marginTop: '2px' }}>
          <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <h2 style={{ marginBottom: '3.5px', marginTop: '0px' }}>Appliances for your home | Up to 55% off</h2>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '0.975px' }}></div>
          </div>
          <p style={{ paddingLeft: '12px' }}>Air conditioners</p>
          <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
          <p style={{ paddingLeft: '10px' }}>Refrigerators</p>
          <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
          <p style={{ paddingLeft: '10px' }}>Microwaves</p>
          <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
          <p style={{ paddingLeft: '10px' }}>Washing Machines</p>
          <p style={{ color: '#2162a1', fontSize: '0.875rem', paddingTop: '6.5px', paddingLeft: '10px' }}><a>See More</a></p>
        </div>

        <div style={{ border: '2.5px solid transparent', boxShadow: '2.5px 5px 2.6px grey', width: '23%', height: '550px', backgroundColor: '#FFFFFF', padding: '5px 0px 5px', marginTop: '2px' }}>
          <div>
            <h2 style={{ marginBottom: '4.5px', marginLeft: '10px' }}>Revamp your home in style</h2>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Cushion covers, bedsheets &amp; More</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Figurines, vases &amp; More</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Home Storage</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Lighting Solutions</p>
            <p style={{ color: '#2162a1', fontSize: '0.875rem', paddingTop: '15px', paddingLeft: '10px' }}><a>Explore all</a></p>
          </div>
        </div>

        <div style={{ border: '1px solid transparent', boxShadow: '2.5px 5px 2.6px grey', width: '23%', height: '550px', backgroundColor: '#FFFFFF', padding: '5px 0px 5px', marginTop: '2px' }}>
          <div>
            <h2 style={{ marginBottom: '3.5px', marginLeft: '10px' }}>Under &#8377;499 | Deals on home improvement essentials</h2>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Under &#8377;199 | Cleaning supplies</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Under &#8377;399 | Bathroom accessories</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Under &#8377;499 | Home tools</p>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg')`, height: '100px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginLeft: '10px' }}></div>
            <p style={{ paddingLeft: '10px' }}>Under &#8377;299 | Wallpapers</p>
            <p style={{ color: '#2162A1', fontSize: '0.875rem', paddingTop: '5.5px', paddingLeft: '10px' }}><a>Explore all</a></p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#e2e7e6' }}>
        <div style={{ border: '2.5px solid transparent', height: '506px', width: '603px', backgroundColor: 'white', padding: '5px 0px 5px', marginTop: '5px', borderRadius: '10px', marginBottom: '10px' }}>
          <div>
            <h2 style={{ marginLeft: '10px', marginBottom: '3.5px' }}>Starting &#8377;499 | Level up your playtime</h2>
            <div style={{ border: 'solid rgba(6, 2, 2, 0.39)', borderRadius: '10px', width: '280px', height: '210px', marginTop: '20px' }}>
              <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71MzVnBdbgL._AC_SY170_.jpg')`, height: '169px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginTop: '5px', marginLeft: '10px' }}>
                <p style={{ paddingLeft: '10px', marginTop: '185px' }}>Controller Skin Dragon Variants</p>
              </div>
            </div>
            <div style={{ border: 'solid rgba(6, 2, 2, 0.39)', borderRadius: '10px', width: '280px', height: '210px', transform: 'translate(290px,-215px)' }}>
              <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61Q1Pa4X4-L._AC_SY170_.jpg')`, height: '169px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginTop: '5px', marginLeft: '10px' }}></div>
              <p style={{ paddingLeft: '10px', marginTop: '10px' }}>Controller Skin Basics Variants</p>
            </div>
            <div style={{ border: 'solid rgba(6, 2, 2, 0.39)', borderRadius: '10px', width: '280px', height: '210px', transform: 'translate(300px,-195px)', marginLeft: '-5px' }}>
              <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61jcMQTJnJL._AC_SY170_.jpg')`, height: '169px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginTop: '5px', marginLeft: '10px' }}></div>
              <p style={{ paddingLeft: '10px' }}>Controller Skin Black Variants</p>
            </div>
            <div style={{ border: 'solid rgba(6, 2, 2, 0.39)', borderRadius: '10px', width: '280px', height: '210px', transform: 'translate(5px,-410px)', marginLeft: '-5px' }}>
              <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61afp1oz7eL._AC_SY170_.jpg')`, height: '169px', width: '90%', backgroundRepeat: 'no-repeat', display: 'flex', marginTop: '5px', marginLeft: '10px' }}></div>
              <p style={{ paddingLeft: '10px' }}>Controller Skin Red Variants</p>
            </div>
          </div>
        </div>

        <div style={{ border: '2.5px solid transparent', boxShadow: '2.5px 5px 2.6px grey', height: '400px', width: '23%', backgroundColor: 'white', padding: '5px 0px 5px', marginTop: '2px', borderRadius: '10px' }}>
          <div>
            <h2 style={{ marginLeft: '10px', marginBottom: '3.5px' }}>Up to 60% off | Car, bike parts &amp; accessories</h2>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg')`, height: '275px', width: '90%', marginTop: '12px', padding: '16px', marginBottom: '12px', borderRadius: '0.25rem', backgroundRepeat: 'no-repeat', display: 'flex' }}></div>
            <p style={{ paddingLeft: '10px', color: '#2162a1', fontSize: '0.875rem' }}><a>See More</a></p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: '2.5px solid transparent', boxShadow: '2.5px 5px 2.6px grey', height: '285px', width: '1510px', backgroundColor: 'white', padding: '5px 0px 5px', marginTop: '1rem' }}>
          <div>
            <h2 style={{ marginTop: '-15px' }}>More Poster to consider.<a>See More</a></h2>
            <div style={{ backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/I/61qHqThm7WL._AC_UL165_SR165,165_.jpg')`, height: '240px', width: '240px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71kq26jGDIL._AC_UL480_FMwebp_QL65_.jpg')`, height: '240px', width: '180px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(240px,-240px)' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61PGgJsj+ML._AC_UL480_FMwebp_QL65_.jpg')`, height: '240px', width: '191px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(440px,-480px)' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61cSw220-rL._AC_UL480_FMwebp_QL65_.jpg')`, height: '265px', width: '195px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(640px,-720px)' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71pvq5MVjxL._AC_UL480_FMwebp_QL65_.jpg')`, height: '280px', width: '205px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(860px,-985px)' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71mEbgkEa6L._AC_UL480_FMwebp_QL65_.jpg')`, height: '280px', width: '205px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(1075px,-1265px)' }}></div>
            <div style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/61r2mNvFB8L._AC_UL480_FMwebp_QL65_.jpg')`, height: '280px', width: '205px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', transform: 'translate(1295px,-1545px)' }}></div>
          </div>
        </div>
      </div>

      <footer>
        <div style={{ backgroundColor: '#37475A', boxShadow: '2.5px 3.6px 2.5px grey', color: '#FFFFFF', height: '50px', width: '100%', padding: '0px 0px 15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Back to Top
        </div>

        <div style={{ backgroundColor: '#232f3e', color: 'white', height: '550px', display: 'flex', justifyContent: 'space-evenly' }}>
          <ul style={{ marginTop: '30px' }}>
            <p>Get to know Us</p>
            <a style={linkStyle}>About Amazon</a>
            <a style={linkStyle}>Careers</a>
            <a style={linkStyle}>Press Releases</a>
            <a style={linkStyle}>Amazon Science</a>
          </ul>
          <ul style={{ marginTop: '30px' }}>
            <p>Connect with Us</p>
            <a style={linkStyle}>Facebook</a>
            <a style={linkStyle}>Twitter</a>
            <a style={linkStyle}>Instagram</a>
            <a style={linkStyle}>YouTube</a>
          </ul>
          <ul style={{ marginTop: '30px' }}>
            <p>Make Money with Us</p>
            <a style={linkStyle}>Sell on Amazon</a>
            <a style={linkStyle}>Sell under Amazon Accelerator</a>
            <a style={linkStyle}>Protect and Build Your Brand</a>
            <a style={linkStyle}>Amazon Global Selling</a>
            <a style={linkStyle}>Supply to Amazon</a>
            <a style={linkStyle}>Become an Affiliate</a>
            <a style={linkStyle}>Fulfilment by Amazon</a>
            <a style={linkStyle}>Advertise Your Products</a>
            <a style={linkStyle}>Amazon Pay on Merchants</a>
          </ul>
          <ul style={{ marginTop: '30px' }}>
            <p>Let Us Help You</p>
            <a style={linkStyle}>Your Account</a>
            <a style={linkStyle}>Returns Centre</a>
            <a style={linkStyle}>Recalls and Product Safety Alerts</a>
            <a style={linkStyle}>100% Purchase Protection</a>
            <a style={linkStyle}>Amazon App Download</a>
            <a style={linkStyle}>Help</a>
          </ul>
        </div>

        <div style={{ backgroundColor: '#232f3e', borderTop: '0.5px solid white', height: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ backgroundImage: `url(${amazonLogo})`, backgroundSize: 'cover', marginTop: '15px', paddingTop: '12px', height: '50px', width: '100px' }}></div>
        </div>

        <div style={{ backgroundColor: '#0f1111', color: 'white', height: '90px' }}>
          <div style={{ fontSize: '20px', textAlign: 'center', paddingTop: '25px' }}>
            <a>Conditions of Use &amp; Sale</a>
            <a>Privacy Notice</a>
            <a>Interest-Based Ads</a>
          </div>
          <div style={{ fontSize: '17px', textAlign: 'center' }}>
            &copy; 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </>
  );
}
