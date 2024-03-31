import React from 'react'
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

function Privacy() {
  return (<>
    <Navbar/>
    <div className='w-full justify-center p-10 pl-14 bg-slate-100'>
      <h1 className='text-4xl text-center pb-7 underline underline-offset-4'>Privacy Policy</h1><br />
      <p >We may obtain personal information about you from various sources, including this website and other websites <br />
         (this includes any information that you may provide <br /><br />(i) while registering as a member, <br />(ii) engaging in transactions,<br /> (iii) searching products and/or services,  etc.),<br /> <br /> mobile applications, when you call or email us or communicate with us through social media, or when you participate in chats, forums, opinion polls, surveys, bulletin boards, discussion boards or in events or other promotions. We also may obtain information about you from our parent, affiliate or subsidiary companies, business partners and other third parties.

      </p>
    </div>
    <Footer1/>
          <Footer2/>
    </>)
}

export default Privacy
