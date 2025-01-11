import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FashionFusion</h3>
            <p className="text-gray-400">Elevate your style with our curated collection of trendsetting fashion.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition duration-300">Shop</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 FashionFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

