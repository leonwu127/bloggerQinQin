import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/prism-theme.css"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary-700 no-underline"
            >
              BloggerQinQin
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    activeClassName="text-primary-600 font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    activeClassName="text-primary-600 font-semibold"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BloggerQinQin, Built with
              {` `}
              <a 
                href="https://www.gatsbyjs.com"
                className="text-primary-600 hover:text-primary-800"
              >
                Gatsby
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-600"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-600"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 