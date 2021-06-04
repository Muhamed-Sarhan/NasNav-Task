import React from 'react';

function Footer() {
  return (
    <div className='main-footer'>
      {/* Column1 */}
      <div>
        <div className='containerFooter'>
          <div className='about'>
            <div className='list-unstyled'>
              <h1>YESHTERY</h1>
              <p>
                Lerom Law Firm was founded in Toronto on the confidence that the
                best way to serve you is to be on the same wavelength with your
                goals, in accord with your moment in life or business, and
                resourceful for your prosperity. Guided by the big goals of
                diversity, inclusion, and the economic prosperity of Canada, we
                achieve the best results for our great clients looking for new
                opportunities in one of the best countries in the world.
              </p>
            </div>
            <div className='copyRights'>
              <p className='col-sm'>
                &copy;{new Date().getFullYear()} Muhamed | All rights reserved |
                Terms Of Service | Privacy
              </p>
            </div>
          </div>
          <hr />
          {/* Column2 */}
          <div className='social'>
            <h4>subscribe to our newsletter</h4>
            <div className='buttonInInput'>
              <input placeholder='enter mail' />
              <button>Submit</button>
            </div>
            <div className='footermenu'>
              <div className='sections'>
                <p>DANK MEMES</p>
                <p>OTHER STUFF</p>
                <p>GUD STUFF</p>
                <p>GUD STUFF</p>
                <p>GUD STUFF</p>
                <div className='payment'>
                  <p>master card</p>
                  <p>master card</p>
                  <p>master card</p>
                </div>
              </div>
              <hr />
              <div className='media'>
                <p>FACEBOOK</p>
                <p>INSTGRAM</p>
                <p>TWITTER</p>
                <div className='nasnav'>
                  <p>nasnav</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
