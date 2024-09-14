// @flow strict
import Link from 'next/link';
import { CgGitFork } from 'react-icons/cg';
import { IoStar } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="relative flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/shravan-a-473228146/"
              className="text-[#16f2b3]"
              aria-label="Shravan Ashok LinkedIn Profile"
            >
              Shravan Ashok
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/ShravanAshok16/web-portfolio/tree/master"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              aria-label="Star on GitHub"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ShravanAshok16/web-portfolio/forks"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              aria-label="Fork on GitHub"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
