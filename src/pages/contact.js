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
      <div className="container px-5 py-20 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full border-2 border-gray-700 overflow-hidden flex">
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
          <Link
            to="https://www.linkedin.com/in/arazaki"
            className="btn-secondary"
            target="_blank"
          >
            <Linkedin
              width={30}
              height={30}
              outline={"currentColor"}
              color={"currentColor"}
            />
            LinkedIn
          </Link>
          <button onClick={copyToClipboard} className="btn-secondary">
            <Mail
              width={30}
              height={30}
              outline={"currentColor"}
              color={"transparent"}
            />
            Email - {isCopied ? "copied!" : "click to copy"}
          </button>
          <Link
            to="https://calendly.com/fabioarazaki/30"
            target="_blank"
            className="btn-secondary"
          >
            <Calendar
              width={30}
              height={30}
              outline={"currentColor"}
              color={"transparent"}
            />
            Calendly
          </Link>
        </div>
        <div className="flex mt-8 gap-5">
          <Link
            to="https://twitter.com/arazaki"
            className="btn-icon"
            target="_blank"
          >
            <Twitter
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </Link>
          <Link
            to="https://www.facebook.com/fabioarazaki"
            className="btn-icon"
            target="_blank"
          >
            <Facebook
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </Link>
          <Link
            to="https://www.instagram.com/fabioarazaki/"
            className="btn-icon"
            target="_blank"
          >
            <Instagram
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </Link>
          <Link
            to="https://t.me/taiyogama"
            className="btn-icon"
            target="_blank"
          >
            <Telegram
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </Link>
          <Link
            to="https://api.whatsapp.com/send/?phone=5541985157009"
            className="btn-icon"
            target="_blank"
          >
            <WhatsApp
              width={50}
              height={50}
              outline={"currentColor"}
              color={"currentColor"}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Contact;

export const Head = () => <title>arazaki.dev - contact</title>;
