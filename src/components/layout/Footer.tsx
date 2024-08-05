import React from "react";

const Footer = () => {
  return (
    <footer className="content_fade text-sm flex flex-col sm:flex-row sm:gap-12">
      <h4 className="uppercase text-primary-900 font-semibold mb-2">
        Special thanks
      </h4>
      <ul className="text-sm text-stone-500 mb-5 sm:flex-1 sm:mb-0">
        <li>
          <a
            href="https://www.figma.com/proto/jULROzyg67v5k9WL55A8l2/Portfolio?page-id=1%3A4&node-id=144-2&viewport=466%2C430%2C0.06&t=EvWTxmyI3ljudtYy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=144%3A2&show-proto-sidebar=1"
            target="_blank"
            className="hover:text-primary-900"
          >
            My friend Mikeng for helping with banner designs
          </a>
        </li>
        <li>
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            className="hover:text-primary-900"
          >
            Brittany Chiang for the portfolio inspiration
          </a>
        </li>
      </ul>
      <div className="text-stone-500 text-center sm:text-right sm:mt-auto">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
