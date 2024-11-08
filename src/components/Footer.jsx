
const Footer = () => {
  return (
      <footer className="border shadow-md mt-8 ">

          <div className="text-center">
              <h1 className="text-4xl font-bold my-2">Gadget Heaven</h1>
              <p className="text-lg text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
          </div>

          <div className="footer p-10 md:flex justify-center text-center md:gap-36">
              <nav className="flex flex-col items-center">
                  <h6 className="footer-title text-black">Services</h6>
                  <a className="link link-hover text-gray-500">Products Supports</a>
                  <a className="link link-hover text-gray-500">Order Tackling</a>
                  <a className="link link-hover text-gray-500"> Shopping & Delivery</a>
                  <a className="link link-hover text-gray-500">Return</a>
              </nav>

              <nav className="flex flex-col items-center ml-7 md:ml-0">
                  <h6 className="footer-title text-black">Company</h6>
                  <a className="link link-hover text-gray-500">About us</a>
                  <a className="link link-hover text-gray-500">Career</a>
                  <a className="link link-hover text-gray-500">Contact</a>
                  
              </nav>

              <nav className="flex flex-col items-center ml-4 md:ml-0">
                  <h6 className="footer-title text-black">Legal</h6>
                  <a className="link link-hover text-gray-500">Terms of Service</a>
                  <a className="link link-hover text-gray-500">Privacy policy</a>
                  <a className="link link-hover text-gray-500 ">Cookie policy</a>
              </nav>
          </div>
      </footer>
  );
};

export default Footer;
