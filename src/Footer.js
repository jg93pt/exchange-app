import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid py-5 shadow rounded text-center' id="Footer">
        <a href="https://github.com/jg93pt" target="_blank"><button type="button" className="btn btn-primary btn-lg text-uppercase letter-space"><img src={require("./img/github.png")} className="icon-img" /><b>Github</b></button></a>
        <a href="https://www.linkedin.com/in/jorge-germano-199848a0/" target="_blank"><button type="button" class="btn btn-primary btn-lg text-uppercase letter-space"><img src={require("./img/linkedin.png")} class="icon-img" /><b>Linkedin</b></button></a>
        <div class="only-sm" id="br-github">
          <a href="https://github.com/jg93pt" target="_blank"><img src={require("./img/github-white.png")} class="only-sm mx-auto" /></a>
        </div>
        <div class="only-sm" id="pt-linkedin">
          <a href="https://www.linkedin.com/in/jorge-germano-199848a0/" target="_blank"><img src={require("./img/linkedin-white.png")} class="only-sm mx-auto" /></a>
        </div>
        <p className="text-white mt-3">Copyright © <script>document.write(new Date().getFullYear());</script>2022 <a href="https://github.com/jg93pt" target="_blank" class="CopyRight-developer">JG93PT</a> All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;