import Swal from "sweetalert2";
import { useEffect } from "react";

const SpecialOfferPopup = () => {
  useEffect(() => {
    Swal.fire({
      title: "🎉 Special Offer!",
      text: "Get 25% off on your next stay!",
      imageUrl: "https://i.ibb.co/XrgNNSQ1/rural-hotel-2814697-1280.jpg",
      imageWidth: 450,
      imageHeight: 200,
      imageAlt: "Offer banner",
      confirmButtonText: "Claim Now",
      confirmButtonColor: "#facc15",
      showCloseButton: true,
      allowOutsideClick: false,
    });
  }, []);

  return null;
};

export default SpecialOfferPopup;
