import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy, FiDownload } from "react-icons/fi";

export const ShareDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [link, setLink] = useState<string>("");
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const socialMediaLogos = [
    { title: "Facebook", icon: <FaFacebookF /> },
    { title: "Twitter", icon: <FaXTwitter /> },
    { title: "Instagram", icon: <FaInstagram /> },
    { title: "Download", icon: <FiDownload /> },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md font-poppins">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <div className="flex flex-row w-full justify-evenly items-center">
            {socialMediaLogos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center group"
              >
                <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-custom-blue group-hover:text-white text-gray-700">
                  {logo.icon}
                </Button>
                <p className="text-gray-700 text-xs group-hover:text-custom-blue">
                  {logo.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center w-full my-3">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-xs text-gray-500">
              Or share with the link
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center space-x-2 w-full">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                className="text-gray-500"
                readOnly
                value={link}
              />
            </div>

            <TooltipProvider>
              <Tooltip open={tooltipVisible}>
                <TooltipTrigger>
                  <Button
                    type="button"
                    onClick={handleCopy}
                    className="px-3 bg-gray-200 hover:bg-custom-blue hover:text-white text-gray-700 relative"
                  >
                    <span className="sr-only">Copy</span>
                    <FiCopy />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  align="center"
                  className="bg-custom-blue text-white font-poppins"
                >
                  Link Copied!
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
