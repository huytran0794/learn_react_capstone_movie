import Swal from "sweetalert2";

const swalUtils = (type, title, content) => {
  let swalConfig = {
    confirmButtonColor: "#C8235D",
    confirmButtonText: "Confirm",
  };
  switch (type) {
    case "error":
      swalConfig.icon = "error";
      swalConfig.title = title || "Oops..";
      swalConfig.text = content;
      break;
    case "success":
      swalConfig.icon = "success";
      swalConfig.title = title || "Good job!";
      swalConfig.confirmButtonColor = "#7f66de";
      swalConfig.text = content;
      break;
    default:
      swalConfig.text = content;
      break;
  }
  Swal.fire(swalConfig);
};

export default swalUtils;
