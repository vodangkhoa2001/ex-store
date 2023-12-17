import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl lg:text-6xl max-sm:pb-8">
        Contact
      </h1>
      <div className="max-sm:hidden w-full h-[450px] grid grid-cols-4 gap-8">
        <div className="h-full col-span-1 rounded shadow-md flex flex-col justify-around items-center px-8 py-4 divide-y-2">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-[50px] h-[50px]  bg-secondary rounded-full text-white flex justify-center items-center text-xl mr-4">
                <BsTelephone />
              </div>
              <span className="font-semibold">Call To Us</span>
            </div>
            <div className="text-base">
              <p className="mb-4">We are available 24/7, 7 days a week.</p>
              <p className="mb-4">Phone: +8801611112222</p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center my-4">
                <div className="w-[50px] h-[50px] bg-secondary rounded-full text-white flex justify-center items-center text-xl mr-4">
                  <AiOutlineMail />
                </div>
                <span className="font-semibold">Write To US</span>
              </div>
              <div className="text-base">
                <p className="mb-4">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mb-4">Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Send message */}
        <div className=" h-full col-span-3 rounded shadow-md px-8 relative py-4 ">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-red-400 ">
              <input
                type="text"
                placeholder="Your name"
                className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
              />
            </div>
            <div className="bg-red-400">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
              />
            </div>
            <div className="bg-red-400 h-10">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
              />
            </div>
          </div>
          <div className="bg-red-400 h-[200px] my-10">
            <textarea
              type="text"
              rows={5}
              placeholder="Your Message"
              className="w-full h-full py-3 bg-[#F5F5F5] px-3 outline-none"
            ></textarea>
          </div>
          <button className="bg-secondary py-4 px-8 rounded text-white absolute right-0 mr-8 hover:btn-second-hover">
            Send Message
          </button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden w-full flex flex-col">
        <div className="h-full rounded shadow-md flex flex-col justify-around px-4 py-4 divide-y-2 mx-4">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-[40px] h-[40px] bg-secondary rounded-full text-white flex justify-center items-center text-xl mr-4">
                <BsTelephone />
              </div>
              <span className="font-semibold">Call To Us</span>
            </div>
            <div className="text-base">
              <p className="mb-4">We are available 24/7, 7 days a week.</p>
              <p className="mb-4">Phone: +8801611112222</p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center my-4">
                <div className="w-[40px] h-[40px] bg-secondary rounded-full text-white flex justify-center items-center text-xl mr-4">
                  <AiOutlineMail />
                </div>
                <span className="font-semibold">Write To US</span>
              </div>
              <div className="text-base">
                <p className="mb-4">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mb-4">Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Send message */}
        <div className="border rounded shadow-md mx-4 px-4 py-4 pb-[68px] mt-[52px]">
          <h2 className="text-center text-4xl font-bold ">Feedback</h2>
          <div className="my-3">
            <div className="mb-3 ">
              <input
                type="text"
                placeholder="Your name"
                className="w-full py-3 bg-[#f2eded] px-3 outline-none"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full py-3 bg-[#f2eded] px-3 outline-none"
              />
            </div>
            <div className="mb-3 h-10">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full py-3 bg-[#f2eded] px-3 outline-none"
              />
            </div>
          </div>
          <div className="bg-red-400 h-[200px] my-10">
            <textarea
              type="text"
              rows={5}
              placeholder="Your Message"
              className="w-full h-full py-3 bg-[#f2eded] px-3 outline-none"
            ></textarea>
          </div>
          <button className="bg-secondary py-4 px-8 rounded text-white absolute right-0 mr-8 hover:btn-second-hover">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
