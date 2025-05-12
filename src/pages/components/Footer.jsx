import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

import CommitIcon from '@mui/icons-material/Commit';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useMediaQuery } from '@mui/material';

import { FaTiktok } from "react-icons/fa6";

import { Phone } from "@mui/icons-material";
import dynamic from "next/dynamic";


export default function Footer() {

  const AgentRegistrationPopup = dynamic(() => import('../components/AgentRegistrationPopup'), {
    ssr: false,
  });

  const [cookieConsentVisible, setCookieConsentVisible] = useState(true);


  useEffect(() => {

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");


    if (cookiesAccepted === "true") {
      setCookieConsentVisible(false);
    }
  }, []);

  const handleClickCustomerPhoneIcon = () => {
    window.location.href = "tel:+254742222888";
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookieConsentVisible(false);
  };

  const handleCancelCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setCookieConsentVisible(false);
  };

  const TikTok = () => {
    return (
      <div>
        <FaTiktok size={18} />
      </div>
    );
  };

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const matches = useMediaQuery('(max-width:950px)');

  useEffect(() => {

    setIsSmallScreen(matches);
  }, [matches]);

  return (
    <footer className="bg-blueCustom text-white p-8">
      {/* Cookie Consent Modal */}
      <AgentRegistrationPopup />
      {cookieConsentVisible && (
        <div className="fixed bottom-4 left-4 bg-[#157EBC] p-4 rounded-lg shadow-lg z-50 w-[320px]">
          <h2 className="text-white text-xl font-semibold mb-4">Cookie Policy</h2>
          <p className="text-white text-sm mb-4">
            We use cookies to enhance your browsing experience. By accepting, you consent to the use of cookies.
            <a
              href="/cookie-policy"
              className="text-white underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </a>
            <a
              href="/privacy-policy"
              className="text-white underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </p>
          <div className="flex justify-between">
            <button
              onClick={handleAcceptCookies}
              className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transform transition-all hover:bg-green-600 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Accept
            </button>
            <button
              onClick={handleCancelCookies}
              className="bg-white text-red-600 px-6 py-3 rounded-full text-sm font-semibold border-2 border-red-600 transform transition-all hover:bg-red-600 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}


      <div className="fixed bottom-4 left-4 flex flex-col items-center justify-center space-y-1">

        {/* <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="ripple w-18 h-18"></div>
                          <div className="ripple w-18 h-18 delay-1"></div>
                          <div className="ripple w-18 h-18 delay-2"></div>
                        </div>
                        <button
                          onClick={handleClickCustomerPhoneIcon}
                          className={`relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:bg-yellow-500 transition-opacity duration-700 ${
                            visible ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <Phone fontSize="medium" />
                        </button>
                      </div> */}

      </div>




      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Home</span>
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">About Us</span>
                </a>
              </li>
              <li>
                <a href="/our-leadership" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Our Leadership</span>
                </a>
              </li>
              <li>
                <a href="/team-members" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Our Management</span>
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Careers</span>
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>



          {/* Insurance Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Insurance</h3>
            <ul>
              <li>
                <a href="/service/evacuation-and-repatriation" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Evacuation and Repatriation Insurance</span>
                </a>
              </li>
              <li>
                <a href="/service/last-expense" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Last Expense Insurance</span>
                </a>
              </li>
              <li>
                <a href="/service/medical" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Medical Insurance</span>
                </a>
              </li>
              <li>
                <a href="/service/hospital-cash" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Hospital Cash Insurance</span>
                </a>
              </li>
              <li>
                <a href="/service/personal-accident" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-xs sm:text-base">Personal Accident Insurance</span>
                </a>
              </li>
            </ul>
          </div>



          {/* Find Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61572489643530&mibextid=ZbWKwL"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /> <FacebookIcon />
                  <span className="truncate text-sm sm:text-base">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/BirdviewInsur?t=oTQd4bz-Tlhpb9OXuEgf2g&s=08"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /> <TwitterIcon />
                  <span className="truncate text-sm sm:text-base">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/birdview-insurance-71b32431a"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /><LinkedInIcon />
                  <span className="truncate text-sm sm:text-base">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@birdview.insurance"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /><TikTok />
                  <span className="truncate text-sm sm:text-base">Tiktok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/birdviewinsurance?igsh=bXN2bng0MjUwaGtp"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /><InstagramIcon />
                  <span className="truncate text-sm sm:text-base">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@birdviewinsurance?si=2pc3TACXTrqNWswA"
                  className="text-gray-300 hover:text-white flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommitIcon className="text-white" /><YouTubeIcon />
                  <span className="truncate text-sm sm:text-base">Youtube</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-sm sm:text-base">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-gray-300 hover:text-white flex items-center space-x-2">
                  <CommitIcon className="text-white" />
                  <span className="truncate text-sm sm:text-base">Cookies Policy</span>
                </a>
              </li>
            </ul>
          </div>

        </div>


        <hr className="mt-8" />

        <div className="flex text-white text-xs sm:text-sm">
          <p className="hidden sm:block">
            Location: Ground Floor, Fidelity Center, Waiyaki Way, Westlands, Nairobi, Kenya
          </p>
          <p className="ml-auto">
            &copy; {new Date().getFullYear()} Birdview Microinsurance. All rights reserved. Regulated by the Insurance Regulatory Authority
          </p>
        </div>


      </div>
    </footer>
  );
}
