import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black border-t-2 border-t-blue-500 text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  <svg className="sm:h-22 h-14 w-14 sm:w-20" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="100" viewBox="0 0 120 120">
<circle cx="60" cy="64" r="48" opacity=".35"></circle><circle cx="60" cy="60" r="48" fill="#ff1200"></circle><g><circle cx="60" cy="64" r="38" opacity=".35"></circle><circle cx="60" cy="60" r="38" fill="#a4e2f1"></circle><polygon points="75.022,86.67 56.056,65.53 56.056,37.999 64.056,37.999 64.056,62.468 80.978,81.328" opacity=".35"></polygon><polygon fill="#0037ff" points="75.022,83.67 56.056,62.53 56.056,31.999 64.056,31.999 64.056,59.468 80.978,78.328"></polygon><circle cx="60" cy="63" r="8" opacity=".35"></circle><circle cx="60" cy="60" r="8" fill="#0075ff"></circle></g>
</svg>
    <p className="sm:text-xl">Copyright © {new Date().getFullYear()} -  A <Link target='_blank' to="https://github.com/SreekarSBS" ><span  className='cursor-pointer text-blue-500 text-md font-semibold'>Sreekar SBS</span></Link>  Production</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/SreekarSBS/ContestClock-UI" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="34"
      height="34"
      viewBox="0 0 30 30"
      className="fill-current  hover:text-blue-400 transition-colors"
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  </a>
  {/* GitHub SVG icon */}
  <a href="https://linkedin.com/in/SreekarSBS" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="34"
      height="34"
      viewBox="0 0 48 48"
      className="fill-current transition-transform hover:text-blue-400 "
    >
      <path d="M3.986 41.658V6.339c0-1.291 1.049-2.34 2.34-2.34h35.321c1.291 0 2.34 1.049 2.34 2.34v35.319c0 1.291-1.049 2.34-2.34 2.34H6.326C5.035 43.998 3.986 42.949 3.986 41.658zM15.995 37.998V17.999H9.994v19.999H15.995zM24.995 37.998v-11.5c0-1.931 1.569-3.5 3.5-3.5s3.5 1.569 3.5 3.5l-.001 11.499h6.001V24.998c0-3.861-3.139-7-7-7-2.545 0-4.775 1.363-6.001 3.397l.001-3.396h-6.001v19.999H24.995zM15.995 12.998c0-1.656-1.344-3.001-3-3.001s-3 1.345-3 3.001 1.344 3.001 3 3.001S15.995 14.654 15.995 12.998zM7.926 7.934c2.133-.213 5.756-.895 5.713-1.348C13.581 6.006 8.841 5.971 6.93 6.01 6.379 6.049 5.961 6.521 5.995 7.066c0 .019-.004.916-.003.933-.033 2.013.024 5.591.587 5.647C7.031 13.69 7.713 10.067 7.926 7.934zM23.994 47.005c8.836 0 16.008.225 16.008.501 0 .276-7.172.501-16.008.501S7.986 47.782 7.986 47.506C7.986 47.23 15.158 47.005 23.994 47.005z"></path>
    </svg>
  </a>

  {/* Base64 PNG Badge */}
  
</nav>
</footer>
  )
}

export default Footer
