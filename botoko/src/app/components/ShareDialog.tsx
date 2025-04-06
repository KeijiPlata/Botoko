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
import domtoimage from "dom-to-image";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy, FiDownload } from "react-icons/fi";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export const ShareDialog = ({
  isOpen,
  onClose,
  captureRef,
  setIsCapturing,
}: {
  isOpen: boolean;
  onClose: () => void;
  captureRef: React.RefObject<HTMLDivElement | null>;
  setIsCapturing: (capturing: boolean) => void;
}) => {
  const [link, setLink] = useState<string>("");
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const shareMessage = `Here’s my vote for the 2025 Elections! 🇵🇭 Make yours count too.\n\n#Botoko2025\n#Election2025\n\n`;

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 3000);
    });
  };

  const handleDownload = async () => {
    if (!captureRef.current) {
      console.error("captureRef is null");
      return;
    }

    setIsCapturing(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    domtoimage
      .toPng(captureRef.current, {
        width: 1200,
        height: 630,
        bgcolor: "white",
      })
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "FinalList.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      })
      .finally(() => {
        setIsCapturing(false);
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
            <FacebookShareButton url={link}>
              <div className="flex flex-col gap-2 items-center group">
                <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-custom-blue group-hover:text-white text-gray-700">
                  <FaFacebookF />
                </Button>
                <p className="text-xs text-gray-700 group-hover:text-custom-blue">
                  Facebook
                </p>
              </div>
            </FacebookShareButton>

            <TwitterShareButton title={shareMessage} url={link}>
              <div className="flex flex-col gap-2 items-center group">
                <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-custom-blue group-hover:text-white text-gray-700">
                  <FaXTwitter />
                </Button>
                <p className="text-xs text-gray-700 group-hover:text-custom-blue">
                  Twitter
                </p>
              </div>
            </TwitterShareButton>

            <div className="flex flex-col gap-2 items-center group">
              <Button
                onClick={handleDownload}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-custom-blue group-hover:text-white text-gray-700"
              >
                <FiDownload />
              </Button>
              <p className="text-xs text-gray-700 group-hover:text-custom-blue">
                Download
              </p>
            </div>
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
