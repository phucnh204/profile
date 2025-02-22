import React, { useRef, useState } from "react";
import arrow from "@/assets/public/arrow-white.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Props {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true); // Bật trạng thái loading

    // Hiển thị toast loading trước khi gửi email
    const toastId = toast.info("📨 Đang gửi email...", {
      position: "top-right",
      autoClose: false, // Giữ nguyên toast cho đến khi có kết quả
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    });

    emailjs
      .sendForm(
        "service_lg1uoag", // Service ID
        "template_9g50tt3", // Template ID
        form.current,
        "lL74gALJybmkQUAEU" // Public Key
      )
      .then(() => {
        // Cập nhật toast thành công
        toast.update(toastId, {
          render: "✅ Email đã gửi thành công!",
          type: "success",
          autoClose: 3000, // 3s sau sẽ ẩn
          isLoading: false, // Tắt trạng thái loading
        });

        form.current?.reset();
      })
      .catch((error) => {
        // Cập nhật toast thất bại
        toast.update(toastId, {
          render: "❌ Gửi email thất bại. Vui lòng thử lại!",
          type: "error",
          autoClose: 3000,
          isLoading: false,
        });

        console.log("❌ Lỗi: ", error);
      })
      .finally(() => {
        setLoading(false); // Tắt loading
      });
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Thông báo */}
      <ToastContainer />
      <h4
        className={`text-center mb-2 text-lg font-semibold transition duration-300 
        ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        Connect with me
      </h4>

      <h2
        className={`text-center text-4xl sm:text-5xl font-bold transition duration-300 
        ${isDarkMode ? "text-white" : "text-gray-900"}`}
      >
        Get in touch
      </h2>

      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 transition duration-300 
        ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
      >
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl transition 
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="to_name"
            placeholder="Enter your name"
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition 
              ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
          />
          <input
            type="email"
            name="from_name"
            placeholder="Enter your email"
            required
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition 
              ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className={`w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 transition 
            ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
                : "border-gray-300 focus:ring-blue-400"
            }`}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Vô hiệu hóa khi đang gửi
          className={`py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto font-medium transition 
    ${"bg-black hover:bg-gray-900 text-white mt-4"} ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`} // Hiệu ứng khi loading
        >
          {loading ? (
            <>
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              Đang gửi...
            </>
          ) : (
            <>
              Submit now
              <Image
                src={arrow}
                alt="Arrow icon"
                className="w-4 transition duration-300 transform hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
