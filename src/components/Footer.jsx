


const Footer = () => {
  return (
    <footer className="residential-footer bg-gray-900 text-white py-12 animate__animated animate__backInLeft">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="footer-section p-4">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-4">We are dedicated to crafting exceptional living spaces that seamlessly blend modern design with natural beauty, creating a haven for our residents.</p>
          <p>Join us in our journey towards sustainable and luxurious living.</p>
        </div>
        <div className="footer-section p-4">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Email: info@residential.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section p-4">
          <h2 className="text-xl font-bold mb-4">Explore</h2>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Homes for Sale</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Floor Plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Amenities</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Virtual Tour</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section my-5 p-4">
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <form className="items-center ">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white py-2 px-4 rounded-md mr-2 my-5" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-200">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Residential. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

