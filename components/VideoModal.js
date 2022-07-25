import { useState } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

export default function VideoModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="z-20" onClick={() => setOpen(true)}>
        <p className="sr-only">Watch Video</p>
        <svg
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166 166"
        >
          <circle cx="83" cy="83" r="83" fill="#181b35" />
          <path
            d="M129.9 82.9c0 25.9-21 46.9-46.9 46.9s-46.9-21-46.9-46.9C36 57 57 36 82.9 36c26 0 47 21 47 46.9z"
            fill="#ffd761"
          />
          <path
            d="M129.9 82.9c0 12.5-4.9 24.4-13.8 33.2s-20.7 13.8-33.2 13.8-24.4-4.9-33.2-13.8S36 95.4 36 82.9s4.9-24.4 13.8-33.2S70.5 36 82.9 36s24.4 4.9 33.2 13.8 13.8 20.7 13.8 33.1zm-54.1-17c-.4-.3-1-.5-1.5-.5a4.53 4.53 0 0 0-1.6.3c-.5.2-.9.6-1.2 1.1s-.4 1-.4 1.5v29.3c0 .5.1 1.1.4 1.5.3.5.7.8 1.2 1.1.5.2 1 .4 1.6.3.5 0 1.1-.2 1.5-.5l20.5-14.7c.4-.3.7-.6.9-1a3.08 3.08 0 0 0 .3-1.3c0-.5-.1-.9-.3-1.3s-.5-.8-.9-1L75.8 65.9z"
            fill="#6366f1"
          />
          <path
            d="M13.8 105.1l8.3-5-.5-2.1-6.8-.4 6-3.3-.5-2.1-9.6-.9.5 2.1 7.2.3-6.4 3.5.4 2 7.2.3-6.3 3.4.5 2.2zm5.5-27.5l.1-2.2-9.3 3.7-.1 2.2 9.1 4.2.1-2.1-1.8-.8.1-4.3 1.8-.7zm-3.6 4.2l-3.5-1.5 3.6-1.4-.1 2.9zM10.5 71l1.7.4.6-2.7 7.3 1.5.4-2-7.3-1.5.6-2.7-1.7-.4-1.6 7.4zm8.3-17.4l-.9-1.7a5.47 5.47 0 0 0-2.8 2.8C14 57.3 15 60 17.5 61s5.2-.2 6.2-2.7c.5-1.2.5-2.8-.1-4l-1.7.6c.4.9.4 1.8.1 2.6-.6 1.5-2.2 2.1-3.7 1.5s-2.1-2.2-1.5-3.6c.3-.8 1-1.5 2-1.8zm.2-7.5l7.7 5.1 1.2-1.7-3-2 2.4-3.4 3 2 1.2-1.7-7.7-5.1-1.3 1.7 3.2 2.1-2.4 3.4-3.2-2.1-1.1 1.7zm11.6-15.4l8.7 4.8 1.7-1.4-3.1-9.4-1.7 1.4 2.5 6.9-6.4-3.7-1.7 1.4zm12.1-9.3l4.8 7.9 1.8-1.1-4.8-7.9-1.8 1.1zm9.5-5.1l-3.6 1.5 3.5 8.5 3.5-1.5c2.7-1.1 3.8-3.6 2.8-6.1-1.1-2.5-3.6-3.5-6.2-2.4zm2.8 6.9l-1.7.7-2.2-5.3 1.7-.7c1.5-.6 3 0 3.6 1.6.7 1.6.1 3.1-1.4 3.7zm7.8-10.8l1.7 9 7-1.3-.3-1.7-5 .9-.4-2 4.4-.8-.3-1.7-4.4.8-.4-2 4.8-.9-.2-1.7-6.9 1.4zM80.4 10c-2.8 0-5 1.9-5.1 4.6s2 4.7 4.8 4.8c2.8 0 5-2 5.1-4.6.1-2.7-2-4.8-4.8-4.8zm0 1.8a2.74 2.74 0 0 1 2.7 2.9c0 1.6-1.3 2.9-2.9 2.8-1.5 0-2.8-1.3-2.8-2.9a2.97 2.97 0 0 1 3-2.8z"
            fill="#eec548"
          />
          <g fill="none" stroke="#ffd761" stroke-width="2">
            <path
              className="animate-ring"
              d="M20.8,113C32,136.1,55.6,152,83,152c38.1,0,69-30.9,69-69c0-33.5-23.9-61.4-55.5-67.7"
              stroke-linecap="round"
            />
            <circle cx="83" cy="83" r="52" />
          </g>
        </svg>
      </button>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div
            className="relative z-20"
            role="dialog"
            aria-modal="true"
            aria-label="Video explanation of web development at Pupilfirst"
          >
            <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-75 transition-opacity">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div className="relative rounded-lg text-left  shadow-xl transform transition-all sm:my-8">
                  <button
                    className="absolute -top-4 right-0 p-3 flex items-center space-x-1 font-medium rounded-lg bg-white hover:bg-primary-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <span>Close</span>
                  </button>
                  <iframe
                    className="w-full aspect-video"
                    src="https://player.vimeo.com/video/726663551?autoplay=1&amp;loop=1&amp;h=44b8bbaa9b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    style={{
                      width: "80vw",
                      height: "90vh",
                    }}
                    title="Web Development @ Pupilfirst"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </ClientOnlyPortal>
      )}
    </div>
  );
}
