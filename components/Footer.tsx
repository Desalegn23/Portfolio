import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Desalegn Mamo</h3>
            <p className="text-gray-400 text-sm">
              AI & Automation Engineer passionate about building intelligent solutions 
              that streamline operations and reduce manual work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#summary" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Summary
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/desalegn-mamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Desalegn23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <a href="mailto:destamamo123@gmail.com" className="hover:text-white transition-colors">
                destamamo123@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a href="tel:+251921755965" className="hover:text-white transition-colors">
                +251 921 755 965
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Desalegn Mamo. Built with <FaHeart className="text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
