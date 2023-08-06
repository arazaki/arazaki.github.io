import * as React from "react";
import { Link } from "gatsby";
import {
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Screen,
  Telegram,
  Twitter,
  WhatsApp,
} from "../assets/svg";
import FabioImage from "@/images/fabio-smile.jpg";

const Contact = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const timeout = React.useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("fabioarazaki@gmail.com");
    setIsCopied(true);
    timeout.current = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <main>
      <div className="container px-5 py-12 md:py-20 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full border-2 border-gray-700 md:border-gray-300 overflow-hidden flex">
          <img src={FabioImage} alt="placeholder" />
        </div>
        <h1 className="py-3 text-xl">Fabio Arazaki</h1>
        <p className="mb-5 px-5 leading-6">
          Someone who loves to code, travel, and make friends.
        </p>
        <div className="flex flex-col w-full max-w-2xl gap-4">
          <Link to="/" className="btn-secondary">
            <Screen
              width={30}
              height={30}
              outline={"currentColor"}
              color={"transparent"}
            />
            Website
          </Link>
          <a
            href="https://www.linkedin.com/in/arazaki"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin
              width={30}
              height={30}
              outline={"currentColor"}
              color={"currentColor"}
            />
            LinkedIn
          </a>
          <button onClick={copyToClipboard} className="btn-secondary">
            <Mail
              width={30}
              height={30}
              outline={"currentColor"}
              color={"transparent"}
            />
            Email - {isCopied ? "copied!" : "click to copy"}
          </button>
          <a
            href="https://calendly.com/fabioarazaki/30"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Calendar
              width={30}
              height={30}
              outline={"currentColor"}
              color={"transparent"}
            />
            Calendly
          </a>
        </div>
        <div className="flex mt-8 gap-5">
          <a
            href="https://twitter.com/arazaki"
            className="btn-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </a>
          <a
            href="https://www.facebook.com/fabioarazaki"
            className="btn-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </a>
          <a
            href="https://www.instagram.com/fabioarazaki/"
            className="btn-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </a>
          <a
            href="https://t.me/taiyogama"
            className="btn-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5541985157009"
            className="btn-icon"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;

export const Head = () => <title>arazaki.dev - contact</title>;
